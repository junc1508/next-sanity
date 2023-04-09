//define our schema, the convention is 
//name is singular, title is plural
//title is shown 
//field array, each correspond to a field inside the schema
const project = {
    name: 'project',
    title: "Projects",
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        }, 
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' }
        }, 
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            //means we can zoom in
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        }, 
        {
            //link to our external project
            name: 'url',
            title: 'URL',
            type: 'url'
        }, 
        {
            //talk about the project
            name: 'content',
            title: 'Content',
            type: 'array',
            //array of type block - rich text in sanity
            of:[{ type: "block" }]
        }, 
    ],

};

export default project;
