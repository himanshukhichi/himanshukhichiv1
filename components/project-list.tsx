"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/profile";

const filters = ["All", "Distributed Systems", "ML Platform", "For Fun"] as const;
type CategoryFilter = (typeof filters)[number];
type ProjectCategory = Exclude<CategoryFilter, "All">;

export function ProjectList() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("Distributed Systems");

  const projects = useMemo(() => {
    if (activeFilter === "All") return profile.projects;
    const category = activeFilter as ProjectCategory;
    return profile.projects.filter((project) => project.category === category);
  }, [activeFilter]);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2" aria-label="Project category filters">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <button
              className={`rounded-md border px-3 py-1.5 text-xs font-bold uppercase tracking-widest transition ${
                isActive
                  ? "border-teal-300 bg-teal-300 text-teal-950"
                  : "border-slate-700/80 bg-slate-800/40 text-slate-400 hover:border-teal-300/70 hover:text-teal-300"
              }`}
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={isActive}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <ul className="group/list">
        {projects.map((project) => (
          <li className="mb-12" key={project.title}>
            <article className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-card-ring lg:group-hover:drop-shadow-lg" />
              <div className="z-10 sm:order-2 sm:col-span-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3>
                    <a
                      className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.title} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {project.title}{" "}
                        <span className="inline-block">
                          <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1" />
                        </span>
                      </span>
                    </a>
                  </h3>
                  {"badge" in project ? (
                    <span className="rounded-md border border-teal-300/30 bg-teal-400/10 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-widest text-teal-300">
                      {project.badge}
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm leading-normal">{project.description}</p>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                  {project.technologies.map((tech) => (
                    <li className="mr-1.5 mt-2" key={tech}>
                      <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                width={200}
                height={112}
                className="z-10 aspect-video rounded border-2 border-slate-200/10 object-cover transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              />
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
