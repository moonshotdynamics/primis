const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-500 to-gray-300 text-white fixed inset-x-0 bottom-0 z-30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <p className="text-white text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Primis
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
