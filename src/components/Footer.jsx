import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-emerald-600 text-white px-6 py-10 mt-10 rounded-t-4xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">TasteBuds</h2>
          <p className="text-sm">
            Discover and share everyday cooking inspiration. Find quick & easy
            recipes to suit every taste!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to='/' className="hover:underline">Home</Link></li>
            <li><Link to='/recipies' className="hover:underline">Recipes</Link></li>
            <li><Link to='/favorite' className="hover:underline">Favorites</Link></li>
            <li><Link to='/' className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Stay Connected</h3>
          <div className="flex space-x-4 mb-4">
            <Link to='/'><FaFacebookF className="hover:text-emerald-200" /></Link>
            <Link to='/'><FaInstagram className="hover:text-emerald-200" /></Link>
            <Link to='/'><FaTwitter className="hover:text-emerald-200" /></Link>
            <Link to='/'><FaYoutube className="hover:text-emerald-200" /></Link>
          </div>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded text-emerald-700 focus:outline-none"
            />
            <button className="bg-white text-emerald-700 font-semibold py-2 rounded hover:bg-emerald-100 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-emerald-500 mt-10 pt-4 text-center text-sm">
        © {new Date().getFullYear()} TastyBites. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
