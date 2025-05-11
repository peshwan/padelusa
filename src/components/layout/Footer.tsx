import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-white border-t py-8 mt-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">PadelUSA</h3>
            <p className="text-muted-foreground mb-4">
              The most comprehensive directory of padel courts and coaches across the United States.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/courts" className="text-muted-foreground hover:text-foreground transition-colors">Find Courts</Link></li>
              <li><Link to="/coaches" className="text-muted-foreground hover:text-foreground transition-colors">Find Coaches</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Padel</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">How to Play</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">Padel Rules</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">Equipment Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Facebook</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Instagram</a></li>
              
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} PadelUSA. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;