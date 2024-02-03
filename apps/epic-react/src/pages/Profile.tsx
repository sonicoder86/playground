import { useEffect } from 'react'
import { Card, Empty } from 'antd'
import { useAuth0 } from '@auth0/auth0-react'

export const Profile = () => {
  const { user, isAuthenticated, isLoading, error } = useAuth0()

  useEffect(() => {
    console.log(user, isAuthenticated, isLoading, error)
  }, [user, isAuthenticated, isLoading, error])

  return (
    <>
      <h1>Profile</h1>
      {user && <Card title="Info">
        <p>{ user.email }</p>
        <p>{ JSON.stringify(user, null, 2) }</p>
      </Card>}
      {!user && <Empty />}
    </>
  )
}
