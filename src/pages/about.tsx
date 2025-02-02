import React from 'react';
import { Target, Lightbulb, Building2, Users, Brain, Rocket, ChevronRight, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/75">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl">
              <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                Est. 2016
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Innovation and Entrepreneurship Development Cell
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed">
                Empowering the next generation of innovators and entrepreneurs through technology and mentorship.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* College Info */}
            <div className="mb-20 flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3 flex justify-center">
                <img 
                  src="https://media.licdn.com/dms/image/v2/C560BAQGw_O_Imtj_zw/company-logo_200_200/company-logo_200_200/0/1630656696528/ies_college_of_engineering___india_logo?e=2147483647&v=beta&t=0T3SfQW047SUWO6LQhGGq2kSqawqnn1RhucdUYdpmco" 
                  alt="IES College of Engineering Logo" 
                  className="w-48 h-48 object-contain"
                />
              </div>
              <div className="w-full md:w-2/3">
                <div className="flex items-center space-x-2 text-blue-600 font-medium mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>IES COLLEGE OF ENGINEERING</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Excellence in Engineering Education</h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="leading-relaxed">
                    IES College of Engineering, established in 2003, is a premier engineering institution located in 
                    Chittilapilly, Thrissur, Kerala. The college stands as a beacon of quality technical education, 
                    committed to nurturing future engineers and innovators. Under the management of the innovative 
                    education society, the institution has consistently maintained high standards in academic excellence 
                    and professional development.
                  </p>
                </div>
              </div>
            </div>

            {/* IEDC Info */}
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-2 text-blue-600 font-medium mb-4">
                <ChevronRight className="w-4 h-4" />
                <span>ABOUT IEDC</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">Fostering Innovation in Kerala's Academic Landscape</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="leading-relaxed">
                  The Institute's Innovation and Entrepreneurship Development Cell (IES IEDC), established in 2016, 
                  stands as a cornerstone initiative of Kerala Startup Mission. As a flagship program, we're dedicated 
                  to cultivating innovation and entrepreneurial spirit among students and academic staff across Kerala's 
                  educational institutions.
                </p>
                <p className="leading-relaxed">
                  Our cell serves as an umbrella organization, playing a pivotal role in nurturing innovation culture 
                  within academic institutions. We're a student-driven organization committed to fostering entrepreneurship 
                  through comprehensive ED courses, supported by Kerala Startup Mission MSME & EDI, India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white p-12 rounded-2xl border border-blue-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-8">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Vision</h3>
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
                To inculcate an innovation culture among students, creating future entrepreneurs 
                and positioning our institution as a premier learning, innovation, and entrepreneurial hub.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-12 rounded-2xl border border-blue-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-8">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Mission</h3>
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
                To establish a cutting-edge innovation platform by introducing state-of-the-art 
                technologies and fostering a culture of innovation and entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Aims Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-2 text-blue-600 font-medium mb-4">
                <ChevronRight className="w-4 h-4" />
                <span>OUR OBJECTIVES</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Strategic Aims of IEDC</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[ 
                { icon: <Lightbulb className="w-8 h-8" />, title: "Innovation Culture", description: "Foster an innovation-driven entrepreneurship culture among students" },
                { icon: <Brain className="w-8 h-8" />, title: "Product Development", description: "Develop and promote commercially viable innovative solutions" },
                { icon: <Users className="w-8 h-8" />, title: "Enterprise Spirit", description: "Nurture entrepreneurial spirit among budding technopreneurs" },
                { icon: <Building2 className="w-8 h-8" />, title: "Industry Connect", description: "Bridge the gap between Industry and Academia effectively" }
              ].map((aim, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-6">
                    {aim.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{aim.title}</h3>
                  <p className="text-gray-600">{aim.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Functions Section */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-2 text-blue-600 font-medium mb-4">
                <ChevronRight className="w-4 h-4" />
                <span>KEY FUNCTIONS</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">How We Operate</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[ 
                { title: "Awareness & Education", description: "Create awareness and interest through workshops, hackathons, and faculty development programs" },
                { title: "Mentorship & Support", description: "Motivate and mentor students in identifying, developing, and commercializing innovative ideas" },
                { title: "Skill Development", description: "Provide a platform for young minds to develop skills with proper technological exposure" },
                { title: "Technical Training", description: "Deliver comprehensive technology and management skill training to students and faculty" },
                { title: "Specialization Hubs", description: "Create specialized hubs promoting entrepreneurship culture among student communities" }
              ].map((function_, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{(index + 1).toString().padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{function_.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{function_.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
