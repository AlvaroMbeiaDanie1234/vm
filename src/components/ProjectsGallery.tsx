import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

// Import images from assets/images
import image1 from '../../assets/images/1.jpeg';
import image2 from '../../assets/images/2.jpeg';
import image3 from '../../assets/images/3.jpeg';
import image4 from '../../assets/images/4.jpeg';
import image5 from '../../assets/images/5.jpeg';
import image6 from '../../assets/images/6.jpeg';

// Array de projetos com imagens importadas
const projects = [
  {
    id: 1,
    title: 'Centro Comercial Moderno',
    category: 'Construção',
    image: image1,
    description: 'Complexo comercial com design arquitetônico inovador',
  },
  {
    id: 2,
    title: 'Sistema CCTV Residencial',
    category: 'CCTV',
    image: image2,
    description: 'Instalação completa de monitoramento residencial',
  },
  {
    id: 3,
    title: 'Mobiliário Corporativo',
    category: 'Carpintaria',
    image: image3,
    description: 'Móveis sob medida para escritórios modernos',
  },
  {
    id: 4,
    title: 'Ponte Rodoviária',
    category: 'Engenharia Civil',
    image: image4,
    description: 'Infraestrutura rodoviária com tecnologia avançada',
  },
  {
    id: 5,
    title: 'Edifício Residencial',
    category: 'Construção',
    image: image5,
    description: 'Complexo habitacional sustentável',
  },
  {
    id: 6,
    title: 'Centro Cultural',
    category: 'Engenharia Civil',
    image: image6,
    description: 'Espaço cultural com arquitetura única',
  },
];

const ProjectsGallery: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(projects.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(projects.length / 3)) % Math.ceil(projects.length / 3));
  };

  const visibleProjects = projects.slice(currentSlide * 3, (currentSlide + 1) * 3);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Nossos <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projetos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça alguns dos nossos trabalhos mais destacados
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-2xl bg-gray-800 shadow-2xl"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setSelectedProject(project.id)}
                      className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                    >
                      <Eye className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="p-6">
                    <span className="text-sm font-medium text-blue-400 mb-2 block">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;