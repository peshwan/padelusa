
/**
 * Utility for importing court data from CSV files
 */

import { Court } from '@/types';
import { toast } from '@/hooks/use-toast';

/**
 * Parse CSV string into Court objects
 * @param csvString - The CSV string to parse
 * @returns Array of Court objects
 */
export const parseCourtsFromCSV = (csvString: string): Court[] => {
  try {
    // Split the CSV by lines
    const lines = csvString.split('\n');
    
    // Get the headers from the first line
    const headers = lines[0].split(',').map(header => header.trim());
    
    // Process each line into a Court object
    const courts: Court[] = [];
    
    for (let i = 1; i < lines.length; i++) {
      // Skip empty lines
      if (!lines[i].trim()) continue;
      
      const values = lines[i].split(',').map(value => value.trim());
      const court: Partial<Court> = {};
      
      // Map CSV values to Court properties
      headers.forEach((header, index) => {
        const value = values[index];
        
        // Handle special cases like openingHours object
        if (header.startsWith('openingHours.')) {
          const day = header.split('.')[1];
          if (!court.openingHours) court.openingHours = {};
          court.openingHours[day as keyof typeof court.openingHours] = value;
        } 
        // Handle numeric values
        else if (['reviewsCount', 'totalScore', 'latitude', 'longitude'].includes(header)) {
          court[header as keyof Court] = parseFloat(value) as any;
        }
        // Handle all other string values
        else {
          court[header as keyof Court] = value as any;
        }
      });
      
      // Ensure all required fields are present
      if (court.id && court.title) {
        courts.push(court as Court);
      }
    }
    
    return courts;
  } catch (error) {
    console.error('Error parsing CSV:', error);
    toast({
      title: 'Error importing data',
      description: 'There was an error parsing the CSV file. Please check the format.',
      variant: 'destructive',
    });
    return [];
  }
};

/**
 * Example CSV format:
 * 
 * id,title,address,street,city,state,postalCode,countryCode,neighborhood,imageUrl,phone,reviewsCount,totalScore,categoryName,website,locationUrl,searchString,openingHours.monday,openingHours.tuesday,openingHours.wednesday,openingHours.thursday,openingHours.friday,openingHours.saturday,openingHours.sunday
 * 1,Padel Club Miami,123 Ocean Drive,123 Ocean Drive,Miami,FL,33139,US,South Beach,https://example.com/image1.jpg,(305) 555-1234,42,4.8,Indoor Courts,https://padelclubmiami.com,https://maps.google.com/?q=123+Ocean+Drive,Miami,FL,padel club miami south beach indoor courts florida,8:00 AM - 10:00 PM,8:00 AM - 10:00 PM,8:00 AM - 10:00 PM,8:00 AM - 10:00 PM,8:00 AM - 11:00 PM,9:00 AM - 11:00 PM,9:00 AM - 8:00 PM
 */

