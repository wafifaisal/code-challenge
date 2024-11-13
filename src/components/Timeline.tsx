"use client";
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4 }}
    >
      <h2 className="text-4xl font-semibold text-pink-700 text-center mb-8">
        Our Journey
      </h2>
      <div className="relative">
        <div className="border-l-4 border-pink-600 absolute left-1/2 transform -translate-x-1/2 h-full"></div>
        <div className="space-y-8">
          <div className="relative flex items-center">
            <motion.div
              className="w-8 h-8 bg-pink-600 rounded-full absolute left-1/2 transform -translate-x-1/2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            ></motion.div>
            <div className="ml-12 pl-4 bg-white p-4 rounded-lg shadow-md w-full">
              <h3 className="text-xl font-semibold text-pink-700">
                Started Our Journey
              </h3>
              <p className="text-gray-600">
                In 2020, we began our crochet journey with a vision to create
                something unique.
              </p>
            </div>
          </div>
          <div className="relative flex items-center">
            <motion.div
              className="w-8 h-8 bg-pink-600 rounded-full absolute left-1/2 transform -translate-x-1/2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            <div className="ml-12 pl-4 bg-white p-4 rounded-lg shadow-md w-full">
              <h3 className="text-xl font-semibold text-pink-700">
                Launched Our First Collection
              </h3>
              <p className="text-gray-600">
                In 2021, we launched our first crochet collection, which was met
                with rave reviews.
              </p>
            </div>
          </div>
          <div className="relative flex items-center">
            <motion.div
              className="w-8 h-8 bg-pink-600 rounded-full absolute left-1/2 transform -translate-x-1/2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            ></motion.div>
            <div className="ml-12 pl-4 bg-white p-4 rounded-lg shadow-md w-full">
              <h3 className="text-xl font-semibold text-pink-700">
                Expanded to International Markets
              </h3>
              <p className="text-gray-600">
                In 2023, we expanded our operations to international markets,
                bringing our unique crochet designs to the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
