'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';
import { fetchSanityData, queries } from '@/lib/sanity';

export default function Hosts() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [hostsData, setHostsData] = useState({ title: 'The Hosts & Keynotes', description: 'Meet the seasoned professionals guiding the next generation of space entrepreneurs as it grow startups in Africa.', hosts: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHosts() {
      try {
        const hosts = await fetchSanityData(queries.hosts);
        setHostsData(prev => ({ ...prev, hosts: hosts.map(host => ({
          id: host._id,
          name: host.name,
          role: host.role,
          organization: host.organization,
          image: host.image || host.imagePath || '/speaker-1.png'
        })) }));
      } catch (error) {
        console.error('Error loading hosts:', error);
      } finally {
        setLoading(false);
      }
    }
    loadHosts();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="hosts"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {hostsData.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {hostsData.description}
          </p>
        </motion.div>

        {/* Hosts Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
            <p className="mt-4 text-gray-400">Loading hosts...</p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {hostsData.hosts.map((host, index) => (
            <motion.div
              key={host.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-dark-100 rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-transparent to-transparent z-10" />
                  
                  {/* Placeholder gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-teal-500/30" />
                  <img
                    src={host.image}
                    alt={host.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />

                 
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                    {host.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {host.organization}
                  </p>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
          </motion.div>
        )}

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="flex justify-center items-center gap-4 mt-10"
        >
          <button className="p-2 rounded-full border border-white/20 hover:border-primary hover:bg-primary/10 transition-all duration-300">
            <Minus className="w-5 h-5" />
          </button>
          <span className="text-gray-400 text-sm font-medium">1/1</span>
          <button className="p-2 rounded-full border border-white/20 hover:border-primary hover:bg-primary/10 transition-all duration-300">
            <Plus className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}