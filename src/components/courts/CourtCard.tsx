
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { MapPin, Star, Phone, Globe, Navigation } from 'lucide-react';
import { Court } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface CourtCardProps {
  court: Court;
}

const CourtCard: React.FC<CourtCardProps> = ({ court }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="aspect-video relative">
        <img
          src={court.imageUrl}
          alt={court.title}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-2 right-2 bg-white/80 text-foreground hover:bg-white/90">
          {court.categoryName}
        </Badge>
      </div>
      <CardContent className="pt-4">
        <Link to={`/courts/${court.id}`}>
          <h3 className="text-lg font-semibold mb-1 hover:text-padel-blue transition-colors">
            {court.title}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground flex items-center gap-1 mb-1">
          <MapPin size={14} />
          <span>{court.street}, {court.neighborhood}</span>
        </p>
        <p className="text-sm text-muted-foreground flex items-center gap-1 mb-2">
          <span className="ml-4">{court.city}, {court.state} {court.postalCode}</span>
        </p>
        <div className="flex items-center gap-1 text-amber-500 mb-2">
          <Star size={16} fill="currentColor" />
          <span className="font-medium">{court.totalScore}</span>
          <span className="text-muted-foreground text-sm">({court.reviewsCount} reviews)</span>
        </div>
        <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
          <Phone size={12} />
          <span>{court.phone}</span>
        </div>
        <div className="text-xs text-muted-foreground flex items-center gap-1">
          <Globe size={12} />
          <a href={court.website} target="_blank" rel="noopener noreferrer" className="hover:text-padel-blue">
            Website
          </a>
        </div>
      </CardContent>
      <CardFooter className="pt-0 flex justify-between">
        <p className="text-xs text-muted-foreground">
          {court.openingHours.monday?.split(' - ')[0]} - {court.openingHours.monday?.split(' - ')[1]}
        </p>
        <Button 
          size="sm" 
          variant="outline" 
          className="text-sm flex items-center gap-1"
          asChild
        >
          <a href={court.locationUrl} target="_blank" rel="noopener noreferrer">
            <Navigation size={14} />
            Show on Map
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourtCard;
