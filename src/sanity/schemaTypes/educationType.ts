import { defineType } from "sanity";
import { BookIcon } from "@sanity/icons";

export const educationType = defineType({
  name: "education",
  title: "Education",
  type: "document",
  icon: BookIcon,
  fields: [
    {
      name: "school",
      title: "School",
      type: "string",
    },
    {
      name: "degree",
      title: "Degree",
      type: "string",
    },
    {
      name: "logo",
      title: "School Logo",
      type: "image",
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
      name: "url",
      title: "School URL",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "school",
      subtitle: "degree",
      media: "logo",
    },
  },
});
