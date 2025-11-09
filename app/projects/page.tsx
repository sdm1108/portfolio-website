import projects from "../../lib/projects";
import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage(){
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">Selected Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => <ProjectCard key={p.title} project={p} />)}
      </div>
    </section>
  )
}
