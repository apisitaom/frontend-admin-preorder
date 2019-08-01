import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import logo from '../logo.svg';
import Contents from './Contents'
import {Link} from 'react-router'
import HeaderText from './HeaderText'

const { Header, Sider, Content } = Layout;

export default class SideMenu extends Component {
    state = {
        collapsed: false,
      };
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    render() {
        return (
            <div>
                <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{background:'#555555'}}>
          <img className="logo-icon" src={logo} 
            style={this.state.collapsed ? { padding: '0%'} : {padding: '0%',left:'-29px'}} 
           />
          <div className="logo" >{this.state.collapsed ? '' : 'การจัดการ'}</div>
          <hr className="hr-logo"/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{background:'#555555'}}>
            <Menu.Item key="1">
                <Link to="/">
                <Icon type="dashboard" />
                <span>แดชบอร์ด</span>
                </Link>
            </Menu.Item>
            
            <Menu.Item key="2">
                <Link to="/product">
                <Icon type="code-sandbox" />
                <span>สินค้าของฉัน</span>
                </Link>
            </Menu.Item>
            
            <Menu.Item key="3">
                <Link to="/preorder">
                <Icon type="plus-circle" />
                <span>เปิดพรีออเดอร์</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="4">
                <Link to="/orderlist">
                <Icon type="unordered-list" />
                <span>รายการสั่ง</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="5">
                <Link to="/delivery">
                <Icon type="upload" />
                <span>การจัดส่ง</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="6">
                <Link to="/shopinfo">
                <Icon type="bank" />
                <span>ข้อมูลร้านค้า</span>
                </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#4d433a', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            /> 
            <HeaderText/>
          </Header>
          <Content style={{margin: '24px 16px',padding: 24,background: '#fff',minHeight: 280,}}>
              <Contents/>
          </Content>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </Layout>
      </Layout>
            </div>
        )
    }
}
