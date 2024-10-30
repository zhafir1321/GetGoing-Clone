import React from 'react';

const testimonials = [
  {
    content: "GetGoing has transformed how we manage our corporate travel. The platform is intuitive and saves us countless hours.",
    author: "Sarah Johnson",
    role: "Travel Manager",
    company: "Tech Corp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "The expense management features are game-changing. Our finance team loves how easy it is to track and report travel spending.",
    author: "Michael Chen",
    role: "CFO",
    company: "Growth Industries",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by companies worldwide
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            See what our customers have to say about their experience with GetGoing
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="p-8">
                  <div className="text-xl text-gray-600 leading-relaxed">
                    "{testimonial.content}"
                  </div>
                  <div className="mt-6 flex items-center">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={testimonial.image}
                      alt={testimonial.author}
                    />
                    <div className="ml-4">
                      <div className="text-base font-medium text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;