"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Fungsi untuk format angka menjadi K dan M
const formatNumber = (num: number): string => {
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}M`;
  } else if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1)}K`;
  }
  return num.toString();
};

export default function AboutPage() {
  const [clientsCount, setClientsCount] = useState(0);
  const [yarnsCount, setYarnsCount] = useState(0);
  const [patternsCount, setPatternsCount] = useState(0);
  const [teamMembers, setTeamMembers] = useState([]);

  // Fungsi animasi Count Up
  const countUp = (
    endValue: number,
    duration: number,
    setter: (value: number) => void
  ) => {
    let start = 0;
    const increment = endValue / (duration / 10);
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setter(endValue);
        clearInterval(timer);
      } else {
        setter(Math.round(start));
      }
    }, 10);
  };

  // Mengambil data anggota tim dari API RandomUser.me
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=3");
        const data = await response.json();
        setTeamMembers(data.results);
      } catch (error) {
        console.error("Failed to fetch team members:", error);
      }
    };

    fetchTeamMembers();
    countUp(10_000, 2000, setClientsCount);
    countUp(5_000_000, 2000, setYarnsCount);
    countUp(1_000, 2000, setPatternsCount);
  }, []);

  return (
    <div className="py-16 px-8 bg-pink-50 text-gray-800">
      {/* Vision Section */}
      <motion.section
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-semibold text-pink-700">Our Vision</h2>
        <p className="mt-4 text-xl text-gray-600">
          Inspiring creativity through hand-crafted beauty and crochet artistry.
        </p>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-semibold text-pink-700">Our Mission</h2>
        <p className="mt-4 text-xl text-gray-600">
          Providing a joyful crochet experience through quality, community, and
          passion.
        </p>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        className="text-center mb-16 bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-2xl font-semibold text-pink-700 mb-8">
          Our Achievements
        </h2>
        <div className="flex justify-around space-x-8">
          <div className="text-center">
            <p className="text-5xl font-bold text-pink-600">
              {formatNumber(clientsCount)}+
            </p>
            <p className="text-lg text-gray-600">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-pink-600">
              {formatNumber(yarnsCount)}+
            </p>
            <p className="text-lg text-gray-600">Yarns Used</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-pink-600">
              {formatNumber(patternsCount)}+
            </p>
            <p className="text-lg text-gray-600">Patterns Created</p>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
      >
        <h2 className="text-4xl font-semibold text-pink-700">Meet Our Team</h2>
        <div className="flex justify-center mt-8 space-x-8">
          {teamMembers.map((member: any, index: number) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.picture.large}
                alt={`${member.name.first} ${member.name.last}`}
                width={120}
                height={120}
                className="rounded-full mb-4 shadow-lg"
              />
              <h3 className="font-semibold text-lg text-pink-700">
                {member.name.first} {member.name.last}
              </h3>
              <p className="text-gray-600">Crochet Artist</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}