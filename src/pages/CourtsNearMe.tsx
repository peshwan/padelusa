
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { MapPin, Loader2 } from 'lucide-react';
import CourtCard from '@/components/courts/CourtCard';
import { courts } from '@/data/courts';
import { Court } from '@/types';
import { useToast } from '@/components/ui/use-toast';

const CourtsNearMe = () => {
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [nearbyCourts, setNearbyCourts] = useState<Court[]>([]);
  const { toast } = useToast();

  const getLocation = () => {
    setIsLoading(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Position obtained:", position.coords);
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          setIsLoading(false);
          toast({
            title: "Location found",
            description: "Finding courts near your location..."
          });
        },
        (error) => {
          setIsLoading(false);
          toast({
            variant: "destructive",
            title: "Error getting location",
            description: "Please allow location access to find nearby courts."
          });
          console.error("Error getting location:", error);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      setIsLoading(false);
      toast({
        variant: "destructive",
        title: "Geolocation not supported",
        description: "Your browser does not support location services."
      });
    }
  };

  // Calculate distance between two coordinates (in miles)
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    if (!lat1 || !lon1 || !lat2 || !lon2) return Infinity;
    
    const R = 3958.8; // Earth's radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;  
    const dLon = (lon2 - lon1) * Math.PI / 180;  
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return R * c;
  };

  useEffect(() => {
    if (userLocation) {
      console.log("Finding courts near", userLocation);
      
      // Filter and sort courts by distance
      const courtsWithDistance = courts
        .map(court => {
          const distance = calculateDistance(
            userLocation.latitude,
            userLocation.longitude,
            court.latitude || 0,
            court.longitude || 0
          );
          return { ...court, distance };
        })
        .filter(court => court.distance !== Infinity)  // Filter out courts without valid coordinates
        .sort((a, b) => (a.distance || Infinity) - (b.distance || Infinity))
        .slice(0, 6); // Get the 6 closest courts

      console.log("Found courts:", courtsWithDistance);
      setNearbyCourts(courtsWithDistance);
    }
  }, [userLocation]);

  return (
    <Layout>
      <section className="bg-padel-gray py-12">
        <div className="container text-center">
          <SectionHeader
            title="Courts Near Me"
            description="Find padel courts close to your current location"
            centered
          />

          {!userLocation && (
            <div className="max-w-md mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-lg font-semibold mb-2">Share your location</h3>
                <p className="text-muted-foreground mb-4">
                  Allow access to your location to find padel courts near you.
                </p>
                <Button 
                  onClick={getLocation} 
                  className="w-full gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Locating...</span>
                    </>
                  ) : (
                    <>
                      <MapPin size={16} />
                      <span>Find Courts Near Me</span>
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {userLocation && (
        <section className="py-12">
          <div className="container">
            <h2 className="text-xl font-semibold mb-6">
              {nearbyCourts.length} {nearbyCourts.length === 1 ? 'Court' : 'Courts'} Found Near You
            </h2>
            
            {nearbyCourts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nearbyCourts.map(court => (
                  <CourtCard key={court.id} court={court} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-xl font-semibold mb-2">No courts found nearby</h3>
                <p className="text-muted-foreground mb-4">
                  We couldn't find any padel courts near your current location.
                </p>
                <Button asChild>
                  <Link to="/courts">Browse All Courts</Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default CourtsNearMe;
