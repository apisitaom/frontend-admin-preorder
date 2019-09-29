import React, { Component } from 'react'
import { Card, Table, Select, Row, Col, Input, Button } from 'antd'
const { Option } = Select
export default class List extends Component {
    state = {
        orders: [],
        customername: '',
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
                title: 'วันที่สั่งสินค้า',
                // dataIndex: 'proname',
                // key: 'proname',
            },
            {
                title: 'ลูกค้าที่สั่งซื้อ',
                // dataIndex: 'proname',
                // key: 'proname',
            },
            {
                title: 'จำนวนสินค้าที่สั่ง',
                // dataIndex: 'proname',
                // key: 'proname',
            },
            {
                title: 'ราคารวมสินค้า',
                // dataIndex: 'proname',
                // key: 'proname',
            },
            {
                title: 'ชื่อร้านค้า',
                // dataIndex: 'proname',
                // key: 'proname',
            },
            {
                title: 'รายละเอียด',
                // dataIndex: 'proname',
                // key: 'proname',
            },
            {
                title: 'สถานะออเดอร์',
                // dataIndex: 'proname',
                // key: 'proname',
            }
        ]
        return (
            
            <div>
                <Card style={{ boxShadow: '9px 9px 20px 0px rgba(0,0,0,0.23)', marginBottom: '2%' }} title="SEARCH" bordered={false}>
                    <Row gutter={24} style={{ marginBottom: '1%' }}>
                        <Col span={12}>
                            <Input 
                            placeholder='ชื่อลูกค้า' 
                            style={{width:'100%'}}
                            onChange={(e)=>this.setState({customername: e.target.value},()=>console.log(this.state.customername))}/>
                        </Col>
                        <Col span={12}>
                            <Select placeholder='เลือกสถานะการชำระเงิน' style={{width:'100%'}}>
                                <Option value='0'>เลือกสถานะการชำระเงิน</Option>
                                <Option value='1'>ยังไม่ชำระเงิน</Option>
                                <Option value='2'>รอตรวจสอบ</Option>
                                <Option value='3'>ชำระเงินแล้ว</Option>
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
                </Card>
                <Card style={{ boxShadow: '9px 9px 20px 0px rgba(0,0,0,0.23)', marginBottom: '2%' }} title="ORDER" bordered={false}>
                <Button type='link' onClick={this.showModal}>View detail</Button>
                    <Table
                        columns={columns}
                    />
                </Card>
            </div>
        )
    }
}
