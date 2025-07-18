
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">VM</span>
              </div>
              <span className="text-white font-bold text-2xl">Projects</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transformando visões em realidade através de soluções inovadoras em engenharia e construção.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-600 rounded-md flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-600 rounded-md flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-600 rounded-md flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-600 rounded-md flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">CCTV e Vigilância</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Construção Civil</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Carpintaria</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Engenharia Civil</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Consultoria</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Links Úteis</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Projetos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Equipa</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Contacto</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Blog</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+244 929 671 662</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">vm.tech@vmtech.facilita.ao</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Luanda, Angola</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-blue-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 VM Projects. Todos os direitos reservados. | Feito com ❤️ em Angola
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
