
import React, { useState } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const whatsappNumber = "+244929671662"; // Substitua pelo número de WhatsApp da empresa
  
  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    // Cria o link do WhatsApp com a mensagem pré-preenchida
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank');
    
    // Fecha o diálogo e limpa a mensagem
    setIsOpen(false);
    setMessage('');
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-lg whatsapp-button focus:outline-none hover:bg-[#128C7E] transition-colors"
        aria-label="Contato via WhatsApp"
      >
        <MessageSquare className="w-8 h-8" />
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center text-xl font-bold">
              <MessageSquare className="w-5 h-5 mr-2 text-[#25D366]" />
              Enviar mensagem via WhatsApp
            </DialogTitle>
          </DialogHeader>
          
          <div className="mt-4">
            <Textarea
              placeholder="Escreva sua mensagem aqui..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[120px]"
            />
          </div>
          
          <DialogFooter className="flex justify-end gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="border-gray-600 text-gray-200"
            >
              <X className="w-4 h-4 mr-2" />
              Cancelar
            </Button>
            <Button
              onClick={handleSendMessage}
              className="bg-[#25D366] hover:bg-[#128C7E]"
            >
              <Send className="w-4 h-4 mr-2" />
              Enviar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WhatsAppButton;
