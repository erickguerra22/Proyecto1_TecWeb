/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import MosaicElement from './MosaicElement'

export default {
  title: 'Sprites/MosaicElement',
  component: MosaicElement,
  tags: ['autodocs'],
  args: {
    discount: false,
    soldOut: false,
    gridColumn: undefined,
  },
}

const Template = (args) => (
  <div style={{ pading: '20px' }}>
    <MosaicElement {...args} />
  </div>
)

export const AsElement = Template.bind({})
AsElement.args = {
  link: 'google.com',
  image: 'https://cdn.mos.cms.futurecdn.net/cPcRJtqoDjXRchP5HKETZE.jpg',
  title: 'Prueba',
  price: 50,
  columns: 3,
}
