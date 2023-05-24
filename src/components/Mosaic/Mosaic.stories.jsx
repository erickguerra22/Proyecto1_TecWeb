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

export const AsPlayer = Template.bind({})
AsPlayer.args = {
  src: '/images/characters/millenium-falcon.png',
  player: true,
}
