
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { MapPin, Star } from 'lucide-react';
import { Court } from '@/types';
import { Badge } from '@/components/ui/badge';

interface CourtCardProps {
  court: Court;
}

const CourtCard: React.FC<CourtCardProps> = ({ court }) => {
  return (
    <Card className="overflow-hidden hover-scale">
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
        <p className="text-sm text-muted-foreground flex items-center gap-1 mb-2">
          <MapPin size={14} />
          <span>{court.neighborhood}, {court.city}, {court.state}</span>
        </p>
        <div className="flex items-center gap-1 text-amber-500">
          <Star size={16} fill="currentColor" />
          <span className="font-medium">{court.totalScore}</span>
          <span className="text-muted-foreground text-sm">({court.reviewsCount} reviews)</span>
        </div>
      </CardContent>
      <CardFooter className="pt-0 flex justify-between">
        <p className="text-xs text-muted-foreground">
          {court.openingHours.monday?.split(' - ')[0]} - {court.openingHours.monday?.split(' - ')[1]}
        </p>
        <Link 
          to={`/courts/${court.id}`} 
          className="text-sm text-padel-blue hover:underline"
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourtCard;
