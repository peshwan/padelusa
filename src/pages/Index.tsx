
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SectionHeader } from '@/components/ui/section-header';
import { MapPin, Navigation, Search } from 'lucide-react';
import CourtCard from '@/components/courts/CourtCard';
import { courts } from '@/data/courts';
import FaqSection from '@/components/about/FaqSection';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would navigate to search results
    console.log('Search query:', searchQuery);
  };
  const featuredCourts = courts.slice(0, 3);
  
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

      {/* FAQ Section */}
      <FaqSection />
    </Layout>;
};
export default Index;
