import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-9xl font-extrabold text-emerald-600 drop-shadow-lg">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mt-4">Oops! Page not found</h2>
      <p className="text-gray-600 mt-2 max-w-md">
        The page you’re looking for doesn’t exist or has been moved. Let's get you back to something tasty.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition"
      >
        Go to Homepage
      </Link>

      {/* Optional SVG Illustration */}
      <div className="mt-10 w-full max-w-md">
        <svg
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M250 30C135 30 45 120 45 235s90 205 205 205 205-90 205-205S365 30 250 30z"
            fill="#34d399"
            opacity="0.2"
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            stroke="#10b981"
            strokeWidth="1px"
            dy=".3em"
            fontSize="60"
            fontFamily="Arial"
          >
            Lost?
          </text>
        </svg>
      </div>
    </div>
  );
};

export default NotFound;
