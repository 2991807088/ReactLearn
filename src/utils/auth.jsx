import React from 'react'
import { Navigate } from 'react-router-dom'
const isLogin = sessionStorage.getItem('isLogin') // 鉴权，没有登录就重定向到登录页面
const Auth = (props) => {
    const { comp:Comp } = props
    if(isLogin) return Comp // 如果登录了，就跳转到传入的页面组件
    return <Navigate to='/login' replace/>
}
export default Auth