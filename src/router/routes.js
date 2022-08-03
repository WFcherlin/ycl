//引入路由组件
import HomePage from '@/pages/HomePage'
const UserLogin = () => import('@/pages/UserLogin')
const DetailSearch = () => import('@/pages/DetailSearch')
const DetailPage = () => import('@/pages/DetailPage')

export default [
    {
        path: '/HomePage',
        component: HomePage,
        name:'HomePage'
    },
    {
        path: '/UserLogin',
        component: UserLogin,
        name:'UserLogin'
    },
    {
        path: '/DetailSearch',
        component: DetailSearch,
        name:'DetailSearch'
    },
    {
        path: '/DetailPage',
        component: DetailPage,
        name:'DetailPage'
    },
    //重定向,当访问/，立马定向到首页
    {
        path: '/',
        redirect: '/HomePage'
    },
]