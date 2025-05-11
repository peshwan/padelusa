import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SectionHeader } from '@/components/ui/section-header';
import { MapPin, Navigation, Search } from 'lucide-react';
import CourtCard from '@/components/courts/CourtCard';
import CoachCard from '@/components/coaches/CoachCard';
import NewsCard from '@/components/news/NewsCard';
import { courts } from '@/data/courts';
import { coaches } from '@/data/coaches';
import { news } from '@/data/news';
const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would navigate to search results
    console.log('Search query:', searchQuery);
  };
  const featuredCourts = courts.slice(0, 3);
  const featuredCoaches = coaches.slice(0, 3);
  const latestNews = news.slice(0, 3);
  return <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-padel-blue to-padel-green py-16 md:py-24 text-white">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Find Padel Courts Across the USA
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">Discover the best padel courts, near you</p>
            
            <form onSubmit={handleSearchSubmit} className="flex max-w-md mx-auto gap-2">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input type="text" placeholder="Search for courts by location..." className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 w-full" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
              </div>
              <Button type="submit" className="bg-white text-padel-blue hover:bg-white/90">
                Search
              </Button>
            </form>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link to="/courts">
                  <Search size={18} />
                  Explore All Courts
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 gap-2">
                <Link to="/courts/near-me">
                  <Navigation size={18} />
                  Courts Near Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
      </section>

      {/* Featured Courts */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <SectionHeader title="Featured Courts" description="Discover top-rated padel courts across the USA" />
            <Link to="/courts" className="text-padel-blue hover:underline">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourts.map(court => <CourtCard key={court.id} court={court} />)}
          </div>
        </div>
      </section>

      {/* Why Padel */}
      <section className="py-16 bg-padel-gray">
        <div className="container">
          <SectionHeader title="Why Play Padel?" description="Discover what makes padel one of the fastest growing sports in the world" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-padel-blue/10 text-padel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Learn</h3>
              <p className="text-muted-foreground">
                Padel has a gentle learning curve, making it accessible for players of all ages and skill levels. You'll be having fun from the first game!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-padel-green/10 text-padel-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Sport</h3>
              <p className="text-muted-foreground">
                Played in doubles, padel is inherently social and perfect for meeting new people while enjoying great exercise in a fun environment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-padel-lightblue/30 text-padel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Great Workout</h3>
              <p className="text-muted-foreground">
                Padel provides an excellent cardiovascular workout while being gentler on the joints than many other racquet sports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Coaches */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <SectionHeader title="Top Padel Coaches" description="Learn from the best padel instructors in the country" />
            <Link to="/coaches" className="text-padel-blue hover:underline">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCoaches.map(coach => <CoachCard key={coach.id} coach={coach} />)}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-padel-gray">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <SectionHeader title="Latest Padel News" description="Stay updated with the latest in the padel community" />
            <Link to="/news" className="text-padel-blue hover:underline">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map(newsItem => <NewsCard key={newsItem.id} news={newsItem} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-padel-blue text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find a Court?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Use our location-based search to find padel courts near you and start playing today!
          </p>
          <Button asChild size="lg" className="bg-white text-padel-blue hover:bg-white/90 gap-2">
            <Link to="/courts/near-me">
              <MapPin size={18} />
              Find Courts Near Me
            </Link>
          </Button>
        </div>
      </section>
    </Layout>;
};
export default Index;