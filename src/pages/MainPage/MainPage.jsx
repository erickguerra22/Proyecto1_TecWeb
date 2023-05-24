/* eslint-disable max-len */
import React, { useState } from 'react'
import mainPage from './MainPage.module.css'
import NavBar from '../../components/NavBar'
import Button from '../../components/Button/Button'
import Mosaic from '../../components/Mosaic'
import Video from '../../components/Video/Video'
import {
  bundles, music, merchandise, tours,
} from '../../data/data'
import CardList from '../../components/CardList/CardList'
import Form from '../../components/Form/Form'

const MainPage = () => {
  const [hideForm, setHideForm] = useState(true)

  const handleFormHidden = (event) => {
    if (event.target === event.currentTarget) {
      setHideForm((old) => {
        document.body.style.overflow = old ? 'hidden' : 'scroll'
        return !old
      })
    }
  }

  window.onscroll = () => {
    const nav = document.getElementById('navBar')
    if (window.pageYOffset >= 40) {
      nav.style.background = '#DFE4E3'
    } else {
      nav.style.background = 'transparent'
    }
  }

  return (
    <div className={mainPage.styles}>
      <NavBar />
      <div className={mainPage.newAlbum}>
        <img
          src="https://www.sleep-token.com/wp-content/themes/sleeptoken4/img/sleep-token-icon-world.png"
          alt="take me back to Eden"
          width={320}
        />
        <h3>THE NEW ALBUM</h3>
        <h1>TAKE ME BACK TO EDEN</h1>
        <h3>OUT NOW</h3>
        <Button text="BUY NOW" filled link="https://www.sleep-token.com/Sleep%20Token/section/" />
        <div>
          <a href="https://www.sleep-token.com/wp-content/themes/sleeptoken4/img/spotify.png">
            <img
              height={25}
              src="https://www.sleep-token.com/wp-content/themes/sleeptoken4/img/spotify.png"
              alt="spotify"
              style={{ filter: 'invert(1)', marginRight: '4px' }}
            />
          </a>
          <a href="https://www.sleep-token.com/wp-content/themes/sleeptoken4/img/apple-music.png">
            <img
              height={25}
              src="https://www.sleep-token.com/wp-content/themes/sleeptoken4/img/apple-music.png"
              alt="apple-music"
              style={{ filter: 'invert(1)' }}
            />
          </a>
        </div>
        <a className={mainPage.link} href="https://sleeptoken.lnk.to/TakeMeBackToEden">Stream on all major platforms.</a>
        <div>
          <Button text="UK / EU STORE" fontSize="13.5px" link="https://www.sleep-token.com/Sleep%20Token/section/" />
          <Button text="US STORE" fontSize="13.5px" link="https://www.sleep-token.com/Sleep%20Token/section/" />
          <Button text="AU STORE" fontSize="13.5px" link="https://24hundred.net/collections/sleep-token" />
          <Button text="LABEL STORE" fontSize="13.5px" link="https://sleeptoken.tmstor.es/" />
          <Button text="IMPERICON" fontSize="13.5px" link="https://imperi.cn/sleep-token-imp" />
        </div>
      </div>
      <div className={mainPage.section}>
        <h2>TMBTE BUNDLES</h2>
        <Mosaic elements={bundles} />
      </div>
      <div className={mainPage.video}>
        <img
          height="310px"
          src="https://www.sleep-token.com/wp-content/themes/sleeptoken4/img/tmbte-glyphs.png"
          style={{ marginRight: '150px' }}
        />
        <a href="https://www.sleep-token.com/section/">
          <img width="340px" src="https://www.sleep-token.com/wp-content/themes/sleeptoken4/img/tmbte-subject.png" />
        </a>
        <div className={mainPage.youtube}>
          <h3>TAKE ME BACK TO EDEN</h3>
          <h1>TMBTE</h1>
          <Video src="https://www.youtube.com/embed/vFHBOKa_ZG0" />
          <Button text="BUY / LISTEN NOW" filled />
        </div>
      </div>
      <div className={mainPage.section}>
        <h2>TMBTE MUSIC</h2>
        <Mosaic elements={music} />
      </div>
      <div className={mainPage.section}>
        <h2>MERCHANDISE</h2>
        <Mosaic elements={merchandise} />
        <Button text="SHOP ALL" link="https://www.sleep-token.com/shop/" />
      </div>
      <div className={mainPage.section}>
        <h2>TOUR DATES</h2>
        <header>
          <p>SLEEP TOKEN tour dates</p>
          <a href="https://www.songkick.com/en/?utm_source=widget&utm_campaign=referral&utm_medium=9425279">
            <img width={70} src="/21781/proyecto1/songkick.svg" alt="songkick" />
          </a>
        </header>
        <CardList elements={tours} />
      </div>
      <div className={mainPage.footer}>
        <img width={250} src="https://www.sleep-token.com/wp-content/themes/sleeptoken4/img/st-ch3lm5-glyph-icons.png" />
        <Button text="NEWSLETTER SIGN UP" onClick={handleFormHidden} />
        <div className={mainPage.socialMedia}>
          <a href="https://www.facebook.com/sleeptoken/">
            <img src="/21781/proyecto1/facebook_fill.svg" />
          </a>
          <a href="https://www.instagram.com/sleep_token">
            <img src="/21781/proyecto1/instagram.svg" />
          </a>
          <a href="https://open.spotify.com/artist/2n2RSaZqBuUUukhbLlpnE6">
            <img src="/21781/proyecto1/spotify.svg" />
          </a>
          <a href="https://twitter.com/Sleep_Token">
            <img src="/21781/proyecto1/twitter_fill.svg" />
          </a>
          <a href="https://www.youtube.com/channel/UC-FsT1b7rc-mKVOjikjw5jg">
            <img src="/21781/proyecto1/youtube.svg" />
          </a>
          <a href="https://music.apple.com/us/artist/sleep-token/1153723033">
            <img src="/21781/proyecto1/apple-music.svg" />
          </a>
        </div>
        <div className={mainPage.externalLinks}>
          <a href="https://www.sleep-token.com/shipping-returns/">SHIPPING & RETURNS</a>
          {' | '}
          <a href="https://www.sleep-token.com/terms-conditions/">TERMS & CONDITIONS</a>
          {' | '}
          <a href="https://www.sleep-token.com/privacy-policy/">PRIVACY POLICY</a>
        </div>
        <p>Copyright © 2023 Sleep Token</p>
        <a href="https://allotment.pro/">allotment.pro</a>
      </div>
      <Form hidden={hideForm} onClick={handleFormHidden} />
    </div>
  )
}

export default MainPage
