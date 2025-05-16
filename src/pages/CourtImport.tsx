
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Court } from '@/types';
import { useToast } from '@/hooks/use-toast';
import { v4 as uuidv4 } from 'uuid';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { InfoIcon } from 'lucide-react';

const CourtImport = () => {
  const [inputData, setInputData] = useState('');
  const [parsedCourts, setParsedCourts] = useState<Partial<Court>[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const parseCourtData = () => {
    try {
      // Reset any previous errors
      setError(null);

      // Split the input by new lines
      const lines = inputData.trim().split('\n');
      
      // First line should be headers
      const headers = lines[0].split('\t').map(header => header.trim());
      
      // Expected headers based on the Court type
      const expectedHeaders = [
        'address', 'categoryName', 'locationUrl', 'city', 'countryCode', 
        'imageUrl', 'neighborhood', 'openingHours', 'phone', 'postalCode', 
        'reviewsCount', 'state', 'title', 'totalScore', 'website'
      ];
      
      // Validate headers
      expectedHeaders.forEach(header => {
        if (!headers.includes(header)) {
          throw new Error(`Missing required header: ${header}`);
        }
      });

      // Parse the court data
      const courts = lines.slice(1).map(line => {
        const values = line.split('\t').map(value => value.trim());
        
        if (values.length !== headers.length) {
          throw new Error(`Line has ${values.length} values but there are ${headers.length} headers`);
        }
        
        // Create a court object with required default values
        const court: Partial<Court> = {
          id: uuidv4(), // Generate a unique ID
          searchString: '', // Will be set later
        };
        
        headers.forEach((header, index) => {
          const value = values[index];
          
          if (header === 'reviewsCount' || header === 'totalScore') {
            // Convert numeric values to numbers
            court[header as keyof Court] = parseFloat(value) || 0 as any;
          } else if (header === 'openingHours') {
            // Parse opening hours as an object
            try {
              const parsedObj = JSON.parse(value);
              court.openingHours = parsedObj;
            } catch (e) {
              // Default format if not JSON
              court.openingHours = { monday: value };
            }
          } else if (expectedHeaders.includes(header)) {
            // For string values, assign directly with proper type casting
            court[header as keyof Court] = value as any;
          }
        });
        
        // Generate searchString for filtering
        court.searchString = `${court.title || ''} ${court.city || ''} ${court.state || ''} ${court.neighborhood || ''} ${court.categoryName || ''}`.toLowerCase();
        
        // Split address into street if not provided
        if (!court.street && court.address) {
          court.street = court.address.split(',')[0].trim();
        }
        
        return court;
      });
      
      setParsedCourts(courts);
      
      toast({
        title: "Data parsed successfully",
        description: `${courts.length} courts found in data`,
      });
    } catch (err: any) {
      setError(err.message);
      toast({
        variant: "destructive",
        title: "Error parsing data",
        description: err.message,
      });
    }
  };

  const copyCourtData = () => {
    // Convert the parsedCourts to a courts array format
    const courtsArrayString = `export const courts: Court[] = ${JSON.stringify(parsedCourts, null, 2)};`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(courtsArrayString).then(() => {
      toast({
        title: "Courts data copied",
        description: "Data has been copied to clipboard in courts array format",
      });
    });
  };

  return (
    <Layout>
      <div className="container py-8">
        <SectionHeader 
          title="Court Data Import" 
          description="Paste tab-separated court data to parse and use in the application"
        />

        <div className="space-y-6">
          <Alert>
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>Import Instructions</AlertTitle>
            <AlertDescription>
              Paste tab-separated data with headers matching the required fields: 
              address, categoryName, locationUrl, city, countryCode, imageUrl, neighborhood, 
              openingHours, phone, postalCode, reviewsCount, state, title, totalScore, website.
            </AlertDescription>
          </Alert>

          <div className="space-y-2">
            <Textarea 
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              placeholder="Paste tab-separated court data here..."
              className="min-h-[200px] font-mono"
            />
          </div>

          <div className="flex gap-4">
            <Button onClick={parseCourtData}>Parse Data</Button>
            <Button 
              variant="outline" 
              onClick={copyCourtData}
              disabled={parsedCourts.length === 0}
            >
              Copy as Courts Array
            </Button>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {parsedCourts.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">
                Parsed Courts ({parsedCourts.length})
              </h3>
              
              <div className="border rounded-lg overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>City</TableHead>
                      <TableHead>State</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Rating</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {parsedCourts.map((court, index) => (
                      <TableRow key={court.id || index}>
                        <TableCell>{court.title}</TableCell>
                        <TableCell>{court.city}</TableCell>
                        <TableCell>{court.state}</TableCell>
                        <TableCell>{court.categoryName}</TableCell>
                        <TableCell>{court.totalScore} ({court.reviewsCount} reviews)</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CourtImport;
