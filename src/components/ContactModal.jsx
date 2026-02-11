import { useEffect } from 'react';
import { FaTimes, FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ContactModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const contactOptions = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'hasiburrahman999.alif@gmail.com',
      action: () => window.open('mailto:hasiburrahman999.alif@gmail.com', '_blank')
    },
    // {
    //   icon: FaWhatsapp,
    //   label: 'WhatsApp',
    //   value: '(+880) 132 457 5819',
    //   action: () => window.open('https://wa.me/8801324575819', '_blank')
    // },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'MD H R ALIF',
      action: () => window.open('https://www.linkedin.com/in/md-h-r-alif-7358801a6/', '_blank')
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '(+880) 132 457 5819',
      action: () => window.open('tel:+8801324575819', '_blank')
    }
  ];

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg backdrop-saturate-150"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md bg-gray-900 rounded-lg shadow-xl transform transition-all duration-300 animate-in zoom-in-95">
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-3">
          <h2 className="text-2xl font-bold text-white"><span className="text-cyan-400">Let&apos;s</span> Talk</h2>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors duration-200 z-10"
            aria-label="Close modal"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 space-y-3">
          {contactOptions.map((option, index) => (
            <button
              key={index}
              onClick={option.action}
              className="w-full p-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 group"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <option.icon className="w-5 h-5 text-gray-300" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-medium text-white">{option.label}</div>
                  <div className="text-sm text-gray-400">{option.value}</div>
                </div>
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

ContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ContactModal;
