
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeader } from '@/components/ui/section-header';
import CourtCard from '@/components/courts/CourtCard';
import { courts } from '@/data/courts';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Courts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [stateFilter, setStateFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredCourts = courts.filter(court => {
    const matchesSearch = searchQuery 
      ? court.searchString.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    
    const matchesState = stateFilter !== 'all' 
      ? court.state === stateFilter 
      : true;

    const matchesCategory = categoryFilter !== 'all'
      ? court.categoryName === categoryFilter
      : true;

    return matchesSearch && matchesState && matchesCategory;
  });

  // Extract unique states and categories for filters
  const states = [...new Set(courts.map(court => court.state))];
  const categories = [...new Set(courts.map(court => court.categoryName))];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-padel-gray py-12">
        <div className="container">
          <SectionHeader 
            title="Browse Padel Courts" 
            description="Find the perfect court for your next padel match"
            centered
          />
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search by name, location, or features..."
                  className="pl-10"
                />
              </div>
              <Button className="gap-2">
                <Filter size={18} />
                <span>Filter</span>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Filter by State</label>
                <Select value={stateFilter} onValueChange={setStateFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All States</SelectItem>
                    {states.map(state => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Filter by Type</label>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Court Listings */}
      <section className="py-12">
        <div className="container">
          <div className="mb-6">
            <h2 className="text-xl font-semibold">
              {filteredCourts.length} {filteredCourts.length === 1 ? 'Court' : 'Courts'} Found
            </h2>
          </div>

          {filteredCourts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourts.map(court => (
                <CourtCard key={court.id} court={court} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No courts found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters to find courts.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Courts;
