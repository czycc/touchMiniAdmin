<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                        <Icon type="ios-navigate"></Icon>Item 1
                        </MenuItem>
                        <MenuItem name="2">
                        <Icon type="ios-keypad"></Icon>Item 2
                        </MenuItem>
                        <MenuItem name="3">
                        <Icon type="ios-analytics"></Icon>Item 3
                        </MenuItem>
                        <MenuItem name="4">
                        <Icon type="ios-paper"></Icon>Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff', minHeight: '750px'}">
                    <Menu active-name="3-1" theme="light" width="auto" :open-names="['3']">
                        <MenuItem name="1" to="/admin/index">
                        <Icon type="md-home" /> 首页
                        </MenuItem>
                        <MenuGroup title="基础管理">
                            <MenuItem name="2" to="/admin/tags">
                            <Icon type="md-document" />
                            标签管理
                            </MenuItem>
                        </MenuGroup>
                        <MenuGroup title="公司微信小程序">
                            <Submenu name="3">
                                <template slot="title">
                                    <Icon type="logo-youtube" />小程序视频模块
                                </template>
                                <MenuItem name="3-1" to="/admin/category/videos">视频分类</MenuItem>
                                <MenuItem name="3-2" to="/admin/videos">视频管理</MenuItem>
                            </Submenu>
                            <Submenu name="4">
                                <template slot="title">
                                    <Icon type="ios-analytics"></Icon>小程序文章模块
                                </template>
                                <MenuItem name="4-1">文章分类</MenuItem>
                                <MenuItem name="4-2">文章管理</MenuItem>
                            </Submenu>
                            <MenuItem name="5" to="/admin/tags">
                            <Icon type="md-document" />
                            公司介绍
                            </MenuItem>
                        </MenuGroup>

                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
export default {};
</script>

<style>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>