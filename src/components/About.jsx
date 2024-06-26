import React from 'react';

function About() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">About Page</h1>
        <p className="text-gray-600">
          Welcome to the About page. Here you can find information about our mission and values.
        </p>
      </div>
    </div>
  );
}

export default About;
