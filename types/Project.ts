//Project type, everything from schema
//underscore _ means sanity created it, we didn't generate
//content is rich text like, we want image and hyperlinks

import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    _createAt: Date;
    name: string;
    slug: string;
    image: string;
    url: string;
    content: PortableTextBlock[];
}