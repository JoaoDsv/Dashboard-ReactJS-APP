import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import SvgIcon from 'react-icons-kit'
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav'

import { ic_remove_red_eye as previewIcon } from 'react-icons-kit/md/ic_remove_red_eye'
import { ic_group as playersIcon } from 'react-icons-kit/md/ic_group'
import { ic_local_atm as ecreditsIcon } from 'react-icons-kit/md/ic_local_atm'
import { ic_settings as settingsIcon } from 'react-icons-kit/md/ic_settings'
import { ic_chevron_right as arrowIcon } from 'react-icons-kit/md/ic_chevron_right'
import logoFdj from '../../assets/images/logoFdj.svg'
import userPicture from '../../assets/images/userPicture.jpg'


// Side menu component who lead the redirect
class SideMenu extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      user: {
        name: 'Guillaume Kordonian',
        job: 'Responsable Open Innovation FDJ',
      },
      tabColorsAssociationMap: {
        '/preview': 'red',
        '/players': '#8F39C1',
        '/ecredits': '#EF5F48',
        '/settings': '#EF5F48',
      },
      currentTabColor: '#8F39C1',
    }
  }

  componentDidMount() {
    if (this.props.location.pathname === '/') this.props.history.push('/players')
  }

  // Redirection to clicked tab
  handleRedirect(tab) {
    this.props.history.push(tab)
    this.setState({ currentTabColor: this.state.tabColorsAssociationMap[tab] })
  }

  render() {
    return (
      <div className="side-menu-container col-md-3 col-lg-3">
        <div className="user-profile-container">
          <div className="fdj-logo">
            <img src={logoFdj} alt="Française des Jeux logo" />
          </div>
          <img src={userPicture} className="user-profile_picture" alt="user" />
          <h1 className="user-profile_name">
            {this.state.user.name}
          </h1>
          <h2 className="user-profile_job">
            {this.state.user.job}
          </h2>
        </div>
        <SideNav
          style={{ 'text-align': 'center' }}
          defaultSelected={this.props.location.pathname === '/' ? '/ecredits' : this.props.location.pathname}
          highlightColor="#fff"
          highlightBgColor="#EF5F48"
          onItemSelection={(tab) => { this.handleRedirect(tab) }}
        >
          <Nav id="/preview">
            <NavIcon className="side-menu_icon">
              <SvgIcon size={24} icon={previewIcon} />
            </NavIcon>
            <NavText className="side-menu_label">
              Preview
              {(this.props.location.pathname === '/preview' || this.props.location.pathname === '/') &&
                <SvgIcon className="side-menu_arrow" size={30} icon={arrowIcon} />
              }
            </NavText>
          </Nav>
          <Nav id="/players">
            <NavIcon className="side-menu_icon">
              <SvgIcon size={24} icon={playersIcon} />
            </NavIcon>
            <NavText className="side-menu_label">
              Players
              {this.props.location.pathname === '/players' && <SvgIcon className="side-menu_arrow" size={30} icon={arrowIcon} />}
            </NavText>
          </Nav>
          <Nav id="/ecredits">
            <NavIcon className="side-menu_icon">
              <SvgIcon size={24} icon={ecreditsIcon} />
            </NavIcon>
            <NavText className="side-menu_label">
              E-credits
              {this.props.location.pathname === '/ecredits' && <SvgIcon className="side-menu_arrow" size={30} icon={arrowIcon} />}
            </NavText>
          </Nav>
          <Nav id="/settings">
            <NavIcon className="side-menu_icon">
              <SvgIcon size={24} icon={settingsIcon} />
            </NavIcon>
            <NavText className="side-menu_label">
              Gestion
              {this.props.location.pathname === '/settings' && <SvgIcon className="side-menu_arrow" size={30} icon={arrowIcon} />}
            </NavText>
          </Nav>
        </SideNav>
      </div>
    )
  }
}

SideMenu.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default withRouter(SideMenu)
