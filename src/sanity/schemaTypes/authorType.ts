import { UserIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "initials",
      title: "Initials",
      type: "string",
    },
    {
      name: "avatar",
      title: "Avatar",
      type: "image",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "summary",
      title: "Summary",
      type: "blockContent",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "social",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "github", title: "GitHub URL", type: "url" },
        { name: "linkedin", title: "LinkedIn URL", type: "url" },
        { name: "twitter", title: "Twitter/X URL", type: "url" },
        { name: "youtube", title: "YouTube URL", type: "url" },
        { name: "email", title: "Email", type: "string" },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "location",
      media: "avatar",
    },
  },
});
