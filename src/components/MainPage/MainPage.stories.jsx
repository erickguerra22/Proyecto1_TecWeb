/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import MainPage from './MainPage'

export default {
  title: 'Sprites/MainPage',
  component: MainPage,
  tags: ['autodocs'],
}

const Template = (args) => (
  <div style={{ pading: '20px' }}>
    <MainPage {...args} />
  </div>
)

export const AsPlayer = Template.bind({})
AsPlayer.args = {
  src: '/images/characters/millenium-falcon.png',
  player: true,
}
