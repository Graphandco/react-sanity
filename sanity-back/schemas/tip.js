export default {
    name: 'tip',
    title: 'Tip',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                                     .toLowerCase()
                                     .replace(/\s+/g, '-')
                                     .slice(0, 200)
              }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: "language",
            title: 'Language',
            type: 'string',
            options: {
                list: [
                    { value: 'css', title: 'CSS' },
                    { value: 'javascript', title: 'Javascript' },
                ]
            }
        },
        {
  type: 'array',
  name: 'list',
  of: [

    {
      title: 'Codes',
      type: 'object',
      name:'codes',
      fields: [
        {
          title: 'Text',
          name: 'text',
          type: 'string'
        } ,
        {
          title: 'Code',
          name: 'code',
          type: 'text'
        } 
      ]
    }
  ]
}
    ]
  }