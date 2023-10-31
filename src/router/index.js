import { lazy } from 'react'
import lazyComp from '@/utils/lazyComp'
import Auth from '@/utils/auth'
import { header } from './headerMenu'
import Layouts from "@/components/layout"
const router = [
    {
        path: '/',
        element: <Auth comp={<Layouts />}/>,
        children: [...header]
    },
    {
        path: '*',
        element: lazyComp(lazy(() => import('@/views/notFound/notfound')))
    },
    {
        path: "/login",
        element: lazyComp(lazy(() => import('@/views/login/login'))),
     }
]
export default router