
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Victor Silva",
      role: "CEO & Engenheiro Civil",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Especialista em projetos de grande escala com 15 anos de experiência",
      linkedin: "#",
      email: "victor@vmprojects.com",
      phone: "+244 900 000 001"
    },
    {
      name: "Maria Santos",
      role: "Arquiteta Sênior",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      description: "Especializada em design sustentável e arquitetura moderna",
      linkedin: "#",
      email: "maria@vmprojects.com",
      phone: "+244 900 000 002"
    },
    {
      name: "Carlos Mendes",
      role: "Especialista em CCTV",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Expert em sistemas de segurança e monitoramento eletrônico",
      linkedin: "#",
      email: "carlos@vmprojects.com",
      phone: "+244 900 000 003"
    },
    {
      name: "Ana Costa",
      role: "Gestora de Projetos",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Coordenação e gestão de projetos com foco na qualidade",
      linkedin: "#",
      email: "ana@vmprojects.com",
      phone: "+244 900 000 004"
    }
  ];

  return (
    <section id="team" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossa <span className="text-blue-400">Equipa</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Profissionais experientes e dedicados a entregar excelência em cada projeto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-blue-900/40 backdrop-blur-sm rounded-md p-6 border border-blue-800 hover:border-blue-500 transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-700">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                </div>

                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    className="p-2 rounded-md bg-blue-700 hover:bg-blue-600 text-white transition-colors duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 rounded-md bg-blue-700 hover:bg-blue-600 text-white transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="p-2 rounded-md bg-blue-700 hover:bg-blue-600 text-white transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
