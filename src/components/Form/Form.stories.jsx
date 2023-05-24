/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Form from './Form'

export default {
  title: 'Sprites/Form',
  component: Form,
  tags: ['autodocs'],
}

const Template = (args) => (
  <div style={{ pading: '20px' }}>
    <Form {...args} />
  </div>
)

export const AsPlayer = Template.bind({})
AsPlayer.args = {
  src: '/images/characters/millenium-falcon.png',
  player: true,
}
