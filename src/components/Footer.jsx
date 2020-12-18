import React, { useState } from 'react'
import {
  TiSocialLinkedin,
  TiSocialYoutube,
} from 'react-icons/ti'

const snsMap = (sns) => (
  <a
    target="_blank"
    href={sns.to}
    rel="noopener noreferrer"
    key={sns.iconId}
  >
    <span className="icon-container" id={sns.iconId}>
      <sns.component className="footer-social-icon" />
    </span>
  </a>
)
const Footer = () => {
  const [snsList] = useState([
    // { to: 'https://twitter.com/', iconId: 'tw-icon', component: TiSocialTwitter },
    {
      to: 'https://www.youtube.com/channel/UCkZCZu6eLLDGiuVr5O3awgw',
      iconId: 'yt-icon',
      component: TiSocialYoutube,
    },
    {
      to: 'https://www.linkedin.com/in/%EC%84%B1%EC%A4%80-%ED%99%8D-6bb854171/',
      iconId: 'li-icon',
      component: TiSocialLinkedin,
    },
    // { to: 'https://www.linkedin.com/', iconId: 'fb-icon', component: TiSocialFacebook },
  ])

  return (
    <footer id="footer">
      <div className="inner">
        <div className="footer-social">
          <div className="footer-social-text">Follow Us</div>
          <div className="footer-social-icons">
            {snsList.map(snsMap)}
          </div>
        </div>
        <div><b>FreeVue</b> Copyright © {new Date().getFullYear()}</div>
      </div>
    </footer>
  )
}
export default Footer
