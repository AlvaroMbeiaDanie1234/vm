import React from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, Building, Hammer, HardHat, 
  Zap, PaintBucket, Wrench, Snowflake,
  Satellite, Ruler, Home, Palette,
  Move3D, Package
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Construção Civil",
      description: "Projetos de construção civil com qualidade e prazo garantidos",
      gradient: "from-blue-600 to-blue-800",
      border: "border-blue-800 hover:border-gold"
    },
    {
      icon: Ruler,
      title: "Arquitetura",
      description: "Projetos arquitetônicos personalizados e inovadores",
      gradient: "from-blue-500 to-blue-700",
      border: "border-blue-800 hover:border-gold"
    },
    {
      icon: Home,
      title: "Remodelação",
      description: "Transformação e modernização de espaços existentes",
      gradient: "from-blue-400 to-blue-600",
      border: "border-blue-800 hover:border-gold"
    },
    {
      icon: Zap,
      title: "Electricidade",
      description: "Instalações elétricas seguras e eficientes",
      gradient: "from-yellow-500 to-yellow-700",
      border: "border-blue-800 hover:border-gold"
    },
    {
      icon: PaintBucket,
      title: "Pintura e Estucagem",
      description: "Acabamentos de qualidade com técnicas modernas",
      gradient: "from-green-500 to-green-700",
      border: "border-blue-800 hover:border-gold"
    },
    {
      icon: Wrench,
      title: "Canalização",
      description: "Sistemas hidráulicos e sanitários profissionais",
      gradient: "from-cyan-500 to-cyan-700",
      border: "border-blue-800 hover:border-gold"
    },
    {
      icon: Snowflake,
      title: "Refrigeração e Climatização",
      description: "Sistemas HVAC para conforto térmico ideal",
      gradient: "from-blue-300 to-blue-500",
      border: "border-blue-800 hover:border-gold"
    },
    {
      icon: Satellite,
      title: "Antena Parabólica",
      description: "Instalação e configuração de sistemas de telecomunicações",
      gradient: "from-purple-500 to-purple-700",
      border: "border-blue-800 hover:border-gold"
    },
    {
      icon: Camera,
      title: "CCTV",
      description: "Sistemas de vigilância de última geração com monitoramento",
      gradient: "from-red-500 to-red-700",
      border: "border-blue-800 hover:border-gold"
    },
    {
      icon: Move3D,
      title: "Drywall",
      description: "Divisórias e forros em gesso cartonado",
      gradient: "from-orange-500 to-orange-700",
      border: "border-blue-800 hover:border-gold"
    },
    {
      icon: Package,
      title: "Chão Flutuante",
      description: "Aplicação profissional de pavimentos flutuantes",
      gradient: "from-amber-600 to-amber-800",
      border: "border-blue-800 hover:border-gold"
    },
    {
      icon: Palette,
      title: "Design de Interiores",
      description: "Criação de ambientes únicos e funcionais",
      gradient: "from-pink-500 to-pink-700",
      border: "border-blue-800 hover:border-gold"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
