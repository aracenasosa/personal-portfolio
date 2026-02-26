import { defineQuery } from "next-sanity";

export const portfolioQuery = defineQuery(`
    *[_type == "portfolio"][0] {
        ...,
        maxProjectsOnHome
    }
`);

export const projectQuery = defineQuery(`
    *[_type == "portfolio"][0] {
        "project": projects[_key == $id][0],
        "totalCount": count(projects)
    }
`);
