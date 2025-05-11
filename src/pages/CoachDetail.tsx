
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { coaches } from '@/data/coaches';
import { courts } from '@/data/courts';
import { SectionHeader } from '@/components/ui/section-header';
import { Badge } from '@/components/ui/badge';
import { Star, Mail, Phone, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import CourtCard from '@/components/courts/CourtCard';

const CoachDetail = () => {
  const { id } = useParams<{ id: string }>();
  const coach = coaches.find(c => c.id === id);
  
  if (!coach) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Coach not found</h2>
          <p className="mb-6">The coach you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/coaches">Back to Coaches</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  // Find courts where this coach teaches
  const coachCourts = courts.filter(court => coach.courtIds.includes(court.id));

  return (
    <Layout>
      <div className="container py-8">
        <Link to="/coaches" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft size={16} />
          <span>Back to coaches</span>
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <Avatar className="w-24 h-24 border">
                    <AvatarImage src={coach.imageUrl} alt={coach.name} />
                    <AvatarFallback>{coach.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-2">{coach.name}</h1>
                    <div className="flex items-center gap-1 text-amber-500 mb-4">
                      <Star size={18} fill="currentColor" />
                      <span className="font-medium">{coach.rating}</span>
                      <span className="text-muted-foreground">({coach.reviewsCount} reviews)</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {coach.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {coach.experience} years of coaching experience
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">About {coach.name}</h2>
                <div className="prose max-w-none">
                  <p>{coach.bio}</p>
                </div>
              </div>

              {coachCourts.length > 0 && (
                <div>
                  <SectionHeader 
                    title="Teaching Locations"
                    description={`Courts where ${coach.name} provides coaching`}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {coachCourts.map(court => (
                      <CourtCard key={court.id} court={court} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Contact {coach.name}</h3>
                <p className="text-muted-foreground mb-6">
                  Book a lesson or inquire about coaching services.
                </p>
                <div className="space-y-4">
                  <Button className="w-full gap-2" asChild>
                    <a href={`mailto:${coach.contactEmail}`}>
                      <Mail size={16} />
                      Email
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full gap-2" asChild>
                    <a href={`tel:${coach.contactPhone}`}>
                      <Phone size={16} />
                      Call
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

export default CoachDetail;
