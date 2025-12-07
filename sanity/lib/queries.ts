import { defineQuery } from "next-sanity";

export const portfolioQuery = defineQuery('*[_type == "portfolio"][0]');

export const projectBySlugQuery = defineQuery(
    '*[_type == "portfolio"][0].projects[slug.current == $slug][0]'
);
