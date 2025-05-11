
import { Coach } from '@/types';

export const coaches: Coach[] = [
  {
    id: "1",
    name: "Carlos Rodriguez",
    imageUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1476&auto=format&fit=crop",
    bio: "Former professional padel player with over 15 years of coaching experience. Specializes in advanced techniques and strategy for competitive players.",
    experience: 15,
    specialties: ["Advanced Techniques", "Strategy", "Competition Training"],
    contactPhone: "(305) 555-2345",
    contactEmail: "carlos@padelcoach.com",
    courtIds: ["1", "3"],
    rating: 4.9,
    reviewsCount: 65
  },
  {
    id: "2",
    name: "Sofia Martinez",
    imageUrl: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1374&auto=format&fit=crop",
    bio: "Certified padel instructor focused on teaching beginners and intermediate players. Patient and detail-oriented approach to building solid foundations.",
    experience: 8,
    specialties: ["Beginners", "Intermediate", "Fundamentals"],
    contactPhone: "(323) 555-7890",
    contactEmail: "sofia@padelcoach.com",
    courtIds: ["2", "5"],
    rating: 4.7,
    reviewsCount: 42
  },
  {
    id: "3",
    name: "Michael Johnson",
    imageUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1374&auto=format&fit=crop",
    bio: "Former tennis pro who transitioned to padel. Specializes in helping tennis players adapt their skills to excel in padel.",
    experience: 10,
    specialties: ["Tennis-to-Padel Transition", "Serve Techniques", "Court Movement"],
    contactPhone: "(212) 555-3456",
    contactEmail: "michael@padelcoach.com",
    courtIds: ["3", "4"],
    rating: 4.8,
    reviewsCount: 38
  },
  {
    id: "4",
    name: "Elena Williams",
    imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1374&auto=format&fit=crop",
    bio: "Youth development specialist with a focus on building proper technique from an early age. Makes learning padel fun and engaging for kids.",
    experience: 12,
    specialties: ["Youth Coaching", "Technique Development", "Group Lessons"],
    contactPhone: "(312) 555-6789",
    contactEmail: "elena@padelcoach.com",
    courtIds: ["4", "6"],
    rating: 4.9,
    reviewsCount: 53
  }
];
