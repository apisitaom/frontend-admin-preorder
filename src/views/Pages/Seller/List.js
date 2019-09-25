import React, { Component } from 'react'
import { Card, Table, Button, Input, Row, Col, DatePicker, Select, Modal } from 'antd'
import Seller from '../../../modalComponents/Seller'
const { Option } = Select
export default class List extends Component {
    state = {
        shopname: '',
        email: '',
        status: 'non'
    }
    selectOnChange = value => {
        this.setState({status: value})
    }
    dateOnChange = (date, dateString) => {
        this.setState({date: dateString},()=>console.log(this.state.date))
    }
    clearSearchData = () =>{
        this.setState({
            shopname: '',
            email: '',
            status:'non'
        })
    }
    showModal = () => {
        this.setState({visible: true})
    }
    onCancel = () => {
        this.setState({visible: false})
    } 
    render() {
        const columns = [
            {
                title: '#',
                dataIndex: 'key',
                key: 'key',
                width: '5%',
                render: (text, record, index) => (
                    <span key={index}>
                        {index + 1}
                    </span>
                )
            },
            {
                title: 'วันลงทะเบียน',
                dataIndex: 'proname',
                key: 'proname',
                // width: '20%',
                // render: (text, record, index) =>
                //     <p key={index}>{text}</p>
            },
            {
                title: 'ชื่อร้านค้า',
                // dataIndex: 'datestart',
                // key: 'datestart',
                // width: '25%',
                // render: (text, record, index) =>
                //     <p key={index}>{text}</p>
            },
            {
                title: 'Email',
                // dataIndex: 'datestart',
                // key: 'datestart',
                // width: '25%',
                // render: (text, record, index) =>
                //     <p key={index}>{text}</p>
            },
            {
                title: 'Active',
                // dataIndex: 'datestart',
                // key: 'datestart',
                // width: '25%',
                // render: (text, record, index) =>
                //     <p key={index}>{text}</p>
            },
            {
                title: 'Action',
                // dataIndex: 'dateend',
                // key: 'dateend',
                // width: '25%',
                render: (text, record, index) =>
                    <span>
                        <Button type='link' onClick={this.showModal}>View detail</Button>
                    </span>
            }
        ]
        return (
            <div>
                <Modal
                    // title={this.state.machine ? this.state.machine[0].machine_id : ''}
                    visible={this.state.visible}
                    onCancel={this.onCancel}
                    footer={null}
                    width='55%'
                    style={{ left: 70 }}
                >
                    <Seller />
                    {/* {this.state.product ? <Product product={this.state.product} options={this.state.options} /> : ''} */}
                </Modal>
                <Card style={{ boxShadow: '9px 9px 20px 0px rgba(0,0,0,0.23)', marginBottom: '2%' }} title="SEARCH" bordered={false}>
                    <Row gutter={24} style={{ marginBottom: '1%' }}>
                        <Col span={12}>
                            <Input 
                            placeholder='ชื่อร้านค้า'
                            value={this.state.shopname} 
                            onChange={(e)=>this.setState({shopname: e.target.value})}
                            />
                        </Col>
                        <Col span={12}>
                            <Input 
                            placeholder='Email' 
                            value={this.state.email}
                            onChange={(e)=>this.setState({email: e.target.value})}
                            />
                        </Col>
                    </Row>
                    <Row gutter={24} style={{ marginBottom: '1%' }}>
                        <Col span={12}>
                            <DatePicker 
                            placeholder='Select registerd date' 
                            style={{ width: '100%' }} 
                            onChange={this.dateOnChange}
                            />
                        </Col>
                        <Col span={12}>
                            <Select 
                            style={{ width: '100%' }}
                            onChange={this.selectOnChange}
                            value={this.state.status}
                            >
                                <Option value='non'>Select active status</Option>
                                <Option value='yes'>Active</Option>
                                <Option value='no'>Inactive</Option>
                            </Select>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={18} />
                        <Col span={3}>
                            <Button type="danger" style={{ width: '100%' }} onClick={this.clearSearchData}>ล้างข้อมูล</Button>
                        </Col>
                        <Col span={3}>
                            <Button type="primary" style={{ width: '100%' }}>ค้นหา</Button>
                        </Col>
                    </Row>
                </Card>
                <Card style={{ boxShadow: '9px 9px 20px 0px rgba(0,0,0,0.23)', marginBottom: '2%' }} title="SELLERS" bordered={false}>
                <Button type='link' onClick={this.showModal}>View detail</Button>
                    <Table
                        columns={columns}
                    />
                </Card>
            </div>
        )
    }
}
