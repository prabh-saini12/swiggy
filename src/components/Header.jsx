import { useState, useContext } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState('login');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between shadow-lg p-4 bg-blue-50">
      <div className="flex items-center justify-between w-full md:w-auto">
        <img className="w-32 md:w-52" src={LOGO_URL} alt="logo" />
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <div className={`w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'} md:flex items-center`}>
        <ul className="flex flex-col md:flex-row md:space-x-4 w-full md:w-auto text-lg font-semibold">
          <li className="px-4 py-2 md:py-0 text-black">
            Online Status {onlineStatus ? '🟢' : '🔴'}
          </li>
          <li className="px-4 py-2 md:py-0 text-black hover:text-blue-500 transition-colors">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-2 md:py-0 text-black hover:text-blue-500 transition-colors">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 py-2 md:py-0 text-black hover:text-blue-500 transition-colors">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 py-2 md:py-0 text-black hover:text-blue-500 transition-colors">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 py-2 md:py-0 text-black hover:text-blue-500 transition-colors">
            Cart
          </li>
          <li className="px-4 py-2 md:py-0">
            <button
              className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-700 transition-colors"
              onClick={() => {
                btnNameReact === 'login'
                  ? setBtnNameReact('logout')
                  : setBtnNameReact('login');
              }}
            >
              {btnNameReact}
            </button>
          </li>
          <li className="px-4 py-2 md:py-0 text-black">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
