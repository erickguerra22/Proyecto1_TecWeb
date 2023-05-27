/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Mosaic from './Mosaic'

export default {
  title: 'Sprites/Mosaic',
  component: Mosaic,
  tags: ['autodocs'],
}

const Template = (args) => (
  <div style={{ pading: '20px' }}>
    <Mosaic {...args} />
  </div>
)

export const AsTest = Template.bind({})
AsTest.args = {
  elements: [
    {
      link: 'google.com',
      image: 'https://cdn.mos.cms.futurecdn.net/cPcRJtqoDjXRchP5HKETZE.jpg',
      title: 'Prueba',
      price: 50,
      columns: 3,
    },
    {
      link: 'google.com',
      image: 'https://cdn.mos.cms.futurecdn.net/cPcRJtqoDjXRchP5HKETZE.jpg',
      title: 'Prueba',
      price: 50,
      columns: 3,
    },
    {
      link: 'google.com',
      image: 'https://cdn.mos.cms.futurecdn.net/cPcRJtqoDjXRchP5HKETZE.jpg',
      title: 'Prueba',
      price: 50,
      columns: 3,
    },
    {
      link: 'google.com',
      image: 'https://cdn.mos.cms.futurecdn.net/cPcRJtqoDjXRchP5HKETZE.jpg',
      title: 'Prueba',
      price: 50,
      columns: 3,
    },
    {
      link: 'google.com',
      image: 'https://cdn.mos.cms.futurecdn.net/cPcRJtqoDjXRchP5HKETZE.jpg',
      title: 'Prueba',
      price: 50,
      columns: 4,
    },
  ],
}
