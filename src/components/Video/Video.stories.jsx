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

export const AsVideo = Template.bind({})
AsVideo.args = {
  src: 'https://www.youtube.com/embed/o-GU_fmvZ3c',
}
