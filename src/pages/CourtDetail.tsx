
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { courts } from '@/data/courts';
import { coaches } from '@/data/coaches';
import CoachCard from '@/components/coaches/CoachCard';
import { SectionHeader } from '@/components/ui/section-header';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Phone, Globe, Clock, Navigation, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const CourtDetail = () => {
  const { id } = useParams<{ id: string }>();
  const court = courts.find(c => c.id === id);
  
  if (!court) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Court not found</h2>
          <p className="mb-6">The court you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/courts">Back to Courts</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  // Find coaches associated with this court
  const courtCoaches = coaches.filter(coach => coach.courtIds.includes(court.id));

  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-64 md:h-96">
        <img 
          src={court.imageUrl} 
          alt={court.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="container">
            <Link to="/courts" className="inline-flex items-center gap-1 text-white/80 hover:text-white mb-2">
              <ArrowLeft size={16} />
              <span>Back to courts</span>
            </Link>
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">{court.title}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <Badge className="bg-white/20">{court.categoryName}</Badge>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star size={16} fill="currentColor" />
                    <span>{court.totalScore}</span>
                    <span className="text-white/70">({court.reviewsCount} reviews)</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <Button asChild className="gap-2">
                  <a href={court.locationUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation size={16} />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Location */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <MapPin size={18} className="text-padel-blue" />
                      Location
                    </h3>
                    <p>{court.street}, {court.city}, {court.state} {court.postalCode}</p>
                    <p className="text-muted-foreground">{court.neighborhood}</p>
                    <div className="mt-4 md:hidden">
                      <Button asChild size="sm" className="gap-2">
                        <a href={court.locationUrl} target="_blank" rel="noopener noreferrer">
                          <Navigation size={16} />
                          Get Directions
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  {/* Hours */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Clock size={18} className="text-padel-blue" />
                      Opening Hours
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {Object.entries(court.openingHours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between">
                          <span className="capitalize">{day}</span>
                          <span>{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  {/* Contact */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Phone size={18} className="text-padel-blue" />
                      Contact Information
                    </h3>
                    <div className="space-y-2">
                      <p>Phone: {court.phone}</p>
                      <p className="flex items-center gap-2">
                        <Globe size={16} className="text-padel-blue" />
                        <a 
                          href={court.website} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-padel-blue hover:underline"
                        >
                          Visit Website
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coaches */}
            {courtCoaches.length > 0 && (
              <div className="mt-8">
                <SectionHeader 
                  title="Coaches at this Court"
                  description="Book lessons with experienced padel instructors"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {courtCoaches.map(coach => (
                    <CoachCard key={coach.id} coach={coach} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Book a Court</h3>
                <p className="text-muted-foreground mb-4">
                  Contact the court directly to book your padel session.
                </p>
                <div className="space-y-4">
                  <Button className="w-full" asChild>
                    <a href={`tel:${court.phone}`}>Call to Book</a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a 
                      href={court.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Visit Website
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourtDetail;
