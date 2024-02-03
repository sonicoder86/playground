import { Layout, Menu, MenuProps, theme } from 'antd'
import { Logo } from './components/Logo.tsx'
import { Link, Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export const Root = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  const { Header, Content, Footer } = Layout
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()

  const loginMenu = { key: '/login', label: 'Login', onClick: () => loginWithRedirect() }
  const logoutMenu = { key: '/logout', label: 'Logout', onClick: () => logout() }
  const items: MenuProps['items'] = [
    { key: '/', label: (<Link to={'/'}>Movies</Link>) },
    { key: '/profile', label: (<Link to={'/profile'}>Profile</Link>) },
    isAuthenticated ? logoutMenu : loginMenu,
  ];

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Logo width={40} height={40} />
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>

      <Content style={{ padding: '0 48px', margin: '16px 0' }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  )
}
