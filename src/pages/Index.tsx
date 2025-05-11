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