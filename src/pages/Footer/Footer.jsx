const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#04081A] border-t border-gray-800/50">
      {/* Simple footer with just copyright */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} MD H R ALIF. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
