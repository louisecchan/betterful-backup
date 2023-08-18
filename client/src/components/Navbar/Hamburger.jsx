import React from "react";

export const Hamburger = ({ isOpen }) => {
  return (
    <>
      <div className="hamburger">
        <div className="burger burger1"></div>
        <div className="burger burger2"></div>
        <div className="burger burger3"></div>
      </div>

      <style jsx="true">
        {`
          @media screen and (max-width: 720px) {
            .hamburger {
              position: absolute;
              top: 30%;
              right: 15.5%;
              width: 2rem;
              height: 1.5rem;
              display: flex;
              justify-content: space-around;
              flex-flow: column nowrap;
              z-index: 10;
            }

            .burger {
              width: 2rem;
              height: 0.08rem;
              border-radius: 10px;
              background-color: black;
              transition: all 0.3s linear;
            }

            .burger1 {
              transform-origin: 7.5px -1px;
              transform: ${isOpen ? "rotate(45deg)" : "rotate(0)"};
            }

            .burger2 {
              transform-origin: 1px;
              transform: ${isOpen ? "translateX(100%)" : "translateX(0)"};
              opacity: ${isOpen ? 0 : 1};
            }

            .burger3 {
              transform-origin: 1px;
              transform: ${isOpen ? "rotate(-45deg)" : "rotate(0)"};
            }
          }
        `}
      </style>
    </>
  );
};
