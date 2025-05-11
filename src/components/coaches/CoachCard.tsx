
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Coach } from '@/types';
import { Badge } from '@/components/ui/badge';

interface CoachCardProps {
  coach: Coach;
}

const CoachCard: React.FC<CoachCardProps> = ({ coach }) => {
  return (
    <Card className="overflow-hidden hover-scale">
      <div className="aspect-square relative">
        <img
          src={coach.imageUrl}
          alt={coach.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="pt-4">
        <Link to={`/coaches/${coach.id}`}>
          <h3 className="text-lg font-semibold mb-1 hover:text-padel-blue transition-colors">
            {coach.name}
          </h3>
        </Link>
        <div className="flex items-center gap-1 text-amber-500 mb-2">
          <Star size={16} fill="currentColor" />
          <span className="font-medium">{coach.rating}</span>
          <span className="text-muted-foreground text-sm">({coach.reviewsCount} reviews)</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {coach.specialties.slice(0, 2).map((specialty, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {specialty}
            </Badge>
          ))}
          {coach.specialties.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{coach.specialties.length - 2} more
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <p className="text-xs text-muted-foreground">
          {coach.experience} years experience
        </p>
        <Link 
          to={`/coaches/${coach.id}`} 
          className="text-sm text-padel-blue hover:underline ml-auto"
        >
          View Profile
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CoachCard;
