import React, { useState, useEffect } from 'react';
import { Camera, Eye, X, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'FOOD' | 'THE GRILL' | 'THE AMBIENCE' | 'BEVERAGES';
  image: string;
  fallbackImage?: string;
  description: string;
}

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [activeImageSrcs, setActiveImageSrcs] = useState<Record<string, string>>({});

  // The 8 original DaVinci Grill images categorized according to content
  const galleryItems: GalleryItem[] = [
    {
      id: 'gal-davinci-ambience',
      title: 'DaVinci Grand Dining Hall',
      category: 'THE AMBIENCE',
      image: 'https://i.ibb.co/7mCWyBL/Davicnci.webp',
      description: 'Warm ambient lighting, elegant dark wood finishes, and intimate table settings crafted for an elevated dining experience.',
    },
    {
      id: 'gal-entrance',
      title: 'Welcoming Grand Entrance',
      category: 'THE AMBIENCE',
      image: 'https://i.ibb.co/6cTbP2Ww/enter.webp',
      description: 'The distinctive entryway welcoming guests into the flame-crafted atmosphere of DaVinci Grill.',
    },
    {
      id: 'gal-turkish-grill',
      title: 'Artisanal Turkish Grill',
      category: 'THE GRILL',
      image: 'https://i.ibb.co/mCmfFx2V/Turkish.webp',
      description: 'Authentic Turkish-spiced cuts prepared over live flame, infused with aromatic charcoal smoke.',
    },
    {
      id: 'gal-flame-grill',
      title: 'Flame-Seared Special Cut',
      category: 'THE GRILL',
      image: 'https://i.ibb.co/0jJs5tPJ/check.webp',
      description: 'Tender gourmet cuts seared to perfection with signature house seasonings and distinct grill marks.',
    },
    {
      id: 'gal-stone-pizza',
      title: 'Stone-Baked Gourmet Pizza',
      category: 'FOOD',
      image: 'https://i.ibb.co/6cVhTVGL/ppixza.webp',
      description: 'Hand-crafted artisan crust layered with melted mozzarella, savory toppings, and authentic Italian herbs.',
    },
    {
      id: 'gal-entree-platter',
      title: 'Signature Entrée Presentation',
      category: 'FOOD',
      image: 'https://i.ibb.co/hF99Qgrq/download.jpg',
      fallbackImage: '/signature-entree.jpg',
      description: 'An artfully presented gourmet entrée highlighting tender cuts, vibrant garnishes, and chef sauces.',
    },
    {
      id: 'gal-chef-special',
      title: 'Gourmet Culinary Creation',
      category: 'FOOD',
      image: 'https://i.ibb.co/0RG5MqYn/oppp.webp',
      description: 'Freshly prepared DaVinci specialty celebrating vibrant flavors, rich textures, and continental craft.',
    },
    {
      id: 'gal-traditional-tea',
      title: 'Traditional Artisanal Tea',
      category: 'BEVERAGES',
      image: 'https://i.ibb.co/Nnt25RxK/Tea.webp',
      description: 'Slow-steeped fragrant tea served in traditional glassware, providing an authentic and soothing conclusion.',
    },
  ];

  const filteredItems =
    activeCategory === 'ALL'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const categories = ['ALL', 'FOOD', 'THE GRILL', 'THE AMBIENCE', 'BEVERAGES'];

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedPhotoIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) =>
          prev !== null ? (prev > 0 ? prev - 1 : filteredItems.length - 1) : null
        );
      } else if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) =>
          prev !== null ? (prev < filteredItems.length - 1 ? prev + 1 : 0) : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, filteredItems.length]);

  const handleImageError = (item: GalleryItem) => {
    const currentSrc = activeImageSrcs[item.id] || item.image;
    if (item.fallbackImage && currentSrc !== item.fallbackImage) {
      console.info(`[Gallery] Falling back to local asset for ${item.title}`);
      setActiveImageSrcs((prev) => ({ ...prev, [item.id]: item.fallbackImage! }));
      return;
    }
    console.warn(`[Gallery] Failed to load image: ${currentSrc}`);
    setFailedImages((prev) => ({ ...prev, [item.id]: true }));
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) =>
      prev !== null ? (prev > 0 ? prev - 1 : filteredItems.length - 1) : 0
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) =>
      prev !== null ? (prev < filteredItems.length - 1 ? prev + 1 : 0) : 0
    );
  };

  return (
    <section
      id="gallery"
      className="py-24 sm:py-32 bg-[#121210] relative overflow-hidden border-b border-[#2a2924]"
      aria-label="Photo Gallery and Atmosphere"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-champagne mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] font-medium">
                Visual Journey
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl tracking-[0.12em] font-medium text-ivory">
              THE GALLERY
            </h2>
            <p className="font-serif italic text-lg text-champagne mt-2">
              Atmosphere &amp; Culinary Craft
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedPhotoIndex(null);
                }}
                type="button"
                id={`gallery-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-sans rounded-sm transition-colors cursor-pointer shrink-0 ${
                  activeCategory === cat
                    ? 'bg-champagne text-[#0c0c0b] font-semibold'
                    : 'bg-[#181815] text-ivory-muted hover:text-ivory border border-[#2a2924]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => {
            const currentSrc = activeImageSrcs[item.id] || item.image;
            const hasError = failedImages[item.id];
            return (
              <div
                key={item.id}
                id={`gallery-photo-${item.id}`}
                onClick={() => setSelectedPhotoIndex(index)}
                className="group relative bg-[#181815] border border-[#2a2924] hover:border-champagne/60 rounded-sm overflow-hidden aspect-[4/3] cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {hasError ? (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-[#181815] text-center border border-red-500/30">
                    <AlertCircle className="w-6 h-6 text-red-400 mb-2" />
                    <span className="text-xs text-red-200 font-sans">Unable to load image</span>
                    <span className="text-[10px] text-ivory-muted font-mono mt-1 break-all line-clamp-1">{currentSrc}</span>
                  </div>
                ) : (
                  <img
                    src={currentSrc}
                    alt={`${item.title} - DaVinci Grill`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={() => handleImageError(item)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0b] via-[#0c0c0b]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 pointer-events-none" />

                {/* Hover Details Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <span className="text-[10px] uppercase tracking-wider text-champagne font-sans font-medium">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg text-ivory mt-0.5 font-medium leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ivory-muted font-light mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Quick View Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0c0c0b]/80 border border-[#2a2924] flex items-center justify-center text-ivory opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-champagne" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {selectedPhotoIndex !== null && filteredItems[selectedPhotoIndex] && (
          <div
            id="gallery-lightbox"
            onClick={() => setSelectedPhotoIndex(null)}
            className="fixed inset-0 z-50 bg-[#0c0c0b]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              id="close-lightbox-btn"
              type="button"
              className="absolute top-6 right-6 p-2 text-ivory hover:text-champagne transition-colors z-20 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Prev Navigation Button */}
            {filteredItems.length > 1 && (
              <button
                onClick={handlePrev}
                id="lightbox-prev-btn"
                type="button"
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 bg-[#181815]/80 hover:bg-[#181815] border border-[#2a2924] hover:border-champagne text-ivory rounded-full transition-all z-20 cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6 text-champagne" />
              </button>
            )}

            {/* Next Navigation Button */}
            {filteredItems.length > 1 && (
              <button
                onClick={handleNext}
                id="lightbox-next-btn"
                type="button"
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 bg-[#181815]/80 hover:bg-[#181815] border border-[#2a2924] hover:border-champagne text-ivory rounded-full transition-all z-20 cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6 text-champagne" />
              </button>
            )}

            {/* Modal Image Display */}
            {(() => {
              const selectedItem = filteredItems[selectedPhotoIndex];
              const currentSrc = activeImageSrcs[selectedItem.id] || selectedItem.image;
              const hasError = failedImages[selectedItem.id];

              return (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-4xl w-full flex flex-col items-center"
                >
                  <div className="relative max-h-[75vh] overflow-hidden rounded-sm border border-[#2a2924] bg-[#181815]">
                    {hasError ? (
                      <div className="p-12 text-center text-red-200">
                        <AlertCircle className="w-10 h-10 text-red-400 mx-auto mb-3" />
                        <p>Unable to load original image</p>
                        <p className="text-xs font-mono text-ivory-muted mt-2">
                          {currentSrc}
                        </p>
                      </div>
                    ) : (
                      <img
                        src={currentSrc}
                        alt={`${selectedItem.title} - DaVinci Grill`}
                        referrerPolicy="no-referrer"
                        onError={() => handleImageError(selectedItem)}
                        className="max-h-[75vh] w-auto object-contain"
                      />
                    )}
                  </div>

                  <div className="mt-4 text-center max-w-xl">
                    <span className="text-xs uppercase tracking-widest text-champagne font-sans font-medium">
                      {selectedItem.category}
                    </span>
                    <h3 className="font-serif text-2xl text-ivory mt-1">
                      {selectedItem.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ivory-muted mt-1 font-light">
                      {selectedItem.description}
                    </p>
                    <p className="text-[11px] text-champagne/70 mt-2 font-mono">
                      {selectedPhotoIndex + 1} / {filteredItems.length}
                    </p>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

      </div>
    </section>
  );
};
