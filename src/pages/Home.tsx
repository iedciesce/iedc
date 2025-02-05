import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { ArrowRight, Calendar, Newspaper, Users, Target, Lightbulb, Quote, Rocket, TrendingUp} from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const heroImages = [
  "https://raw.githubusercontent.com/iesiedc/IMG/main/images/1738766955251-john-schnobrich-FlPc9_VocJ4-unsplash.jpg",
  "https://raw.githubusercontent.com/iesiedc/IMG/main/images/1738767078060-scott-graham-5fNmWej4tAA-unsplash.jpg",
  "https://raw.githubusercontent.com/iesiedc/IMG/main/images/1738767243764-domenico-loia-hGV2TfOh0ns-unsplash.jpg"
];

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

const features = [
  {
    icon: <Calendar className="h-12 w-12 text-blue-600 mb-4" />,
    title: "Events & Workshops",
    description: "Regular events and workshops to enhance your skills and knowledge.",
  },
  {
    icon: <Newspaper className="h-12 w-12 text-blue-600 mb-4" />,
    title: "Latest News",
    description: "Stay updated with the latest happenings in the startup ecosystem.",
  },
  {
    icon: <Users className="h-12 w-12 text-blue-600 mb-4" />,
    title: "Expert Mentorship",
    description: "Get guidance from industry experts and successful entrepreneurs.",
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-blue-600 mb-4" />,
    title: "Innovative Ideas",
    description: "We help bring your innovative ideas to life with expert support.",
  },
  {
    icon: <Rocket className="h-12 w-12 text-blue-600 mb-4" />,
    title: "Startup Incubation",
    description: "Resources and funding support to turn your startup dreams into reality.",
  },
  {
    icon: <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />,
    title: "Growth & Networking",
    description: "Connect with industry leaders and fellow entrepreneurs for growth opportunities.",
  },
];

const Home = () => {
  const [latestEvents, setLatestEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  useEffect(() => {
    const fetchLatestEvents = async () => {
      try {
        const response = await fetch('https://iedc-03oe.onrender.com/api/events/latest', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch events. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Events:", data);
        setLatestEvents(data);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestEvents();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[800px] bg-gradient-to-r from-blue-600 to-blue-800 w-full">
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
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 hover:shadow-lg transition-transform transform hover:-translate-y-2 duration-300"
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
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To develop institutional mechanism to create entrepreneurial culture and promote innovation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Who We Are</h3>
              <p className="text-gray-600">
                A community of innovators, mentors, and entrepreneurs working together to create impact.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 duration-300">
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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Features</h2>
          <p className="mt-4 text-lg text-gray-600">
            Fostering innovation and entrepreneurship in the academic community
          </p>
        </div>
        <Slider {...settings}>
          {features.map((feature, index) => (
            <div key={index} className="px-4">
              <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-transform transform hover:-translate-y-2 duration-300 text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>

     {/* Latest Events Preview */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900">Latest Events</h2>
    </div>

    {loading ? (
      <p className="text-center text-gray-600">Loading events...</p>
    ) : error ? (
      <p className="text-center text-red-600">{error}</p>
    ) : latestEvents.length === 0 ? (
      <p className="text-center text-gray-600">No upcoming events at the moment.</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {latestEvents.map((event) => (
          <div 
            key={event._id} 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 duration-300"
          >
            {/* Event Image (Check if Image URL is valid) */}
            {event.image ? (
              <img 
                src={event.image.startsWith("http") ? event.image : `https://iedc-03oe.onrender.com${event.image}`}
                alt={event.title || "Event Image"} 
                className="w-full h-40 object-cover rounded-md mb-4"
              />
            ) : (
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-md mb-4">
                <span className="text-gray-500">No Image</span>
              </div>
            )}

            {/* Event Title */}
            <h3 className="text-xl font-semibold mb-2">
              {event.title || "No Title"}
            </h3>

            {/* Event Date */}
            <p className="text-gray-600 mb-2">
              {event.date ? new Date(event.date).toDateString() : "Date not available"}
            </p>

            {/* Event Description */}
            <p className="text-gray-600 mb-4">
              {event.description 
                ? event.description.substring(0, 100) + "..." 
                : "No description available."
              }
            </p>
          </div>
        ))}
      </div>
    )}

    {/* View All Events Button */}
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
</section>




      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
            <p className="mt-4 text-lg text-gray-600">
              What our community says about us
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6 relative hover:shadow-lg transition-transform transform hover:-translate-y-2 duration-300">
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
