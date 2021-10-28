import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Card from './project_comps/Card'
import LoginPage from './project_comps/pages/LoginPage'
import SideNavbar from './project_comps/SideNavbar'
import Table from './project_comps/Table'
import './scss/style.scss'
import PropType from 'prop-types';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <>
        {/* <LoginPage/> */}
        <SideNavbar/>
      </>
    )
  }
}

App.propTypes = {
  children: PropType.node,
};

export default App