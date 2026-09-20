/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { SignatureCreations } from './components/SignatureCreations';
import { GrillSection } from './components/GrillSection';
import { ChefRecommendations } from './components/ChefRecommendations';
import { FullMenuExperience } from './components/FullMenuExperience';
import { OurStory } from './components/OurStory';
import { Gallery } from './components/Gallery';
import { SocialSection } from './components/SocialSection';
import { VisitUs } from './components/VisitUs';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);
  const [menuSearchQuery, setMenuSearchQuery] = useState('');

  const handleOpenReservation = () => {
    setIsReservationOpen(true);
  };

  const handleCloseReservation = () => {
    setIsReservationOpen(false);
  };

  const handleToggleDishSelection = (dishName: string) => {
    setSelectedDishes((prev) =>
      prev.includes(dishName) ? prev.filter((d) => d !== dishName) : [...prev, dishName]
    );
  };

  const handleNavigateToMenu = (searchQuery = '') => {
    setMenuSearchQuery(searchQuery);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscoverStory = () => {
    const storyEl = document.getElementById('story');
    if (storyEl) {
      storyEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0b] text-[#f7f5f0] flex flex-col selection:bg-champagne selection:text-[#0c0c0b] font-sans antialiased overflow-x-hidden">
      {/* Primary Navigation */}
      <Navbar
        onOpenReservation={handleOpenReservation}
        onNavigateToMenu={() => handleNavigateToMenu()}
      />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        {/* 1. Cinematic Hero */}
        <Hero
          onExploreMenu={() => handleNavigateToMenu()}
          onOpenReservation={handleOpenReservation}
        />

        {/* 2. Brand Introduction */}
        <BrandIntro onDiscoverStory={handleDiscoverStory} />

        {/* 3. Signature Creations */}
        <SignatureCreations
          onSelectMenuItem={(title) => handleNavigateToMenu(title)}
          onExploreFullMenu={() => handleNavigateToMenu()}
        />

        {/* 4. The Art of the Grill & Steaks Showcase */}
        <GrillSection onExploreSteaks={() => handleNavigateToMenu('steak')} />

        {/* 5. Chef Recommendations Carousel */}
        <ChefRecommendations
          onSelectDish={(dishName) => handleNavigateToMenu(dishName)}
          onExploreMenu={() => handleNavigateToMenu()}
        />

        {/* 6. Full Interactive Menu Experience */}
        <FullMenuExperience
          initialSearchQuery={menuSearchQuery}
          selectedDishesForReservation={selectedDishes}
          onToggleDishSelection={handleToggleDishSelection}
          onOpenReservation={handleOpenReservation}
        />

        {/* 7. Our Story */}
        <OurStory />

        {/* 8. Gallery / Atmosphere */}
        <Gallery />

        {/* 9. Social Media Connection */}
        <SocialSection />

        {/* 10. Visit Us & Google Maps */}
        <VisitUs onOpenReservation={handleOpenReservation} />
      </main>

      {/* Footer */}
      <Footer
        onOpenReservation={handleOpenReservation}
        onNavigateToMenu={() => handleNavigateToMenu()}
      />

      {/* Interactive Reservation Request Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={handleCloseReservation}
        preSelectedDishes={selectedDishes}
      />

      {/* Floating WhatsApp Quick Contact Button & Recurring Inquiry Notification */}
      <WhatsAppFloatingButton />
    </div>
  );
}
