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
    url: "https://www.linkedin.com/in/vinsensiusdanny",
    color: "#007bb5"
  },
  {
    Component: FaEnvelope,
    url: "mailto:vinsensius.danny@gmail.com",
    color: "#ea4335"
  },
  // {
  //   Component: FaFacebookF,
  //   url: "https://facebook.com",
  //   color: "#1877f2"
  // },
  {
    Component: FaInstagram,
    url: "https://www.instagram.com/v.danny_",
    color: "#c32aa3"
  },
  {
    Component: FaTwitter,
    url: "https://twitter.com/vinsensiusdanny",
    color: "#1da1f2"
  },
]

const colorStyle = (color) => ({
  backgroundColor: color,
  borderColor: color
})

export default () => (
  <div className={contactMe}>
    {socials && socials.map((social, index) => (
      <a key={index} href={social.url} className={contactItem} style={colorStyle(social.color)}>
        <social.Component />
      </a>
    ))}
  </div>
)