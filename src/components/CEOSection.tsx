
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CEOSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const fullText = "Somos uma forte equipa comprometida com a excelência em cada projeto. Na VM Projects, acreditamos que a inovação e a qualidade são os pilares do nosso sucesso. Juntos, transformamos visões em realidade e construímos o futuro que Angola merece.";
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50); // Velocidade de digitação
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="py-20 bg-gradient-to-b from-black via-blue-900/20 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mensagem do <span className="gold-gradient-text">CEO</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold-dark rounded-lg blur-sm opacity-30"></div>
              <div className="relative bg-blue-900/40 backdrop-blur-sm rounded-lg p-2 border border-gold/30">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face"
                  alt="CEO da VM Projects"
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-gold-light to-gold-dark rounded-full opacity-20 blur-xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-blue-900/40 backdrop-blur-sm rounded-lg p-8 border border-blue-800 hover:border-gold/50 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Victor Silva</h3>
                <p className="text-gold font-medium">CEO & Fundador</p>
              </div>
              
              <div className="text-gray-300 text-lg leading-relaxed min-h-[200px]">
                <span className="relative">
                  {displayText}
                  {currentIndex < fullText.length && (
                    <span className="animate-pulse text-gold">|</span>
                  )}
                </span>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gold/20">
                <p className="text-gold italic text-right">
                  "Construindo o futuro de Angola"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;
