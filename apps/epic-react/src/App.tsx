import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { Profile } from './pages/Profile.tsx'
import { Movies } from './pages/Movies.tsx'
import { Root } from './Root.tsx'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { index: true, element: <Movies /> },
        { path: 'profile', element: <Profile /> },
      ]
    },

  ]);

  return (
    <Auth0Provider
      domain="blacksonic.eu.auth0.com"
      clientId="KQnPDQw6abvUH3RZ6V85bkPNc7RY2wWZ"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  )
}

export default App
