import React from 'react';

function Card() {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
        Context API Level 1
      </h5>
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        Is Card component me prop drilling nahi hui hai. Dark mode state direct Context Provider se controlled hai!
      </p>
    </div>
  );
}

export default Card;