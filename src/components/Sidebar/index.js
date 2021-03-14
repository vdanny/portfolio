import React, { Fragment, useState, useEffect, useLayoutEffect } from 'react';
import { FaBars, FaTimes, FaChevronUp } from 'react-icons/fa';
import {
  sidebar,
  sidebarUpper,
  avatar,
  title,
  subtitle,
  menuWrapper,
  menuList,
  listItem,
  active,
  footer,
  menuMobile,
  open,
  hidden,
  scrollToTop
} from "./styles.module.scss";

export default ({ menus = [], refs = [], avatarUrl = '' }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [scrollList, setScrollList] = useState([]);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [hiddenFlag, setHiddenFlag] = useState(true);

  const handleMenuMobileClick = () => {
    setOpenSidebar(!openSidebar)

    if (openSidebar) {
      setTimeout(() => {
        setHiddenFlag(true);
      }, 500);
    }
    else {
      setHiddenFlag(false);
    }
  }

  const handleClick = (index) => () => {
    setActiveIdx(index);
    refs[index].current.scrollIntoView({ behavior: 'smooth' });
  }

  const handleScroll = () => {
    if(scrollList.length) {
      const currScroll = window.scrollY;

      for (let index = scrollList.length - 1; index >= 0; index--) {
        if (currScroll >= scrollList[index]) {
          setActiveIdx(index);
          return;
        }
      }
    }
  }

  // handle scroll event
  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  })

  // get each divs top position
  useEffect(() => {
    if(refs && refs.length) {
      setScrollList(refs.map(ref => ref.current.offsetTop - 1))
    }
  }, [])

  return (
    <Fragment>
    <a className={menuMobile} onClick={handleMenuMobileClick}>{openSidebar ? <FaTimes /> : <FaBars />}</a>
    <aside className={`${sidebar} ${openSidebar ? open : ''} ${hiddenFlag ? hidden : ''}`}>
      <div className={sidebarUpper}>
        <div
          className={avatar}
          style={{ backgroundImage: `url(${avatarUrl})` }}
        />
        <div>
          <h2 className={title}>Vinsensius Danny</h2>
          <h3 className={subtitle}>Full Stack Developer</h3>
          <h3 className={subtitle}>Jakarta, ID</h3>
        </div>
        <div className={menuWrapper}>
          <ul className={menuList}>
            {menus && menus.map((menu, idx) => (
            <li key={idx} className={`${listItem} ${activeIdx === idx ? active : null}`}>
              <span onClick={handleClick(idx)}>{menu.name}</span>
            </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={footer}>
        Made with <a href="https://www.gatsbyjs.org">Gatsby</a> &amp; <a href="https://reactjs.org">ReactJS</a> <span role="img" aria-label="love">❤️</span>
      </div>
    </aside>
    <a onClick={handleClick(0)} className={scrollToTop + ' ' + (activeIdx > 0 ? '' : hidden)}>
      <FaChevronUp />
    </a>
    </Fragment>
  )
}