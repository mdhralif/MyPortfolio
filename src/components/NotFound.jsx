import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#04081A] text-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/" 
            className="inline-block px-6 py-3 bg-white text-gray-900 font-medium rounded-lg transition-all duration-200 border-2 border-white hover:bg-gray-100 hover:border-gray-200"
          >
            Go Home
          </Link>
          
          <div className="text-sm text-gray-500 mt-4">
            <p>Looking for something specific? Try one of these:</p>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              <Link to="/skills" className="text-gray-400 hover:text-white transition-colors">Skills</Link>
              <span className="text-gray-600">•</span>
              <Link to="/experience" className="text-gray-400 hover:text-white transition-colors">Experience</Link>
              <span className="text-gray-600">•</span>
              <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link>
              <span className="text-gray-600">•</span>
              <Link to="/achievement" className="text-gray-400 hover:text-white transition-colors">Achievement</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
