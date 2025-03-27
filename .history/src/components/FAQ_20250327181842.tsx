
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
  {
    id: '1',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, Apple Pay, and Google Pay. You can also pay with cash on delivery for eligible orders.'
  },
  {
    id: '2',
    question: 'How long does delivery take?',
    answer: 'Standard delivery takes 1-2 business days within city limits. For rural areas, delivery may take 2-3 business days. Express delivery options are available at checkout.'
  },
  {
    id: '3',
    question: 'Can I cancel my order after it\'s placed?',
    answer: 'Yes, you can cancel your order within 1 hour of placing it. After that, if the order is already in processing, you may contact customer support to request cancellation.'
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id='main-padding' className="section-container">
      <div className="section-title">
        <h2>Frequently Asked Questions</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqItems.map(item => (
          <div 
            key={item.id} 
            className="border border-xstore-light-gray rounded-lg animate-scale-in overflow-hidden"
          >
            <button
              className={`w-full text-left p-4 flex justify-between items-center transition-colors duration-300 ${
                openId === item.id ? 'faq-answer text-xstore-green' : 'hover:bg-xstore-gray'
              }`}
              onClick={() => toggleItem(item.id)}
            >
              <span className="font-medium">{item.question}</span>
              {openId === item.id ? <Minus size={18} /> : <Plus size={18} />}
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 `}>
              <div className="p-4 text-xstore-dark-gray bg-white border-t border-xstore-light-gray">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
