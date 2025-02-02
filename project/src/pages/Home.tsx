import React from 'react';
import { ArrowRight, Calendar, Newspaper, Users } from 'lucide-react';
import { Target, Lightbulb } from 'lucide-react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    quote: "IEDC provided me with the perfect platform to transform my idea into a successful business. The mentorship and resources were invaluable."
  },
  {
    name: "Michael Chen",
    role: "Student Entrepreneur",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    quote: "The workshops and networking opportunities at IEDC helped me develop both my technical and business skills. It's been a game-changing experience."
  },
  {
    name: "Emily Rodriguez",
    role: "Tech Innovator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    quote: "Thanks to IEDC's support, I was able to patent my innovation and connect with the right industry partners. Their guidance was crucial to my success."
  }
];

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-600 to-blue-800 w-full">
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
      alt="IEDC Hero"
      className="w-full h-full object-cover opacity-20"
    />
  </div>
  <div className="relative w-full h-full flex items-center px-4 sm:px-6 lg:px-8">
    <div className="text-white w-full max-w-7xl mx-auto">
    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Innovation & Entrepreneurship Development Cell</h1>
      <p className="text-xl mb-8 max-w-2xl">
        Fostering innovation and entrepreneurial spirit among students through mentorship, resources, and opportunities.
      </p>
      <a
        href="/contact"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
      >
        Get Started
        <ArrowRight className="ml-2 h-5 w-5" />
      </a>
    </div>
  </div>
</section>


      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              Fostering innovation and entrepreneurship in the academic community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To develop institutional mechanism to create entrepreneurial culture and promote innovation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Who We Are</h3>
              <p className="text-gray-600">
                A community of innovators, mentors, and entrepreneurs working together to create impact.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">What We Do</h3>
              <p className="text-gray-600">
                Provide resources, mentorship, and opportunities for students to transform ideas into reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <Calendar className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Events & Workshops</h3>
              <p className="text-gray-600">
                Regular events and workshops to enhance your skills and knowledge.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Newspaper className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Latest News</h3>
              <p className="text-gray-600">
                Stay updated with the latest happenings in the startup ecosystem.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Mentorship</h3>
              <p className="text-gray-600">
                Get guidance from industry experts and successful entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Events Preview */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
            {/* Other sections */}
          {/* </div>
          <div className="text-center mt-8">
            <a
              href="/events"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
            <p className="mt-4 text-lg text-gray-600">
              What our community says about us
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 relative">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-100" />
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
