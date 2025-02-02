import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define the base URL for API requests
const BASE_URL = 'http://localhost:5000/api/team';

interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  github?: string;
}

interface TeamMember {
  _id: string;
  name: string;
  position: string;
  image: string;
  priority: number;
  social: SocialLinks;
  createdAt: string;
}

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [newTeamMember, setNewTeamMember] = useState<TeamMember>({
    _id: '',
    name: '',
    position: '',
    image: '',
    priority: 0,
    social: {},
    createdAt: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingTeamMemberId, setEditingTeamMemberId] = useState<string | null>(null);

  // Fetch team members on component mount
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get(BASE_URL);
        if (Array.isArray(response.data)) {
          setTeamMembers(response.data);
        } else {
          console.error('Expected an array of team members, but received:', response.data);
        }
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };
    fetchTeamMembers();
  }, []);

  // Handle changes in the form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.includes('social.')) {
      // If it's a social field, update the social object
      const fieldName = name.split('.')[1]; // e.g. 'linkedin', 'twitter', 'github'
      setNewTeamMember((prevState) => ({
        ...prevState,
        social: {
          ...prevState.social,
          [fieldName]: value,
        },
      }));
    } else {
      // For other fields, update them directly
      setNewTeamMember({ ...newTeamMember, [name]: value });
    }
  };

  // Create or update team member
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditing) {
        // Update team member
        await axios.put(`${BASE_URL}/${editingTeamMemberId}`, newTeamMember);
        const updatedTeamMembers = teamMembers.map((item) =>
          item._id === editingTeamMemberId ? { ...item, ...newTeamMember } : item
        );
        setTeamMembers(updatedTeamMembers);
      } else {
        // Add new team member
        const response = await axios.post(BASE_URL, newTeamMember);
        setTeamMembers([...teamMembers, response.data]); // Append the new item to the list
      }
      setNewTeamMember({
        _id: '',
        name: '',
        position: '',
        image: '',
        priority: 0,
        social: {},
        createdAt: '',
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Error submitting team member:', error);
    }
  };

  // Edit team member
  const handleEdit = (item: TeamMember) => {
    setNewTeamMember(item);
    setIsEditing(true);
    setEditingTeamMemberId(item._id);
  };

  // Delete team member
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      setTeamMembers(teamMembers.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Error deleting team member:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{isEditing ? 'Edit Team Member' : 'Add Team Member'}</h2>

      {/* Team Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={newTeamMember.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Position</label>
          <input
            type="text"
            name="position"
            value={newTeamMember.position}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
            value={newTeamMember.image}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Priority</label>
          <input
            type="number"
            name="priority"
            value={newTeamMember.priority}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        {/* Social Links */}
        <div>
          <label className="block text-gray-700">LinkedIn</label>
          <input
            type="text"
            name="social.linkedin"
            value={newTeamMember.social.linkedin || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Twitter</label>
          <input
            type="text"
            name="social.twitter"
            value={newTeamMember.social.twitter || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">GitHub</label>
          <input
            type="text"
            name="social.github"
            value={newTeamMember.social.github || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md">
            {isEditing ? 'Update Team Member' : 'Add Team Member'}
          </button>
        </div>
      </form>

      {/* Team List */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Team Members</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left text-gray-700">Name</th>
              <th className="py-2 px-4 border-b text-left text-gray-700">Position</th>
              <th className="py-2 px-4 border-b text-left text-gray-700">Image</th>
              <th className="py-2 px-4 border-b text-left text-gray-700">Priority</th>
              <th className="py-2 px-4 border-b text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.length > 0 ? (
              teamMembers.map((member) => (
                <tr key={member._id}>
                  <td className="py-2 px-4 border-b">{member.name}</td>
                  <td className="py-2 px-4 border-b">{member.position}</td>
                  <td className="py-2 px-4 border-b">
                    <img src={member.image} alt={member.name} className="w-16 h-16 object-cover" />
                  </td>
                  <td className="py-2 px-4 border-b">{member.priority}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleEdit(member)}
                      className="text-blue-600 hover:text-blue-800 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(member._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-2 px-4 border-b text-center">
                  No team members available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamPage;
