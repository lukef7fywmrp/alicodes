import { defineQuery } from "next-sanity";
import { sanityFetch } from "./live";

export const getAuthorData = async () => {
  const AUTHOR_QUERY = defineQuery(`
    *[_type == "author"][0] {
      _id,
      name,
      initials,
      avatar {
        asset-> {
          url
        }
      },
      description,
      summary,
      location,
      skills,
      social {
        github,
        linkedin,
        twitter,
        youtube,
        email
      }
    }
  `);

  const author = await sanityFetch({
    query: AUTHOR_QUERY,
  });

  return author.data ?? null;
};

export const getWorkExperience = async () => {
  const WORK_QUERY = defineQuery(`
    *[_type == "workExperience"] | order(startDate desc) {
      _id,
      company,
      title,
      logo {
        asset-> {
          url
        }
      },
      location,
      startDate,
      endDate,
      description,
      url
    }
  `);

  const work = await sanityFetch({
    query: WORK_QUERY,
  });

  return work.data ?? [];
};

export const getEducation = async () => {
  const EDUCATION_QUERY = defineQuery(`
    *[_type == "education"] | order(startDate desc) {
      _id,
      school,
      degree,
      logo {
        asset-> {
          url
        }
      },
      startDate,
      endDate,
      url
    }
  `);

  const education = await sanityFetch({
    query: EDUCATION_QUERY,
  });

  return education.data ?? [];
};

export const getProjects = async () => {
  const PROJECTS_QUERY = defineQuery(`
    *[_type == "project"] | order(startDate desc) {
      _id,
      title,
      description,
      startDate,
      endDate,
      technologies,
      image {
        asset-> {
          url
        }
      },
      video,
      links[] {
        title,
        url,
        type
      }
    }
  `);

  const projects = await sanityFetch({
    query: PROJECTS_QUERY,
  });

  return projects.data ?? [];
};
