import React from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FaqSection from '@/components/about/FaqSection';

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-padel-blue to-padel-green py-16 text-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Padel</h1>
          <p className="text-xl max-w-2xl mx-auto text-white/90">
            Discover the exciting sport that's taking the United States by storm
          </p>
        </div>
      </section>

      {/* What is Padel */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                title="What is Padel?" 
                description="A unique racquet sport that combines elements of tennis and squash"
              />
              <div className="prose max-w-none">
                <p>
                  Padel is a racquet sport typically played in doubles on an enclosed court about a third the size of a tennis court. 
                  The court has walls, and the balls can be played off them, similar to squash.
                </p>
                <p>
                  Invented in Mexico in 1969, padel has grown exponentially in popularity across Europe and Latin America, and is now rapidly gaining traction in the United States.
                </p>
                <p>
                  The sport is easier to learn than tennis, making it accessible to players of all ages and skill levels. It's highly social, offers great exercise, and provides a perfect blend of strategy and fun.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1626318305863-bb23d0297c0b?q=80&w=1470&auto=format&fit=crop" 
                alt="Padel Court" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to Play */}
      <section className="py-16 bg-padel-gray">
        <div className="container">
          <SectionHeader 
            title="How to Play Padel" 
            description="Basic rules and gameplay techniques"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">The Court</h3>
              <p className="text-muted-foreground">
                A padel court is 10m wide and 20m long, enclosed by walls of glass and mesh. The net divides the court in half, and the service boxes are similar to tennis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">The Equipment</h3>
              <p className="text-muted-foreground">
                Players use solid padel rackets (no strings) and low-pressure tennis balls. The rackets are smaller and more maneuverable than tennis rackets.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Scoring</h3>
              <p className="text-muted-foreground">
                Padel uses the same scoring system as tennis (15, 30, 40, game). Matches typically consist of best of three sets, with a tiebreak at 6-6.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">The Serve</h3>
              <p className="text-muted-foreground">
                The serve is underhand, and the ball must bounce once on your side before crossing the net. Players rotate serving every game, alternating sides.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Wall Play</h3>
              <p className="text-muted-foreground">
                One of the unique aspects of padel is the use of walls. After the ball crosses the net, it can bounce off any wall on your side before you hit it back.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Positioning</h3>
              <p className="text-muted-foreground">
                Players typically position one at the net and one at the baseline. Good communication with your partner is essential for effective court coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Tutorial */}
      <section className="py-16">
        <div className="container">
          <SectionHeader 
            title="Watch and Learn" 
            description="See padel in action with this beginner-friendly tutorial"
            centered
          />
          <div className="max-w-3xl mx-auto mt-8">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <div className="w-full h-0 pb-[56.25%] relative bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-muted-foreground">Video tutorial would be embedded here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-padel-gray">
        <div className="container">
          <SectionHeader 
            title="Benefits of Playing Padel" 
            description="Why padel is becoming one of the fastest growing sports worldwide"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-padel-blue/10 text-padel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Social Fun</h3>
              <p className="text-muted-foreground">
                Padel is inherently social, played in doubles with friends or new acquaintances. The smaller court encourages conversation and camaraderie.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-padel-green/10 text-padel-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quick Learning</h3>
              <p className="text-muted-foreground">
                The fundamentals of padel are easy to pick up, allowing beginners to enjoy fun rallies much sooner than in more technical sports like tennis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-padel-lightblue/30 text-padel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Great Exercise</h3>
              <p className="text-muted-foreground">
                Padel provides an excellent cardiovascular workout with less impact on joints compared to many other racquet sports.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-padel-lightgreen/30 text-padel-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.288-4.172.818l-1.257-1.257a4.5 4.5 0 01-6.364-6.364l1.257-1.257A13.19 13.19 0 003 12c0-1.472.288-2.882.818-4.172l1.257-1.257a4.5 4.5 0 016.364-6.364l1.257 1.257A13.19 13.19 0 0012 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Strategic Depth</h3>
              <p className="text-muted-foreground">
                While easy to learn, padel offers endless strategic depth as players advance, with nuanced court positioning and shot selection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Play?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find a court near you and experience the excitement of padel for yourself!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/courts">Find a Court</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/coaches">Book a Coach</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
