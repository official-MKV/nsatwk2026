export default {
  name: 'panelistCategory',
  title: 'Panelist Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'institutions',
      title: 'Institutions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Institution Name',
              type: 'string'
            },
            {
              name: 'logoPath',
              title: 'Logo Path',
              type: 'string'
            },
            {
              name: 'logo',
              title: 'Logo',
              type: 'image',
              options: {
                hotspot: true
              }
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'institutions.length'
    }
  }
}
