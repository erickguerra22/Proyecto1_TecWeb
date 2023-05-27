/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import CardList from './CardList'

export default {
  title: 'Sprites/CardList',
  component: CardList,
  tags: ['autodocs'],
}

const Template = (args) => (
  <div style={{ pading: '20px' }}>
    <CardList {...args} />
  </div>
)

export const AsList = Template.bind({})
AsList.args = {
  elements: [
    {
      header: true,
      icon: 'https://cdn.mos.cms.futurecdn.net/cPcRJtqoDjXRchP5HKETZE.jpg',
      text: 'Prueba',
      button: 'Prueba',
    },
    {
      event: 'Prueba',
      location: 'Prueba',
      link: 'https://google.com',
    },
    {
      footer: true,
      text: 'Prueba',
      button: 'Prueba',
    },
  ],
}
