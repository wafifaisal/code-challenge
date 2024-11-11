"use client";

import { useEffect, useState } from "react";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState<any[]>([]);

  // Fetch team data from Random User API
  const fetchTeamMembers = async () => {
    const res = await fetch("https://randomuser.me/api/?results=3"); // Fetching 3 random users
    const data = await res.json();
    setTeamMembers(data.results); // Setting team members
  };

  useEffect(() => {
    fetchTeamMembers(); // Fetch data on component mount
  }, []);

  return (
    <div className="relative py-8 bg-gray-50">
      {/* Team Section */}
      <div className="bg-white py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member text-center">
              <img
                className="w-28 h-28 rounded-full mx-auto mb-4"
                src={member.picture.large} // Using the random photo URL
                alt={member.name.first}
              />
              <h3 className="text-xl font-semibold">
                {member.name.first} {member.name.last}
              </h3>
              <p className="text-lg text-gray-500">
                {member.dob.age} years old
              </p>
              <p className="text-sm text-gray-700 mt-2">
                {member.location.city}, {member.location.country}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Culture Section */}
      <div className="bg-gray-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Culture</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          At our company, we pride ourselves on a culture of inclusivity,
          innovation, and continuous growth. We believe in fostering a
          collaborative environment where every team member feels valued and
          empowered to contribute to the company's success.
        </p>
      </div>
    </div>
  );
};

export default Team;
