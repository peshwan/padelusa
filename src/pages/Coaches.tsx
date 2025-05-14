import React from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
const Coaches = () => {
  return <Layout>
      {/* Hero */}
      <section className="bg-padel-gray py-12">
        <div className="container">
          <SectionHeader title="Find a Padel Coach" description="Learn from experienced instructors and improve your game" centered />
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Coming Soon!</h2>
          <p className="text-xl text-muted-foreground mb-8">
            We're currently building our network of certified padel coaches.
            Check back soon to find the perfect coach for your game.
          </p>
          <div className="bg-padel-gray/30 p-8 rounded-lg border border-padel-gray/50 mb-8">
            <h3 className="text-xl font-semibold mb-4">Be the First to Know</h3>
            <p className="mb-4">We'll notify you when our coach directory launches. Stay tuned for expert instruction and training opportunities. 
contact@padelcourtnearby.info</p>
          </div>
        </div>
      </section>

      {/* Become a Coach - Keep this section */}
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
    </Layout>;
};
export default Coaches;