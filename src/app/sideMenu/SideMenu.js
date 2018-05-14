import React from 'react'
import SvgIcon from 'react-icons-kit'

import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav'
import { ic_business } from 'react-icons-kit/md/ic_business'
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio'


// Component as a function, render basics of the application
function SideMenu() {
  return (
    <div className="side-menu-container col-md-3 col-lg-3">
      <SideNav
        defaultSelected="preview"
        highlightColor="#fff"
        highlightBgColor="#800080"
      >
        <Nav id="preview" className="side-menu_item" >
          <NavIcon>
            <SvgIcon size={20} icon={ic_aspect_ratio} />
          </NavIcon>
          <NavText> Preview </NavText>
        </Nav>
        <Nav id="players">
          <NavIcon>
            <SvgIcon size={20} icon={ic_business} />
          </NavIcon>
          <NavText> Players </NavText>
        </Nav>
        <Nav id="ecredits" >
          <NavIcon>
            <SvgIcon size={20} icon={ic_aspect_ratio} />
          </NavIcon>
          <NavText> E-credits </NavText>
        </Nav>
      </SideNav>
    </div>
  )
}

export default SideMenu
