import React from "react";
import github from "../../assets/github.png";

const Footer = () => {
  return (
    <footer className="flex justify-end text-md sticky bottom-0">
      <div className="flex row-auto bg-gray-900 rounded-md items-center p-1">
        <p className="text-white">
          Realizado por{" "}
          <a
            href="https://github.com/alejandroFMA"
            className="font-bold text-indigo-600 hover:text-indigo-800"
            target="_blank"
          >
            Alejandro Márquez
          </a>
        </p>
        <div className="bg-gray-900 rounded-md">
        <a href="https://github.com/alejandroFMA" target="_blank">
          <img
            src={github}
            alt="Alejandro Márquez's GitHub page"
            width="24"
            height="24"
            className="ml-2 bg-white rounded-full"
          />  
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
