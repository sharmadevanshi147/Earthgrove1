import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'URL Slug',
      type: 'slug',
      description: 'Used in the URL: /projects/[slug]',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'Commercial',
          'Residential',
          'Institutional',
          'Temple',
          'Interior',
          'Farmhouse',
          'Corporate',
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'expertiseSlug',
      title: 'Expertise Slug',
      type: 'string',
      description: 'Matches the expertise page slug (e.g. commercial, residential, temple)',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'siteArea',
      title: 'Site Area',
      type: 'string',
    }),
    defineField({
      name: 'builtUpArea',
      title: 'Built-up Area',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'intro',
      title: 'Intro (one-liner)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'Full Description',
      type: 'text',
      rows: 8,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'category', media: 'image' },
  },
})
