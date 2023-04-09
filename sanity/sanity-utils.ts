import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config';
import { Page } from "@/types/Page";

//use query language grok to grab projects for homepage at app/(site)/page in sanity studio
export async function getProjects(): Promise<Project[]> {
   
    // groq query
    //* means everything in the data, 
    //[] defines filter down - all of projects
    //{} opens up a projection, defines exact format
    //slug and image are special types
    //name, url, content are string so we can bring as they are
    return createClient(clientConfig).fetch(
        groq`*[_type=="project"]{
            _id,
            _createdAt,
            name,
            "slug":slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )

}

//return promise of 1 project for app/(site)/projects/[project] dynamic path
export async function getProject(slug: string): Promise<Project> {
    
    // groq query fetch
    return createClient(clientConfig).fetch(
        // find array of project with slug; so only need the first of array back
        groq`*[_type=="project" && slug.current== $slug][0]{
            _id,
            _createdAt,
            name,
            "slug":slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
        { slug }
    );
}

//return promise of all pages for app/projects/layout
//does not need to get content 
export async function getPages(): Promise<Page[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type=="page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current
        }`
    );
}
//individual page, need to display content for app/ dynamic path
export async function getPage(slug: string): Promise<Page> {
    return createClient(clientConfig).fetch(
        groq`*[_type=="page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content
        }`,
        { slug }
    )
}