
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeader } from '@/components/ui/section-header';
import CoachCard from '@/components/coaches/CoachCard';
import { coaches } from '@/data/coaches';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Coaches = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('all');

  // Get all unique specialties across all coaches
  const allSpecialties = Array.from(
    new Set(coaches.flatMap(coach => coach.specialties))
  );

  const filteredCoaches = coaches.filter(coach => {
    const matchesSearch = searchQuery
      ? coach.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coach.bio.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    
    const matchesSpecialty = specialtyFilter !== 'all'
      ? coach.specialties.includes(specialtyFilter)
      : true;

    return matchesSearch && matchesSpecialty;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-padel-gray py-12">
        <div className="container">
          <SectionHeader 
            title="Find a Padel Coach" 
            description="Learn from experienced instructors and improve your game"
            centered
          />
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search coaches by name or expertise..."
                  className="pl-10"
                />
              </div>
              <div className="w-full md:w-1/3">
                <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Specialties</SelectItem>
                    {allSpecialties.map(specialty => (
                      <SelectItem key={specialty} value={specialty}>{specialty}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coach Listings */}
      <section className="py-12">
        <div className="container">
          <div className="mb-6">
            <h2 className="text-xl font-semibold">
              {filteredCoaches.length} {filteredCoaches.length === 1 ? 'Coach' : 'Coaches'} Available
            </h2>
          </div>

          {filteredCoaches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCoaches.map(coach => (
                <CoachCard key={coach.id} coach={coach} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No coaches found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters to find coaches.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Become a Coach */}
      <section className="py-12 bg-padel-blue text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Are You a Padel Coach?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join our directory to reach more students and grow your coaching business.
          </p>
          <Button asChild size="lg" className="bg-white text-padel-blue hover:bg-white/90">
            <a href="#">Apply to Join</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Coaches;
