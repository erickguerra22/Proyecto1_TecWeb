/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Card from './Card'

export default {
  title: 'Sprites/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    header: false,
    footer: false,
    icon: undefined,
    text: '',
    button: '',
    date: '',
    event: '',
    location: '',
    save: '',
    facebook: '',
    twitter: '',
    hour: '',
  },
}

const Template = (args) => (
  <div style={{ pading: '20px' }}>
    <Card {...args} />
  </div>
)

export const AsHeader = Template.bind({})
AsHeader.args = {
  header: true,
  link: 'google.com',
  icon: 'https://cdn.mos.cms.futurecdn.net/cPcRJtqoDjXRchP5HKETZE.jpg',
  button: 'Prueba',
  text: 'Prueba',
}

export const AsFooter = Template.bind({})
AsFooter.args = {
  footer: true,
  link: 'google.com',
  button: 'Prueba',
  text: 'Prueba',
}

export const AsContent = Template.bind({})
AsContent.args = {
  link: 'google.com',
  event: 'Prueba',
  location: 'Prueba',
}
