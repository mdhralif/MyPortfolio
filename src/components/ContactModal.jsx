import { useEffect } from 'react';
import { FaTimes, FaEnvelope, FaLinkedin, FaPhone, FaLocationArrow } from 'react-icons/fa';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111828] md:bg-black/50 md:backdrop-blur-lg md:backdrop-saturate-150"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl bg-gray-900 rounded-none shadow-none md:shadow-xl transform transition-all duration-300 animate-in zoom-in-95 max-h-[90vh] overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none]">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gray-900 flex items-center justify-between p-6 md:p-8 pb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white"><span className="text-[#2DD4BF]">Say</span> Hello!</h2>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-none transition-colors duration-200 z-10"
            aria-label="Close modal"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Content: left = contact options, right = map */}
        <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-6 pb-6 overflow-hidden">
          <div className="space-y-4 bg-transparent overflow-hidden">
            {contactOptions.map((option, index) => (
              <button
                key={index}
                onClick={option.action}
                className="w-full p-4 md:p-6 bg-gray-800 hover:bg-gray-700 text-white rounded-none transition-colors duration-200 group"
              >
                <div className="flex items-center space-x-4 md:space-x-6">
                  <div className="flex-shrink-0">
                    <option.icon className="w-6 h-6 text-gray-300" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-lg md:text-xl text-white">{option.label}</div>
                    <div className="text-sm md:text-base text-gray-400">{option.value}</div>
                  </div>
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="p-4 md:p-6 bg-gray-800 h-fit">
            <div className="mb-3 text-lg md:text-xl font-medium text-white">
              <FaLocationArrow className="inline-block w-5 h-5 mr-2 text-gray-300" /><span> </span>
              Location
              </div>
            <div className="w-full h-48 md:h-[60vh] bg-gray-700 overflow-hidden">
              <iframe
                title="location-map"
                src="https://maps.google.com/maps?q=23.948102,90.37926&z=17&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
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
