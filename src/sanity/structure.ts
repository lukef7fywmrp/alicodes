import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Portfolio")
    .items([
      S.documentTypeListItem("author").title("Author"),
      S.documentTypeListItem("education").title("Education"),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("workExperience").title("Work Experience"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["author", "education", "project", "workExperience"].includes(
            item.getId()!
          )
      ),
    ]);
