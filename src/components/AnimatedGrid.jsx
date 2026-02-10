
const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        {/* Square Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(6, 182, 212, 0.3) 1.5px, transparent 1px),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1.5px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedGrid;
