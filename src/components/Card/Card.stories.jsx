/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Card from './Card'

export default {
  title: 'Sprites/Card',
  component: Card,
  tags: ['autodocs'],
}

const Template = (args) => (
  <div style={{ pading: '20px' }}>
    <Card {...args} />
  </div>
)

export const AsPlayer = Template.bind({})
AsPlayer.args = {
  src: '/images/characters/millenium-falcon.png',
  player: true,
}
