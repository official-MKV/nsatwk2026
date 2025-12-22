'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { fetchSanityData, queries } from '@/lib/sanity';

export default function Timeline() {
  const scrollRef = useRef(null);
  const itemRefs = useRef([]);
  const [activeEvent, setActiveEvent] = useState(0);
  const [timelineData, setTimelineData] = useState({ title: 'Event Timeline', events: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTimeline() {
      try {
        const events = await fetchSanityData(queries.timeline);
        const formattedEvents = events.map((event, index) => ({
          id: event._id,
          day: event.day,
          date: new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          title: event.title,
          time: event.time,
          venue: event.venue,
          location: event.location,
          description: event.description,
          highlights: event.highlights,
          image: event.image || event.imagePath || '/background.jpg',
          activities: event.activities
        }));
        setTimelineData(prev => ({ ...prev, events: formattedEvents }));
      } catch (error) {
        console.error('Error loading timeline:', error);
      } finally {
        setLoading(false);
      }
    }
    loadTimeline();
  }, []);

  const scrollToEvent = (index) => {
    setActiveEvent(index);
    itemRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  const scrollByDirection = (dir) => {
    if (!scrollRef.current) return;
    const amount = 340; // Card width + margin
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative py-16 bg-[#0a0a0a] text-white overflow-hidden">
      {/* CSS to hide scrollbar while keeping functionality */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold tracking-tight">{timelineData.title}</h2>
          <div className="flex gap-2">
            <button 
              onClick={() => scrollByDirection('left')} 
              className="p-2 rounded-full border border-gray-800 hover:bg-white/5 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scrollByDirection('right')} 
              className="p-2 rounded-full border border-gray-800 hover:bg-white/5 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Area */}
        {loading ? (
          <div className="text-center py-24">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-green-500 border-r-transparent"></div>
            <p className="mt-4 text-gray-400">Loading timeline...</p>
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="overflow-x-auto hide-scrollbar"
            style={{ scrollSnapType: 'x proximity' }}
          >
          <div className="relative flex pb-6 min-w-max">
            
            {/* STATIC HORIZONTAL LINE */}
            <div className="absolute bottom-[46px] left-0 w-full h-[1px] bg-gray-800" />

            {/* THE CONTENT COLUMNS */}
            {timelineData.events.map((event, index) => (
              <div 
                key={event.id}
                ref={(el) => (itemRefs.current[index] = el)}
                className="w-[300px] mr-10 flex flex-col items-center group last:mr-0"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Content Card */}
                <div 
                  className="w-full mb-10 text-center cursor-pointer"
                  onClick={() => scrollToEvent(index)}
                >
                  <h4 className={`text-lg font-semibold mb-1 transition-colors ${activeEvent === index ? 'text-green-500' : 'text-white'}`}>
                    {event.title}
                  </h4>
                  <p className="text-gray-500 text-xs mb-4">{event.time}</p>
                  
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-gray-800 bg-gray-900">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                  
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
                    {event.venue}
                  </p>
                </div>

                {/* THE CLICKABLE NODE */}
                <div className="relative z-20 h-6 flex items-center justify-center">
                  <button
                    onClick={() => scrollToEvent(index)}
                    className={`
                      rounded-full transition-all duration-300 border-[2px] border-[#0a0a0a]
                      ${activeEvent === index 
                        ? 'w-4 h-4 bg-green-500 scale-125' 
                        : 'w-3 h-3 bg-gray-700 hover:bg-gray-500'
                      }
                    `}
                  />
                </div>

                {/* THE DATE LABEL */}
                <button 
                  onClick={() => scrollToEvent(index)}
                  className={`mt-4 text-xs font-bold transition-colors uppercase tracking-tighter
                    ${activeEvent === index ? 'text-green-500' : 'text-gray-500 hover:text-white'}
                  `}
                >
                  {event.day}
                </button>
              </div>
            ))}
          </div>
          </div>
        )}
      </div>
    </section>
  );
}