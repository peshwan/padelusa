
export interface Court {
  id: string;
  title: string;
  address: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  countryCode: string;
  neighborhood: string;
  imageUrl: string;
  openingHours: {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
  };
  phone: string;
  reviewsCount: number;
  totalScore: number;
  categoryName: string;
  website: string;
  locationUrl: string;
  searchString: string;
  latitude?: number;
  longitude?: number;
}

export interface Coach {
  id: string;
  name: string;
  imageUrl: string;
  bio: string;
  experience: number;
  specialties: string[];
  contactPhone: string;
  contactEmail: string;
  courtIds: string[];
  rating: number;
  reviewsCount: number;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
}
