import React from 'react';
import { 
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn 
} from 'react-icons/fa';
import { 
  contactMe,
  contactItem 
} from './styles.module.scss';

const socials = [
  {
    Component: FaLinkedinIn,
    url: "https://linkedin.com",
    color: "#007bb5"
  },
  {
    Component: FaEnvelope,
    url: "https://gmail.com",
    color: "#ea4335"
  },
  {
    Component: FaFacebookF,
    url: "https://facebook.com",
    color: "#1877f2"
  },
  {
    Component: FaInstagram,
    url: "https://instagram.com",
    color: "#c32aa3"
  },
  {
    Component: FaTwitter,
    url: "https://twitter.com",
    color: "#1da1f2"
  },
]

const colorStyle = (color) => ({
  backgroundColor: color,
  borderColor: color
})

export default () => (
  <div className={contactMe}>
    {socials && socials.map((social) => (
      <a className={contactItem} style={colorStyle(social.color)}>
        <social.Component />
      </a>
    ))}
  </div>
)