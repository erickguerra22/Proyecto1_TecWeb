/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Hamburger from './Hamburger'

export default {
  title: 'Sprites/Hamburger',
  component: Hamburger,
  tags: ['autodocs'],
}

const Template = (args) => (
  <div style={{ pading: '20px' }}>
    <Hamburger {...args} />
  </div>
)

export const AsActive = Template.bind({})
AsActive.args = {
  isActive: true,
}
