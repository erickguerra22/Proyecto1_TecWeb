/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import NavBar from './NavBar'

export default {
  title: 'Sprites/NavBar',
  component: NavBar,
  tags: ['autodocs'],
  args: {
    player: false,
    backgroundColor: 'transparent',
    rotate: '0deg',
    src: undefined,
    mirror: false,
  },
}

const Template = (args) => (
  <div style={{ pading: '20px' }}>
    <NavBar {...args} />
  </div>
)

export const AsPlayer = Template.bind({})
AsPlayer.args = {
  src: '/images/characters/millenium-falcon.png',
  player: true,
}

export const AsGoal = Template.bind({})
AsGoal.args = {
  src: '/images/goals/death-star.png',
}

export const AsHWall = Template.bind({})
AsHWall.args = {
  src: '/images/walls/asteroids.png',
}

export const AsVWall = Template.bind({})
AsVWall.args = {
  src: '/images/walls/asteroids.png',
  rotate: '270deg',
}

export const AsCWall = Template.bind({})
AsCWall.args = {
  src: '/images/corners/asteroid.png',
}
