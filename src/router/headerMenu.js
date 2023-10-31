import { lazy } from 'react'
import lazyComp from '@/utils/lazyComp'

export const header = [
    {
        path: '/home',
        name: '首页',
        index: true, // 表示默认跳转到此路由
        element: lazyComp(lazy(() => import('@/views/home/home')))
    },
    {
        path: '/about',
        name: '关于',
        element: lazyComp(lazy(() => import('@/views/about/about')))
    },
    {
        path: '/analysis',
        name: '数据分析',
        element: lazyComp(lazy(() => import('@/views/analysis/analysis')))
    },
    {
        path: '/dateTable',
        name: '项目报告',
        element: lazyComp(lazy(() => import('@/views/dataTable/dataTable')))
    },
    {
        path: '/modelDeduction',
        name: '模型推演',
        element: lazyComp(lazy(() => import('@/views/modelDeduction/modelDeduction')))
    },
]