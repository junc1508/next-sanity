//config for creating sanity studio in app/(studio)/admin/[[..index]]/page

import { defineConfig } from "sanity/lib/exports";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
// config for sanity studio
const config = defineConfig({
    projectId: "w7lx8tw4",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2023-03-09",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
  })
  
  export default config