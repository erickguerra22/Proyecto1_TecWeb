/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import MosaicElement from './MosaicElement'

export default {
  title: 'Sprites/MosaicElement',
  component: MosaicElement,
  tags: ['autodocs'],
}

const Template = (args) => (
  <div style={{ pading: '20px' }}>
    <MosaicElement {...args} />
  </div>
)

export const AsPlayer = Template.bind({})
AsPlayer.args = {
  src: '/images/characters/millenium-falcon.png',
  player: true,
}
