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

export const AsPlayer = Template.bind({})
AsPlayer.args = {
  src: '/images/characters/millenium-falcon.png',
  player: true,
}
