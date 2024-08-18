
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../../app/Slices/themeSlice';

const DarkModeToggle = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  return (
    <div className=" items-center justify-center sm:block hidden  ">
      <button
        onClick={() => dispatch(toggleDarkMode())}
        className={`relative w-16 h-8 rounded-full focus:outline-none transition-colors duration-300 ${
          darkMode ? 'bg-gray-800' : 'bg-[#ffefef] drop-shadow-xl '
        }`}
      >
        <div
          className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 transform ${
            darkMode ? 'translate-x-8 bg-gray-900  ' : 'translate-x-0 bg-white'
          }`}
        >
          <span
            className={`absolute inset-0 flex items-center justify-center text-lg transition-opacity duration-300 ${
              darkMode ? 'opacity-0' : 'opacity-100'
            }`}
          >
            ☀️
          </span>
          <span
            className={`absolute inset-0 flex items-center justify-center text-lg transition-opacity  duration-300 ${
              darkMode ? 'opacity-100' : 'opacity-0'
            }`}
          >
            🌙
          </span>
        </div>
      </button>
    </div>
  );
};

const DarkModeToggleforSmall = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  return (
    <div className=" items-center justify-center flex    ">
      <button
        onClick={() => dispatch(toggleDarkMode())}
        className={`relative w-16 h-8 rounded-full focus:outline-none transition-colors duration-300 ${
          darkMode ? 'bg-gray-800' : 'bg-[#ffefef] drop-shadow-2xl '
        }`}
      >
        <div
          className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 transform ${
            darkMode ? 'translate-x-8 bg-gray-900' : 'translate-x-0 bg-white'
          }`}
        >
          <span
            className={`absolute inset-0 flex items-center justify-center text-lg transition-opacity duration-300 ${
              darkMode ? 'opacity-0' : 'opacity-100'
            }`}
          >
            ☀️
          </span>
          <span
            className={`absolute inset-0 flex items-center justify-center text-lg transition-opacity  duration-300 ${
              darkMode ? 'opacity-100' : 'opacity-0'
            }`}
          >
            🌙
          </span>
        </div>
      </button>
    </div>
  );
};

export{
  DarkModeToggleforSmall
}

export default DarkModeToggle;
