import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import SvgIcon from 'react-icons-kit'
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav'

import { ic_remove_red_eye as overviewIcon } from 'react-icons-kit/md/ic_remove_red_eye'
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
    }
  }

  componentDidMount() {
    if (this.props.location.pathname === '/') this.props.history.push('/overview')
  }

  // Redirection to clicked tab
  handleRedirect(tab) {
    this.props.history.push(tab)
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
          defaultSelected={this.props.location.pathname === '/' ? '/overview' : this.props.location.pathname}
          highlightColor="#FFF"
          highlightBgColor="#3E3E3E"
          onItemSelection={(tab) => { this.handleRedirect(tab) }}
        >
          <Nav id="/overview">
            <NavIcon className="side-menu_icon">
              <SvgIcon size={24} icon={overviewIcon} />
            </NavIcon>
            <NavText className="side-menu_label">
              {this.props.location.pathname === '/overview' && <div className="side-menu_highlight overview_highlight" />}
              Vue globale
              {(this.props.location.pathname === '/overview' || this.props.location.pathname === '/') &&
                <SvgIcon className="side-menu_arrow overview_arrow" size={30} icon={arrowIcon} />
              }
            </NavText>
          </Nav>
          <Nav id="/players">
            <NavIcon className="side-menu_icon">
              <SvgIcon size={24} icon={playersIcon} />
            </NavIcon>
            <NavText className="side-menu_label">
              {this.props.location.pathname === '/players' && <div className="side-menu_highlight players_highlight" />}
              Joueurs
              {this.props.location.pathname === '/players' && <SvgIcon className="side-menu_arrow players_arrow" size={30} icon={arrowIcon} />}
            </NavText>
          </Nav>
          <Nav id="/ecredits">
            <NavIcon className="side-menu_icon">
              <SvgIcon size={24} icon={ecreditsIcon} />
            </NavIcon>
            <NavText className="side-menu_label">
              {this.props.location.pathname === '/ecredits' && <div className="side-menu_highlight ecredits_highlight" />}
              E-credits
              {this.props.location.pathname === '/ecredits' && <SvgIcon className="side-menu_arrow ecredits_arrow" size={30} icon={arrowIcon} />}
            </NavText>
          </Nav>
          <Nav id="/settings">
            <NavIcon className="side-menu_icon">
              <SvgIcon size={24} icon={settingsIcon} />
            </NavIcon>
            <NavText className="side-menu_label">
              {this.props.location.pathname === '/settings' && <div className="side-menu_highlight settings_highlight" />}
              Gestion
              {this.props.location.pathname === '/settings' && <SvgIcon className="side-menu_arrow settings_arrow" size={30} icon={arrowIcon} />}
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
