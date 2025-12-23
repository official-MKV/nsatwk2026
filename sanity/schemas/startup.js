export default {
  name: 'startup',
  title: 'Startup',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'founded',
      title: 'Founded',
      type: 'string',
    },
    {
      name: 'funding',
      title: 'Funding',
      type: 'string',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
    },
    {
      name: 'video',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube embed URL'
    },
    {
      name: 'logoPath',
      title: 'Logo Path',
      type: 'string',
      description: 'Path to the logo file'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'logo'
    }
  }
}
