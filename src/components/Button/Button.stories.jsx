/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Button from './Button'

export default {
  title: 'Sprites/Button',
  component: Button,
  tags: ['autodocs'],
  arts: {
    type: 'button',
    filled: false,
  },
}

const Template = (args) => (
  <div style={{ pading: '20px' }}>
    <Button {...args} />
  </div>
)

export const AsFilled = Template.bind({})
AsFilled.args = {
  filled: true,
  text: 'filled',
  fontSize: '30px',
}

export const AsLink = Template.bind({})
AsLink.args = {
  text: 'Link',
  link: 'google.com',
  fontSize: '30px',
}
