import { CaseIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const workExperienceType = defineType({
  name: "workExperience",
  title: "Work Experience",
  type: "document",
  icon: CaseIcon,
  fields: [
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "title",
      title: "Job Title",
      type: "string",
    },
    {
      name: "logo",
      title: "Company Logo",
      type: "image",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "url",
      title: "Company URL",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "company",
      subtitle: "title",
      media: "logo",
    },
  },
});
