import { memo } from "react";

const Footer = () => {
  return (
    <footer className="footer items-center py-3 bottom-0 text-gray-50 rounded-b w-full bg-gray-900 z-20">
      <div className="container px-4 flex flex-wrap justify-between items-center mx-auto">
        <div className="flex">
          <p>Copyright © 2023 - All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
