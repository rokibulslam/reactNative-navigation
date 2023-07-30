import { View, Text } from 'react-native'
import React from 'react'
import UserRoute from './UserRoute/UserRoute'
import AuthRoutes from './AuthRoute/AuthRoutes'

const MainStack = () => {
  return (
    <>
          <UserRoute />
          {/* <AuthRoutes /> */}
    </>
  )
}

export default MainStack