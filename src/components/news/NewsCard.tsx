
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { NewsItem } from '@/types';
import { Badge } from '@/components/ui/badge';
import { formatDistanceToNow } from 'date-fns';

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const formattedDate = formatDistanceToNow(new Date(news.date), { addSuffix: true });

  return (
    <Card className="overflow-hidden hover-scale">
      <div className="aspect-video relative">
        <img
          src={news.imageUrl}
          alt={news.title}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-2 right-2">
          {news.category}
        </Badge>
      </div>
      <CardContent className="pt-4">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
          <span>{news.author}</span>
          <time dateTime={news.date}>{formattedDate}</time>
        </div>
        <Link to={`/news/${news.id}`}>
          <h3 className="text-lg font-semibold mb-2 hover:text-padel-blue transition-colors line-clamp-2">
            {news.title}
          </h3>
        </Link>
        <p className="text-muted-foreground line-clamp-3">
          {news.content}
        </p>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
