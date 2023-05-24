/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Video from './Video'

export default {
  title: 'Sprites/Video',
  component: Video,
  tags: ['autodocs'],
}

const Template = (args) => (
  <div style={{ pading: '20px' }}>
    <Video {...args} />
  </div>
)

export const AsPlayer = Template.bind({})
AsPlayer.args = {
  src: '/images/characters/millenium-falcon.png',
  player: true,
}
