import React, { Component } from 'react'
import { Input, Card, Col, Row, DatePicker, Select, Button } from 'antd' 
const { Option } = Select
export default class SelectFrom extends Component {
    render() {
        return (
            <div>
                <Card style={{ boxShadow: '9px 9px 20px 0px rgba(0,0,0,0.23)', marginBottom: '2%' }} title="SEARCH" bordered={false}>
                    <Row gutter={24} style={{ marginBottom: '1%' }}>
                        <Col span={12}>
                            <Input 
                            placeholder='ชื่อร้านค้า'
                            />
                        </Col>
                        <Col span={12}>
                            <Input 
                            placeholder='Email' 
                            />
                        </Col>
                    </Row>
                    <Row gutter={24} style={{ marginBottom: '1%' }}>
                        <Col span={12}>
                            <DatePicker 
                            placeholder='Select registerd date' 
                            style={{ width: '100%' }} 
                            />
                        </Col>
                        <Col span={12}>
                            <Select 
                            style={{ width: '100%' }}
                            value="สถานะร้านค้า"
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
            </div>
        )
    }
}
