import React, { Component } from 'react'
import { Card, Table, Button, Input, Row, Col, DatePicker, Select } from 'antd'
const { Option } = Select
export default class List extends Component {
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
                dataIndex: 'datestart',
                key: 'datestart',
                // width: '25%',
                // render: (text, record, index) =>
                //     <p key={index}>{text}</p>
            },
            {
                title: 'Email',
                dataIndex: 'datestart',
                key: 'datestart',
                // width: '25%',
                // render: (text, record, index) =>
                //     <p key={index}>{text}</p>
            },
            {
                title: 'Active',
                dataIndex: 'datestart',
                key: 'datestart',
                // width: '25%',
                // render: (text, record, index) =>
                //     <p key={index}>{text}</p>
            },
            {
                title: 'Action',
                dataIndex: 'dateend',
                key: 'dateend',
                // width: '25%',
                render: (text, record, index) =>
                    <span>
                        {/* <Button type='link' onClick={() => this.onEdit(record.productid)}>Edit</Button>
                <Divider type="vertical" /> */}
                        <Button type='link'>View detail</Button>
                    </span>
            }
        ]
        return (
            <div>
                <Card style={{ boxShadow: '9px 9px 20px 0px rgba(0,0,0,0.23)', marginBottom: '2%' }} title="SEARCH" bordered={false}>
                    <Row gutter={24} style={{ marginBottom: '1%' }}>
                        <Col span={12}>
                            <Input placeholder='ชื่อร้านค้า' />
                        </Col>
                        <Col span={12}>
                            <Input placeholder='Email' />
                        </Col>
                    </Row>
                    <Row gutter={24} style={{ marginBottom: '1%' }}>
                        <Col span={12}>
                            <DatePicker placeholder='Select registerd date' style={{ width: '100%' }} />
                        </Col>
                        <Col span={12}>
                            <Select style={{ width: '100%' }} placeholder='Select active status'>
                                <Option value='non'>Select active status</Option>
                                <Option value='yes'>Yes</Option>
                                <Option value='no'>No</Option>
                            </Select>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={18} />
                        <Col span={3}>
                            <Button type="danger" style={{ width: '100%' }}>ล้างข้อมูล</Button>
                        </Col>
                        <Col span={3}>
                            <Button type="primary" style={{ width: '100%' }}>ค้นหา</Button>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Button type="primary" icon="search" style={{float:'right'}}>
                            ค้นหา
                        </Button>
                    </Row> */}
                </Card>
                <Card style={{ boxShadow: '9px 9px 20px 0px rgba(0,0,0,0.23)', marginBottom: '2%' }} title="SELLERS" bordered={false}>
                    <Table
                        columns={columns}
                    />
                </Card>
            </div>
        )
    }
}
