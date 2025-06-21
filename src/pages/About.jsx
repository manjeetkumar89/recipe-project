import React from 'react';

const About = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-20">
      {/* Heading */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Welcome to <span className="font-semibold text-emerald-600">TasteBuds</span> – your go-to destination for exploring simple, tasty, and inspiring recipes.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2 items-center">
        {/* Text Block */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We believe that cooking should be joyful, accessible, and deeply satisfying. Whether you're a seasoned home chef or a curious beginner, our curated recipes are designed to ignite your culinary creativity.
          </p>

          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Step-by-step recipes with beautiful visuals</li>
            <li>Quick meals and healthy options</li>
            <li>Seasonal favorites and global cuisines</li>
            <li>Tips and tricks from food experts</li>
          </ul>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1495546968767-f0573cca821e?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About TasteBuds"
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-20">
        <h2 className="text-2xl font-bold mb-4">Join Our Foodie Community</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Subscribe for weekly recipes, tips, and food inspiration directly in your inbox.
        </p>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-full transition">
          Subscribe Now
        </button>
      </section>
    </main>
  );
};

export default About;
