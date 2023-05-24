/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import PropTypes from 'prop-types'
import button from './Button.module.css'

const Button = ({
  text, type, filled, fontSize, link, onClick,
}) => {
  const goToLink = () => {
    window.open(link)
  }

  return (
    <button
      className={button.styles}
      // eslint-disable-next-line react/button-has-type
      type={type}
      role={link ? 'link' : ''}
      style={{
        background: `${filled ? 'black' : ''}`,
        color: `${filled ? 'white' : ''}`,
        fontSize,
      }}
      onClick={link ? goToLink : onClick}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  filled: false,
  fontSize: undefined,
  link: undefined,
  onClick: undefined,
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  filled: PropTypes.bool,
  fontSize: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
