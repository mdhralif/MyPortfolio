import { useEffect, useState } from 'react';
import { FaSync, FaEnvelope } from 'react-icons/fa';
import { FaMap } from 'react-icons/fa6';
import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';
import profileImage from '../assets/images/profile.jpg';

const ContactModal = ({ isOpen, onClose }) => {
  const [isMapLoading, setIsMapLoading] = useState(true);
  const [mailForm, setMailForm] = useState({ email: '', message: '' });
  const [mailStatus, setMailStatus] = useState({ type: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  useEffect(() => {
    let loadingTimer;
    let scrollY;
    const prevOverflow = document.body.style.overflow;
    const prevPosition = document.body.style.position;
    const prevTop = document.body.style.top;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      // Lock scroll by fixing body position and preserving scroll offset
      scrollY = window.scrollY || document.documentElement.scrollTop;
      document.body.style.top = `-${scrollY}px`;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      setIsMapLoading(true);
      document.addEventListener('keydown', handleEscape);

      loadingTimer = window.setTimeout(() => {
        setIsMapLoading(false);
      }, 1200);
    } else {
      // restore in case the modal was closed elsewhere
      document.body.style.position = prevPosition || '';
      document.body.style.top = prevTop || '';
      document.body.style.overflow = prevOverflow || '';
    }

    return () => {
      window.clearTimeout(loadingTimer);
      document.removeEventListener('keydown', handleEscape);

      // Restore body scroll and position
      document.body.style.position = prevPosition || '';
      document.body.style.top = prevTop || '';
      document.body.style.overflow = prevOverflow || '';

      // restore scroll position if we previously locked it
      if (typeof scrollY === 'number') {
        window.scrollTo(0, scrollY);
      }
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
    
    if (!mailForm.email || !mailForm.message) {
      setMailStatus({ type: 'error', message: 'Please fill in all fields' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mailForm.email)) {
      setMailStatus({ type: 'error', message: `Please include a valid email address. '${mailForm.email}' is missing an '@' or domain.` });
      return;
    }

    setIsSending(true);
    setMailStatus({ type: '', message: '' });

    try {
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const FORMSPREE_ID = 'mnjwjawv';
      
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: mailForm.email,
          message: mailForm.message,
        }),
      });

      if (response.ok) {
        setMailStatus({ type: 'success', message: 'Email sent successfully!' });
        setMailForm({ email: '', message: '' });
        setTimeout(() => {
          setMailStatus({ type: '', message: '' });
        }, 2000);
      } else {
        setMailStatus({ type: 'error', message: 'Failed to send email. Try again.' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setMailStatus({ type: 'error', message: 'Error sending email. Try again.' });
    } finally {
      setIsSending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#161825] md:bg-[#161825]/90 md:backdrop-blur-3xl md:backdrop-saturate-200"
      onClick={handleBackdropClick}
    >
      <div className="no-scrollbar relative w-full max-w-4xl bg-transparent rounded-none shadow-none transform transition-all duration-300 animate-in zoom-in-95 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 md:p-8 pb-4">
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
            <AiOutlineClose className="w-6 h-6" />
          </button>
        </div>

        {/* Content: left = mail form, right = map */}
        <div className="grid items-stretch grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-6 pb-6 overflow-hidden">
          <div className="w-full h-full bg-gray-800 p-6 rounded-none relative">
            <div className="mb-6 flex items-center gap-3">
              <FaEnvelope className="w-8 h-8 text-white" />
              <h3 className="text-xl font-semibold text-white">Send Me an Email</h3>
            </div>
            {mailStatus.message && mailStatus.type === 'error' && (
              <div className="absolute top-4 right-4 left-4 md:left-auto md:w-2/3 p-3 pr-10 rounded-none text-sm bg-red-900 text-red-200 shadow-xl z-20 animate-in fade-in slide-in-from-top-2 border border-red-700">
                {mailStatus.message}
                <button
                  type="button"
                  onClick={() => setMailStatus({ type: '', message: '' })}
                  className="absolute top-2 right-2 p-1 text-red-300 hover:text-white hover:bg-red-800 rounded transition-colors"
                  aria-label="Dismiss error"
                >
                  <AiOutlineClose className="w-4 h-4" />
                </button>
              </div>
            )}
            <form onSubmit={handleSendMail} className="space-y-4" noValidate>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                <input
                  type="email"
                  value={mailForm.email}
                  onChange={(e) => setMailForm({ ...mailForm, email: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 border-none text-white rounded-none focus:outline-none transition-colors duration-200"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  value={mailForm.message}
                  onChange={(e) => setMailForm({ ...mailForm, message: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 border-none text-white rounded-none focus:outline-none transition-colors duration-200 resize-none h-40"
                  placeholder="Write your message here..."
                  required
                />
              </div>
              <div className="relative w-full">
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3 bg-white text-[#18181a] font-semibold rounded-none transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSending ? 'Sending...' : 'Send'}
                </button>
                {mailStatus.message && mailStatus.type === 'success' && (
                  <div className="absolute inset-0 flex items-center justify-center p-3 rounded-none text-sm bg-green-900 text-green-200 font-semibold shadow-xl z-20 animate-in fade-in zoom-in-95 border-none">
                    {mailStatus.message}
                  </div>
                )}
              </div>
            </form>
          </div>

          <div className="p-4 md:p-6 bg-gray-800 h-full flex flex-col">
            <div className="mb-6 flex items-center gap-3">
              <FaMap className="w-8 h-8 text-white" />
              <h3 className="text-xl font-semibold text-white">My Location</h3>
            </div>
            <div className="relative w-full flex-1 bg-gray-700 overflow-hidden min-h-[350px] md:min-h-0">
              {isMapLoading ? (
                <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                  <div className="h-10 w-10 rounded-full border-4 border-white/20 border-t-[#2DD4BF] animate-spin" />
                </div>
              ) : null}
              <button
                onClick={() => {
                  const iframe = document.querySelector('iframe[title="location-map"]');
                  if (iframe) {
                    setIsMapLoading(true);
                    const baseUrl = 'https://maps.google.com/maps?q=23.948102,90.37926&t=k&z=17&output=embed';
                    iframe.src = `${baseUrl}&cb=${Date.now()}`;
                  }
                }}
                className="absolute top-3 right-3 z-20 p-2 bg-white hover:bg-gray-200 rounded-full transition-colors duration-200"
                title="Refresh map"
              >
                <FaSync className="w-4 h-4 text-gray-800" />
              </button>
              <div className="absolute inset-0 bg-transparent">
                <iframe
                  title="location-map"
                  src="https://maps.google.com/maps?q=23.948102,90.37926&t=k&z=17&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setIsMapLoading(false)}
                />
                {/* Profile image marker pin - stays centered */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(100%-8px)] z-20 pointer-events-none">
                  <div className="relative flex flex-col items-center">
                    <img
                      src={profileImage}
                      alt="Location marker"
                      className="w-12 h-12 rounded-full border-4 border-white shadow-2xl object-cover"
                    />
                    {/* Pin pointer */}
                    <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white shadow-lg" style={{ marginTop: '-2px' }} />
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 100%)' }} />
              </div>
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
