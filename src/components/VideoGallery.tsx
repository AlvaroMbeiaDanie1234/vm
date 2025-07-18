import React from 'react';
import { motion } from 'framer-motion';
import { Play, Film } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Import videos (use 'videos' folder; rename 'vídeos' to 'videos' if possible)
import video1 from '../../assets/vídeos/1.mp4';
import video2 from '../../assets/vídeos/2.mp4';
import video3 from '../../assets/vídeos/3.mp4';
import video4 from '../../assets/vídeos/4.mp4';

const videos = [
  {
    id: 1,
    title: 'Projeto de Construção Residencial',
    video: video1,
    description: 'Acompanhe o processo de construção de uma residência de luxo desde o início até a entrega final.',
  },
  {
    id: 2,
    title: 'Instalação de Sistema CCTV',
    video: video2,
    description: 'Demonstração de instalação e configuração de um sistema completo de vigilância CCTV.',
  },
  {
    id: 3,
    title: 'Projeto de Carpintaria Personalizada',
    video: video3,
    description: 'Processo de criação de móveis personalizados para um projeto comercial de alto padrão.',
  },
  {
    id: 4,
    title: 'Construção de Ponte Rodoviária',
    video: video4,
    description: 'Construção de uma ponte com tecnologia avançada para infraestrutura rodoviária.',
  },
];

const VideoGallery: React.FC = () => {
  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-blue-900 via-black to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Nossos </span>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Vídeos</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Assista a demonstrações dos nossos projetos e serviços em ação
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="group relative cursor-pointer overflow-hidden rounded-lg border border-blue-800 hover:border-yellow-400 transition-all duration-300">
                    <div className="aspect-video w-full">
                      <video
                        className="w-full h-full object-cover"
                        muted
                        preload="metadata"
                        poster={`${video.video}#t=0.1`} // Show first frame as poster
                      >
                        <source src={video.video} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity group-hover:bg-black/30">
                        <div className="rounded-full bg-blue-600 group-hover:bg-yellow-400 p-4 transition-all duration-300 transform group-hover:scale-110">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-blue-900/70 backdrop-blur-sm">
                      <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                      <div className="flex items-center text-gray-300">
                        <Film className="w-4 h-4 mr-2" />
                        <span>Clique para assistir</span>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-4xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{video.title}</DialogTitle>
                    <DialogDescription className="text-gray-300 pt-2">
                      {video.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="aspect-video w-full">
                    <video
                      controls
                      preload="metadata"
                      className="w-full h-full object-contain"
                    >
                      <source src={video.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;