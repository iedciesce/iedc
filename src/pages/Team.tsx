import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { Linkedin, Twitter, Github, Users } from 'lucide-react';

interface TeamMember {
  _id: string;
  name: string;
  position: string;
  image: string;
  priority: number;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const Team = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get('https://iedc-03oe.onrender.com/api/team');
        setTeam(response.data);
      } catch (err) {
        const error = err as AxiosError;
        setError(error.response?.data?.message || 'Failed to fetch team members');
      }
    };

    fetchTeam();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 text-center text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  const principal = team.find((member) => member.priority === 3);
  const priorityMembers = team.filter((member) => member.priority === 2);
  const regularMembers = team.filter((member) => member.priority === 1);

  return (
    <div id="Teams" className="bg-gray-50">
      <div className="bg-indigo-700 py-16 text-center">
        <Users className="w-12 h-12 text-indigo-200 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-white sm:text-5xl">Meet Our Team</h1>
        <p className="mt-4 text-xl text-indigo-200 max-w-2xl mx-auto">
          We're a diverse group of passionate individuals working together to create amazing solutions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
       
        {team.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>No team members available at the moment.</p>
          </div>
        ) : (
      
          <><h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Leadership Team</h2>
            {principal && (
              <div className="mb-32">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-[21/9] relative">
                    <img
                      src={principal.image}
                      alt={principal.name}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
                    <h2 className="text-5xl font-bold mb-4 text-white leading-tight">{principal.name}</h2>
                    <p className="text-2xl text-indigo-200 mb-8 font-light">{principal.position}</p>
                    <div className="flex space-x-6">
                      {principal.social?.linkedin && (
                        <a
                          href={principal.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/80 hover:text-white transition-colors"
                          aria-label={`${principal.name}'s LinkedIn`}
                        >
                          <Linkedin className="h-8 w-8" />
                        </a>
                      )}
                      {principal.social?.twitter && (
                        <a
                          href={principal.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/80 hover:text-white transition-colors"
                          aria-label={`${principal.name}'s Twitter`}
                        >
                          <Twitter className="h-8 w-8" />
                        </a>
                      )}
                      {principal.social?.github && (
                        <a
                          href={principal.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/80 hover:text-white transition-colors"
                          aria-label={`${principal.name}'s GitHub`}
                        >
                          <Github className="h-8 w-8" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {priorityMembers.length > 0 && (
              <div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {priorityMembers.map((member) => (
                    <TeamCard key={member._id} member={member} isLeader />
                  ))}
                </div>
              </div>
            )}

            {regularMembers.length > 0 && (
              <div className="bg-white py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                  {regularMembers.map((member) => (
                    <TeamCard key={member._id} member={member} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const TeamCard = ({ member, isLeader = false }: { member: TeamMember; isLeader?: boolean }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${isLeader ? 'md:flex' : ''}`}>
      <div className={isLeader ? 'md:w-1/2' : ''}>
        <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
      </div>
      <div className={`p-6 ${isLeader ? 'md:w-1/2' : ''}`}>
        <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
        <p className="text-blue-600 mb-4">{member.position}</p>
        <div className="flex space-x-4">
          {member.social?.linkedin && <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600"><Linkedin className="h-5 w-5" /></a>}
          {member.social?.twitter && <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400"><Twitter className="h-5 w-5" /></a>}
          {member.social?.github && <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900"><Github className="h-5 w-5" /></a>}
        </div>
      </div>
    </div>
  );
};

export default Team;
