/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Button from './Button'

export default {
  title: 'Sprites/Button',
  component: Button,
  tags: ['autodocs'],
}

const Template = (args) => (
  <div style={{ pading: '20px' }}>
    <Button {...args} />
  </div>
)

export const AsPlayer = Template.bind({})
AsPlayer.args = {
  src: '/images/characters/millenium-falcon.png',
  player: true,
}
