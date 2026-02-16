import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#04081A] text-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-300 mb-4">404 | Page Not Found</h1>
        </div>
        
        <div className="space-y-4">
          <div className="text-sm text-gray-500 mt-4">
            <p>Try one of these:</p>
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
