
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const faqData = {
  aboutPadel: [
    {
      question: "What is padel?",
      answer: "Padel is a racquet sport typically played in doubles on an enclosed court about a third the size of a tennis court. It combines elements of tennis, squash, and badminton. The walls are used as part of the game, similar to squash, and the scoring is the same as in tennis."
    },
    {
      question: "Why is padel so popular?",
      answer: "Padel is one of the fastest growing sports worldwide because it's easy to learn, fun to play regardless of age or skill, provides good exercise, and has a strong social component. The smaller court and use of walls make rallies longer and more engaging than traditional tennis."
    },
    {
      question: "Where did padel originate?",
      answer: "Padel was invented in 1969 in Mexico by Enrique Corcuera, who created the first court at his holiday home in Marbella. The sport quickly spread to Argentina and Spain, where it gained significant popularity, and is now played worldwide."
    }
  ],
  courtInformation: [
    {
      question: "What are the official padel court dimensions?",
      answer: "A standard padel court is 10 meters (32.8 feet) wide by 20 meters (65.6 feet) long, divided by a net. The walls are part of the playing area, with the back wall being 4 meters (13.1 feet) high and the side walls stepping down from 3 meters (9.8 feet) to 2 meters (6.6 feet)."
    },
    {
      question: "What surface are padel courts made of?",
      answer: "Padel courts typically have an artificial turf surface with sand infill. This provides good grip and allows players to slide into shots. The walls are usually made of tempered glass or concrete, allowing players to play the ball off them."
    },
    {
      question: "How many padel courts are there in the USA?",
      answer: "The number of padel courts in the USA is rapidly growing. As of 2025, there are over 300 courts across the country, with major concentrations in Florida, California, and Texas. This number is expected to double in the next few years as the sport gains popularity."
    }
  ],
  playingPadel: [
    {
      question: "What are the basic rules of padel?",
      answer: "Padel is played in doubles with a scoring system identical to tennis. The serve must be underhanded and bounce once before hitting. Players can hit the ball after it bounces off walls, but only after it has bounced on the ground first. The ball can hit your side's walls but cannot hit the opposing team's walls directly from your shot."
    },
    {
      question: "How is padel different from tennis?",
      answer: "Padel differs from tennis in several ways: it's played on a smaller enclosed court with walls, uses solid paddles instead of stringed racquets, has underhand serves, allows wall play, is almost exclusively played as doubles, and has different tactical approaches due to the court design."
    },
    {
      question: "Is padel hard to learn?",
      answer: "Padel is considered easier to learn than tennis and many other racquet sports. The enclosed court reduces out-of-bounds errors, the solid paddle makes ball contact more forgiving, and the underhand serve is accessible to beginners. Most new players can enjoy rallies within their first session."
    }
  ],
  equipmentGear: [
    {
      question: "What equipment do I need to play padel?",
      answer: "To play padel, you need a padel racket (which is solid with no strings), padel-specific balls (similar to tennis balls but with less pressure), and appropriate athletic footwear with good lateral support. Court rental is typically required unless you have access to a private court."
    },
    {
      question: "How do I choose a padel racket?",
      answer: "When choosing a padel racket, consider your skill level (beginner, intermediate, advanced), playing style (power vs. control), weight preference (lighter for maneuverability, heavier for power), balance (head-heavy for power, handle-heavy for control), and shape (round for control, diamond for power)."
    },
    {
      question: "What should I wear to play padel?",
      answer: "Comfortable athletic clothes similar to what you'd wear for tennis are appropriate for padel. Tennis shoes or court-specific shoes with good lateral support are recommended. Many players wear specialized padel shoes designed for the sport's unique movements and court surface."
    }
  ],
  gettingStarted: [
    {
      question: "How do I find padel courts near me?",
      answer: "You can find padel courts near you by using our 'Courts Near Me' feature on this website, joining padel-focused social media groups in your area, checking with local tennis or sports clubs, or using apps dedicated to racquet sports court bookings."
    },
    {
      question: "Do I need lessons to start playing padel?",
      answer: "While not strictly necessary, beginner lessons can significantly accelerate your learning and enjoyment of padel. Many padel facilities offer introductory classes or clinics for new players. Even one or two lessons can help you understand the basic techniques and rules."
    },
    {
      question: "How much does it cost to play padel?",
      answer: "The cost to play padel typically includes court rental ($20-50 per hour depending on location and time), equipment (a decent beginner racket costs $50-100), and potentially coaching fees. Many facilities offer introductory packages combining court time and lessons for new players."
    }
  ],
  aboutDirectory: [
    {
      question: "How does this directory work?",
      answer: "Our PadelUSA directory compiles comprehensive information about padel courts across the United States. You can search for courts by location, filter by amenities or court type, read reviews from other players, find contact information, and get directions directly to the facility."
    },
    {
      question: "How can I add my padel club to the directory?",
      answer: "Facility owners can add their padel club to our directory by creating an account and submitting their venue information through our 'Add a Court' form. Required information includes location details, contact information, court specifications, available amenities, and photos of the facility."
    },
    {
      question: "How accurate is the information in this directory?",
      answer: "We strive to maintain accurate and up-to-date information through relationships with padel facilities and community updates. However, details like operating hours and pricing may change. We recommend confirming critical information directly with the facility before your visit."
    }
  ]
};

const FaqSection = () => {
  return (
    <section className="py-12 bg-stone-50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Padel FAQ</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about padel and finding courts near you
          </p>
        </div>
        
        <Tabs defaultValue="aboutPadel" className="max-w-4xl mx-auto">
          <TabsList className="w-full flex flex-wrap justify-between bg-transparent mb-6">
            <TabsTrigger 
              value="aboutPadel" 
              className="data-[state=active]:bg-padel-blue data-[state=active]:text-white px-4 py-2 rounded-md"
            >
              About Padel
            </TabsTrigger>
            <TabsTrigger 
              value="courtInformation"
              className="data-[state=active]:bg-padel-blue data-[state=active]:text-white px-4 py-2 rounded-md" 
            >
              Court Information
            </TabsTrigger>
            <TabsTrigger 
              value="playingPadel"
              className="data-[state=active]:bg-padel-blue data-[state=active]:text-white px-4 py-2 rounded-md" 
            >
              Playing Padel
            </TabsTrigger>
            <TabsTrigger 
              value="equipmentGear"
              className="data-[state=active]:bg-padel-blue data-[state=active]:text-white px-4 py-2 rounded-md" 
            >
              Equipment & Gear
            </TabsTrigger>
            <TabsTrigger 
              value="gettingStarted"
              className="data-[state=active]:bg-padel-blue data-[state=active]:text-white px-4 py-2 rounded-md" 
            >
              Getting Started
            </TabsTrigger>
            <TabsTrigger 
              value="aboutDirectory"
              className="data-[state=active]:bg-padel-blue data-[state=active]:text-white px-4 py-2 rounded-md" 
            >
              About The Directory
            </TabsTrigger>
          </TabsList>
          
          {Object.entries(faqData).map(([category, questions]) => (
            <TabsContent key={category} value={category} className="border rounded-lg p-6 bg-white">
              <Accordion type="single" collapsible className="w-full">
                {questions.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b">
                    <AccordionTrigger className="text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FaqSection;
