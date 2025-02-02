import Link from "next/link";
import React from "react";
import { BoxModelProps } from "../types/BoxModelProps";
import ArrowIcon from "./icons/ArrowIcon";

interface ButtonToContentProps extends BoxModelProps {
  type?: "button" | "submit";
  title: string;
  slug: string;
}

export default function ButtonToContent({
  type,
  title,
  slug,
  marginTop,
  marginBottom,
}: ButtonToContentProps) {
  return (
    <Link as={`/projects/${slug}`} href="/projects/[slug]">
      <div
        className={`group cursor-pointer mt-${marginTop} mb-${marginBottom} flex items-center gap-5`}
      >
        <span className="text-lg hover:underline">{title}</span>
        <button
          type={type}
          className="group-hover:animate-pulse border border-dark group-hover:bg-dark group-hover:text-white focus:ring-4 group-focus:ring-slate-400 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-white dark:text-white dark:group-hover:text-dark dark:group-hover:bg-slate-100 "
        >
          <ArrowIcon />
        </button>
      </div>
    </Link>
  );
}
