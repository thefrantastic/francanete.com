import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "../types/author";
import ButtonToContent from "./ButtonToContent";
import { ProjectTechnologies } from "./ProjectTechnologies";
import { ProjectExcerpt } from "./ProjectExcerpt";
import { PostTitle } from "./PostTitle";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  technologies: string[];
  className?: string;
};

const ProjectPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  technologies,
  className,
}: Props) => {
  return (
    <div className={`${className} dark:text-gray-100`}>
      {/* <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div> */}

      <Link as={`/blog/${slug}`} href="/blog/[slug]" passHref>
        <a className="hover:underline">
          <PostTitle size="3xl" className="mb-4" weight="bold" level="h3">
            {title}
          </PostTitle>
        </a>
      </Link>
      <ProjectTechnologies
        marginTop="6"
        marginBottom="3"
        titleDisabled
        technologies={technologies}
      />
      {/* <Avatar name={author.name} picture={author.picture} /> */}
      {/* <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div> */}
      <ProjectExcerpt excerpt={excerpt} weight="light" />
      <ButtonToContent
        marginTop="4"
        slug={slug}
        type="button"
        title="Read More"
      />
    </div>
  );
};

export default ProjectPreview;
