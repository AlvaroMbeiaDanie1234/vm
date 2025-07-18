
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: "50+", label: "Projetos Concluídos" },
    { icon: Users, number: "25+", label: "Clientes Satisfeitos" },
    { icon: Clock, number: "8+", label: "Anos de Experiência" },
    { icon: Target, number: "100%", label: "Qualidade Garantida" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-blue-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre a <span className="gold-gradient-text">VM Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gold-base mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              A VM Projects é uma empresa líder em soluções de engenharia e construção, 
              comprometida em transformar visões em realidade através de projetos inovadores 
              e sustentáveis.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Com uma equipa experiente e tecnologia de ponta, oferecemos serviços completos 
              desde o planeamento até a execução, garantindo qualidade excepcional em cada 
              projeto que realizamos.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gold-base rounded-full"></div>
                <span className="text-gray-300">Soluções personalizadas para cada cliente</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gold-base rounded-full"></div>
                <span className="text-gray-300">Tecnologia avançada e práticas sustentáveis</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gold-base rounded-full"></div>
                <span className="text-gray-300">Compromisso com prazos e qualidade</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-blue-900/40 backdrop-blur-sm rounded-md p-8 border border-blue-800 hover:border-gold-base transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-gold-light to-gold-dark rounded-md flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-background" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
