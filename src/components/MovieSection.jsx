import { useState } from 'react';
import PropTypes from 'prop-types';

export default function MovieSection({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  // Interation for the section
  const onSectionOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // Styling for the section
  const divStyle = {
    overflow: isOpen && 'overflow-y-scroll',
    height: isOpen ? 'h-[580px] max-h-[650px]' : 'h-20',
  };

  const buttonStyle = {
    margin: isOpen && 'mb-8',
  };

  const buttonText = isOpen ? '-' : '+';

  return (
    <>
      <div
        className={`relative ${divStyle.height + ' ' + divStyle.overflow} w-1/2 rounded bg-gray-500 px-20 pt-5 transition-all duration-300`}
      >
        <button
          onClick={onSectionOpen}
          className={`${buttonStyle.margin} sticky right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white`}
        >
          {buttonText}
        </button>

        {/* SLOT */}
        {isOpen && children}
      </div>
    </>
  );
}

MovieSection.propTypes = {
  children: PropTypes.node,
};
