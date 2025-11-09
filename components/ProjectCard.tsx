import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({project}:{project:{title:string,desc:string,image:string,stack:string[],github?:string,demo?:string}}) {
  return (
    <article className="bg-white/70 dark:bg-slate-800/60 p-4 rounded-2xl shadow hover:shadow-lg transition">
      <div className="relative h-40 rounded-lg overflow-hidden mb-3 bg-slate-100">
        <Image src={project.image} alt={project.title} fill style={{objectFit:'cover'}} />
      </div>
      <h3 className="font-semibold">{project.title}</h3>
      <p className="text-sm mt-2">{project.desc}</p>
      <p className="text-xs mt-3">{project.stack.join(" • ")}</p>
      <div className="mt-4 flex gap-3">
        {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="text-sm underline">GitHub</a>}
        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="text-sm underline">Live</a>}
      </div>
    </article>
  );
}
