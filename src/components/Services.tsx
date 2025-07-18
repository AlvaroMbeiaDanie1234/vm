
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Building, Hammer, HardHat } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "CCTV",
      description: "Sistemas de vigilância de última geração com instalação e monitoramento profissional",
      gradient: "from-blue-600 to-blue-800",
      border: "border-blue-800 hover:border-gold-base"
    },
    {
      icon: Building,
      title: "Construção",
      description: "Projetos de construção civil com qualidade e prazo garantidos",
      gradient: "from-blue-500 to-blue-700",
      border: "border-blue-800 hover:border-gold-base"
    },
    {
      icon: Hammer,
      title: "Carpintaria",
      description: "Trabalhos em madeira personalizados com acabamento de excelência",
      gradient: "from-blue-400 to-blue-600",
      border: "border-blue-800 hover:border-gold-base"
    },
    {
      icon: HardHat,
      title: "Engenharia Civil",
      description: "Soluções completas em engenharia com inovação e sustentabilidade",
      gradient: "from-blue-300 to-blue-500",
      border: "border-blue-800 hover:border-gold-base"
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-blue-900 via-black to-blue-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos <span className="gold-gradient-text">Serviços</span>
          </h2>
          <div className="w-20 h-1 bg-gold-base mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Oferecemos soluções completas em engenharia e construção com tecnologia de ponta
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              <div className={`bg-blue-900/40 backdrop-blur-sm p-8 rounded-md border ${service.border} transition-all duration-300 h-full`}>
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${service.gradient} rounded-md flex items-center justify-center ring-2 ring-gold-light/30`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
                <p className="text-gray-300 text-center leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
