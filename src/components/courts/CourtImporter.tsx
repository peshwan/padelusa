
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload } from 'lucide-react';
import { parseCourtsFromCSV } from '@/utils/csvImport';
import { toast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CourtImporterProps {
  onImport: (courts: any[]) => void;
}

const CourtImporter: React.FC<CourtImporterProps> = ({ onImport }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const csvText = e.target?.result as string;
      if (csvText) {
        const courts = parseCourtsFromCSV(csvText);
        if (courts.length > 0) {
          onImport(courts);
          setIsOpen(false);
          toast({
            title: 'Import successful',
            description: `Imported ${courts.length} courts successfully.`,
          });
        }
      }
    };
    reader.readAsText(file);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Upload size={16} />
          Import Courts CSV
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Import Courts Data</DialogTitle>
          <DialogDescription>
            Upload a CSV file with courts data. The CSV must include all required court fields.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="border-2 border-dashed rounded-md p-6 text-center">
            <Input 
              type="file" 
              accept=".csv" 
              onChange={handleFileUpload} 
              className="mx-auto"
            />
            <p className="text-sm text-muted-foreground mt-2">
              Upload a CSV file with the court data
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground mt-4">
            <h4 className="font-medium">Required CSV format:</h4>
            <p className="text-xs mt-1 font-mono bg-muted p-2 rounded overflow-auto whitespace-nowrap">
              id,title,address,street,city,state,postalCode,countryCode,neighborhood,imageUrl,phone,reviewsCount,totalScore,categoryName,website,locationUrl,searchString,openingHours.monday,openingHours.tuesday,...
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CourtImporter;
