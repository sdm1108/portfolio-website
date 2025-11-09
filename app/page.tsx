"use client";

import Link from "next/link";
import Button from "../components/Button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-[70vh] flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-20">
      
      {/* Text Section */}
      <div className="max-w-3xl text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Hi, I’m Sakshi More — Frontend Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg"
        >
          I build beautiful, accessible web apps using React, Next.js and Tailwind. I love converting designs into well-tested, performant code.
        </motion.p>

        <div className="mt-8 flex justify-center md:justify-start gap-4">
          <Link href="/projects"><Button>View My Work</Button></Link>
          <Link href="/contact" className="inline-flex items-center px-4 py-2 rounded-lg border">
            Contact
          </Link>
        </div>
      </div>

      {/* Animated Hero Image */}
      <motion.div
        className="relative w-64 h-64 md:w-80 md:h-80"
        initial={{ opacity: 0, y: 30, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/Hero.jpg" // Place your image in public/images/
          alt="Hero Image"
          fill
          className="object-contain"
        />
      </motion.div>
    </section>
  );
}
