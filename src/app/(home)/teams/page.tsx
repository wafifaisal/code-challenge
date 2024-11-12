"use client";

import React from "react";
import axios from "axios";
import Image from "next/image"; // Import Image from next/image

type TeamMember = {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  email: string;
  phone: string;
  location: {
    city: string;
    country: string;
  };
};

const TeamsPage = () => {
  const [teamMembers, setTeamMembers] = React.useState<TeamMember[]>([]);
  const classList = ["slideDown", "slideUp", "slideLeft", "fadeIn"]; // Array of class names for animations

  React.useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=10"
        );
        setTeamMembers(response.data.results);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };
    fetchTeamMembers();
  }, []);

  return (
    <div className="my-20 px-4 lg:px-16">
      <section className="text-center">
        <header>
          <h2 className="text-4xl font-bold text-gray-900">Hello</h2>
        </header>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
          Lorem ipsum dolor sit amet, dictumst orci dignissim, ipsum et etiam
          dui, omnis dictumst ipsum nibh eu dolor id ut dignissim sed wisi
          litora. Pellentesque vel ipsum sit aenean a et justo.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group transform transition-all duration-500 ${
                classList[index % classList.length]
              }`}
            >
              <div className="card bg-white shadow-lg rounded-lg">
                <figure className="overflow-hidden">
                  {/* Replace img with Image component */}
                  <Image
                    src={member.picture.large}
                    alt={`${member.name.first} ${member.name.last}`}
                    className="w-full h-64 object-cover transform transition duration-300 group-hover:scale-105"
                    width={400} // Set the width you want
                    height={256} // Set the height you want
                  />
                </figure>
                <figure className="p-6 flex flex-col items-start justify-between bg-gray-800 text-white opacity-100 transition-all duration-300">
                  <h5 className="text-xl font-semibold">{`${member.name.first} ${member.name.last}`}</h5>
                  <p className="text-lg text-teal-400">Developer</p>
                  <div className="bio text-sm mt-2 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras vitae nibh eget urna eget condimentum convallis.
                  </div>
                  <div className="flex gap-4">
                    <div className="social-icon bg-white text-gray-800 rounded-full p-2">
                      <i className="fa fa-envelope"></i>
                    </div>
                    <div className="social-icon bg-white text-gray-800 rounded-full p-2">
                      <i className="fa fa-twitter"></i>
                    </div>
                    <div className="social-icon bg-white text-gray-800 rounded-full p-2">
                      <i className="fa fa-linkedin"></i>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamsPage;
