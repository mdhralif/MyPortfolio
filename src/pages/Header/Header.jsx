import alifIcon from "../../assets/images/ALIF.ico";

export default function Header() {
  return (
    <header className="fixed top-8 left-8 z-50">
      <div className="w-16 h-16 md:w-14 md:h-14 ">
        <img 
          src={alifIcon} 
          alt="Alif Logo" 
          className="w-full h-full object-cover"
        />
      </div>
    </header>
  );
}

