
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Courts from "./pages/Courts";
import CourtDetail from "./pages/CourtDetail";
import CourtsNearMe from "./pages/CourtsNearMe";
import Coaches from "./pages/Coaches";
import CoachDetail from "./pages/CoachDetail";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courts" element={<Courts />} />
          <Route path="/courts/:id" element={<CourtDetail />} />
          <Route path="/courts/near-me" element={<CourtsNearMe />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/coaches/:id" element={<CoachDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
