import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { authorType } from "./authorType";
import { educationType } from "./educationType";
import { projectType } from "./projectType";
import { workExperienceType } from "./workExperienceType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    authorType,
    educationType,
    projectType,
    workExperienceType,
  ],
};
