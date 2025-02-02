import React, { useEffect, useState } from "react";

import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import Header from "../components/header";
import useDarkMode from "../hooks/useDarkMode";
import Bio from "../components/Bio";
import { getAllProjects } from "../lib/apiProjects";
import ProjectPreview from "../components/ProjectPreview";
import FeaturedProjects from "../components/FeaturedProjects";

type Props = {
  allPosts: Post[];
  allProjects: Post[];
};

const Index = ({ allPosts, allProjects }: Props) => {
  // const [colorTheme, setTheme]: any = useDarkMode();
  // const [navbarOpen, setNavbarOpen] = React.useState(false);

  // const [mounted, setMounted] = useState(false);
  // useEffect(() => setMounted(true), []);
  // if (!mounted) return null;

  // const heroPost = allPosts[0];
  // const morePosts = allPosts.slice(1);

  const bioText = (
    <>
      <p className="text-lg md:text-2xl ">
        <strong>Frontend Software Engineer</strong> based in Manchester, UK.
      </p>
      <p className="text-lg md:text-2xl">
        I'm passionate about delivering best-in-class client-centric web
        applications that truly solve user problems.
      </p>
      <p className="text-lg md:text-2xl">
        Currently working with React, Gatsby, Next.js, Typescript.
      </p>
    </>
  );

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <div className="container mx-auto px-5">
          <Header />
          {/* <Bio /> */}
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )} */}
          {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          <FeaturedProjects
            projects={allProjects}
            titleEllipsis
            className="lg:grid-cols-3 "
          />
          <MoreStories posts={allPosts} />
        </div>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "technologies",
  ]);
  const allProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "featured",
    "technologies",
  ]);

  return {
    props: { allProjects, allPosts },
  };

  // return {
  //   props: { allPosts },
  // };
};
