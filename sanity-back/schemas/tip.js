export default {
    name: 'tip',
    tip: 'Tip',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
        },
        {
            name: 'description',
            type: 'text',
        },
        {
            name: 'code',
            type: 'text',
        },
        {
            name: "language",
            title: 'Langage',
            type: 'string',
            options: {
                list: [
                    { value: 'css', title: 'CSS' },
                    { value: 'javascript', title: 'Javascript' },
                ]
            }
        }
    ]
  }