import { Breadcrumb, Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    HeartTwoTone,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons'
import { useState } from 'react'

import style from './MainLayout.module.less'
import React from 'react'
import Head from 'next/head'

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getMenuItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label
    } as MenuItem
}

const items: MenuItem[] = [
    getMenuItem('Dashboard', '1', <PieChartOutlined />),
    getMenuItem('Matrícula', '2', <DesktopOutlined />),
    getMenuItem('Escolas', '3', <UserOutlined />,),
    getMenuItem('Team', 'sub2', <TeamOutlined />, [getMenuItem('Team 1', '6'), getMenuItem('Team 2', '8')]),
    getMenuItem('Files', '9', <FileOutlined />),
];

export default ({ children }: any) => {

    const [collapsed, setCollapsed] = useState(false)

    const onCollapse = (collapsed: boolean) => setCollapsed(collapsed)

    const toggle = () => setCollapsed(!collapsed)

    return (
        <>
            <Head>
                <title>Portal da Educação</title>
                <meta name='description' content='Portal da Educação Municipal' />
            </Head>
            <Layout className={style.siteLayout}>
                <Sider breakpoint='lg' collapsible collapsed={collapsed} onCollapse={onCollapse} theme='light' >
                    <div className={style.logo}></div>
                    <Menu mode='inline' items={items} />
                </Sider>
                <Layout>
                    <Header className={style.header}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: style.trigger,
                            onClick: toggle,
                        })}
                    </Header>
                    <Content style={{ padding: '20px' }}>
                        {children}
                    </Content>
                    <Footer className={style.footer}>Desenvolvido com <HeartTwoTone twoToneColor="#eb2f96" /> por SIEJ</Footer>
                </Layout>
            </Layout>

        </>
    )
}