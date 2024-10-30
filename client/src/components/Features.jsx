import React from 'react';
import { Calendar, CreditCard, Globe, Users } from 'lucide-react';

const features = [
  {
    name: 'Simplified Booking',
    description: 'Book flights, hotels, and transportation all in one platform with our intuitive interface.',
    icon: Calendar,
  },
  {
    name: 'Expense Management',
    description: 'Track and manage all travel expenses with automated reporting and receipt scanning.',
    icon: CreditCard,
  },
  {
    name: 'Global Coverage',
    description: 'Access to worldwide inventory of flights, hotels, and services at competitive rates.',
    icon: Globe,
  },
  {
    name: 'Team Management',
    description: 'Manage travel policies and approvals for your entire organization efficiently.',
    icon: Users,
  },
];

const Features = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage business travel
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Comprehensive tools and features designed to make corporate travel management simple and efficient.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-xl bg-blue-600 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;