"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-40 h-40 relative rounded-full overflow-hidden shadow-lg">
          <Image
            src="/images/profile.jpg"
            alt="Profile"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>

        <p className="text-lg leading-relaxed">
          I am a passionate Frontend Developer who loves building clean, modern, and user-friendly web applications.
          I enjoy solving UI problems, improving user experience, and turning ideas into smooth, visually appealing digital products.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-3">Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
        <li className="p-2 rounded-lg border">HTML</li>
        <li className="p-2 rounded-lg border">CSS</li>
        <li className="p-2 rounded-lg border">JavaScript</li>
        <li className="p-2 rounded-lg border">React</li>
        <li className="p-2 rounded-lg border">Next.js</li>
        <li className="p-2 rounded-lg border">Tailwind CSS</li>
      </ul>
    </section>
  );
}
