/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import card from './Card.module.css'

const Card = ({
  header, footer, icon, text, link, button, date, event, location, save, facebook, twitter, hour,
}) => {
  const [menuVisible, setMenuVisible] = useState(false)
  const [copyText, setCopyText] = useState(false)

  const showMenu = () => {
    setMenuVisible((old) => !old)
  }

  const copyLink = () => {
    navigator.clipboard.writeText(link)
    setTimeout(() => {
      setCopyText((old) => !old)
    }, 1000)
    setCopyText((old) => !old)
  }

  const handleLink = (ev) => {
    if (ev.target === ev.currentTarget) window.location = link
  }

  if (header || footer) {
    return (
      <div className={card.styles}>
        <div className={card.iconContainer}>
          {header && <img className={card.icon} src={icon} alt={text} />}
          <p>{text}</p>
        </div>
        <a href={link}>
          <button type="button">{button}</button>
        </a>
      </div>
    )
  }

  return (
    <a onClick={handleLink} className={menuVisible ? `${card.element} ${card.showMenu}` : card.element}>
      <div className={card.info}>
        <div style={{ display: 'flex' }}>
          <p>{date}</p>
          {hour !== '' && <p style={{ color: '#939491' }}>{`• ${hour}`}</p>}
        </div>
        <h3>{event}</h3>
        <p style={{ letterSpacing: '0.5px', fontSize: '14px' }}>{location}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        <a href={link}><button type="button">Tickets</button></a>
        <div className={card.actions}>
          <button type="button" onClick={showMenu}>
            <img src="/share.svg" />
          </button>
          <a href={save}>
            <button type="button">
              <img src="/save.svg" />
            </button>
          </a>
        </div>
      </div>
      <div className={card.shareMenu} style={{ display: `${menuVisible ? 'flex' : 'none'}` }}>
        <a onClick={copyLink}>
          <img src={copyText ? '/copied.svg' : '/link.svg'} />
          <p>Copy link</p>
        </a>
        <a href={facebook}>
          <img src="/facebook.svg" />
          <p>Facebook</p>
        </a>
        <a href={twitter}>
          <img src="/twitter.svg" />
          <p>Twitter</p>
        </a>
        <button type="button" onClick={showMenu}>
          <img src="/close.svg" />
        </button>
      </div>
    </a>
  )
}

Card.defaultProps = {
  header: false,
  footer: false,
  icon: undefined,
  text: '',
  button: '',
  date: '',
  event: '',
  location: '',
  save: '',
  facebook: '',
  twitter: '',
  hour: '',
}

Card.propTypes = {
  header: PropTypes.bool,
  footer: PropTypes.bool,
  icon: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string.isRequired,
  button: PropTypes.string,
  date: PropTypes.string,
  event: PropTypes.string,
  location: PropTypes.string,
  save: PropTypes.string,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  hour: PropTypes.string,
}

export default Card
