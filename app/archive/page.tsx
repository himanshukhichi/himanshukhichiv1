import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/profile";

const archiveRows = [
  ...profile.projects.map((project) => ({
    year: "2026",
    title: project.title,
    builtWith: project.technologies,
    href: project.href ?? undefined
  })),
  {
    year: "2026",
    title: "createConda API",
    builtWith: ["FastAPI", "Object Storage", "Automation"],
    href: "/assets/himanshu-khichi-resume.pdf"
  },
  {
    year: "2025",
    title: "OCI DevOps CI/CD Pipelines",
    builtWith: ["OCI DevOps", "Docker", "Artifactory"],
    href: "/assets/himanshu-khichi-resume.pdf"
  }
];

export default function ArchivePage() {
  return (
    <main className="mx-auto min-h-screen max-w-screen-lg px-6 py-12 md:px-12 md:py-20">
      <Link
        href="/"
        className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
      >
        <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2 group-focus-visible:-translate-x-2" />
        {profile.name}
      </Link>
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        All Projects
      </h1>
      <p className="mt-4 max-w-2xl text-slate-400">
        A compact archive of platform, backend, cloud, and ML infrastructure work.
      </p>

      <div className="mt-12 overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="border-b border-slate-300/10 text-xs uppercase tracking-widest text-slate-500">
            <tr>
              <th className="py-4 pr-8 font-semibold">Year</th>
              <th className="py-4 pr-8 font-semibold">Project</th>
              <th className="hidden py-4 pr-8 font-semibold md:table-cell">Built with</th>
            </tr>
          </thead>
          <tbody>
            {archiveRows.map((project) => (
              <tr className="border-b border-slate-300/10 last:border-none" key={project.title}>
                <td className="whitespace-nowrap py-4 pr-8 align-top text-slate-500">
                  {project.year}
                </td>
                <td className="py-4 pr-8 align-top font-medium text-slate-200">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group/link inline-flex items-baseline hover:text-teal-300 focus-visible:text-teal-300"
                    >
                      {project.title}
                      <ArrowUpRight className="ml-1 h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                    </a>
                  ) : (
                    <span>{project.title}</span>
                  )}
                </td>
                <td className="hidden py-4 pr-8 align-top text-slate-400 md:table-cell">
                  <ul className="flex flex-wrap gap-1.5">
                    {project.builtWith.map((tech) => (
                      <li key={tech}>
                        <span className="rounded-full bg-teal-400/10 px-2.5 py-1 text-xs font-medium text-teal-300">
                          {tech}
                        </span>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
