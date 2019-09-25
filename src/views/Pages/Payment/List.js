import React, { Component } from 'react'
import { Card, Table, Select, Row, Col, Input, Button, Modal } from 'antd'
import Payment from '../../../modalComponents/Payment'
const { Option } = Select
export default class List extends Component {
    state = {
        customername: '',
        status: '0',
    }
    handleSelect = value => {
        this.setState({ status: value })
    }
    clearSearchData = () => {
        this.setState({
            customername: '',
            status: '0'
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
                title: 'ชื่อลูกค้า',
                // dataIndex: 'proname',
                // key: 'proname',
                // width: '20%',
                // render: (text, record, index) =>
                //     <p key={index}>{text}</p>
            },
            {
                title: 'จำนวนเงิน(บาท)',
                // dataIndex: 'proname',
                // key: 'proname',
                // width: '20%',
                // render: (text, record, index) =>
                //     <p key={index}>{text}</p>
            },
            {
                title: 'สถานะการชำระเงิน',
                // dataIndex: 'proname',
                // key: 'proname',
                // width: '20%',
                // render: (text, record, index) =>
                //     <p key={index}>{text}</p>
            },
            {
                title: 'View detail',
                // dataIndex: 'proname',
                // key: 'proname',
                // width: '20%',
                // render: (text, record, index) =>
                //     <p key={index}>{text}</p>
            }
        ]
        return (
            <div>
                <Modal
                    // title={this.state.machine ? this.state.machine[0].machine_id : ''}
                    visible={this.state.visible}
                    onCancel={this.onCancel}
                    footer={null}
                    width='60%'
                    style={{ left: 70 }}
                >
                    <Payment />
                    {/* {this.state.product ? <Product product={this.state.product} options={this.state.options} /> : ''} */}
                </Modal>
                <Card style={{ boxShadow: '9px 9px 20px 0px rgba(0,0,0,0.23)', marginBottom: '2%' }} title="SEARCH" bordered={false}>
                    <Row gutter={24} style={{ marginBottom: '1%' }}>
                        <Col span={12}>
                            <Input
                                placeholder='ชื่อลูกค้า'
                                style={{ width: '100%' }}
                                value={this.state.customername}
                                onChange={(e) => this.setState({ customername: e.target.value })} />
                        </Col>
                        <Col span={12}>
                            <Select
                                placeholder='เลือกสถานะการชำระเงิน'
                                style={{ width: '100%' }}
                                value={this.state.status}
                                onChange={this.handleSelect}
                            >
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
                            <Button type="danger" style={{ width: '100%' }} onClick={this.clearSearchData}>ล้างข้อมูล</Button>
                        </Col>
                        <Col span={3}>
                            <Button type="primary" style={{ width: '100%' }}>ค้นหา</Button>
                        </Col>
                    </Row>
                </Card>
                <Card style={{ boxShadow: '9px 9px 20px 0px rgba(0,0,0,0.23)', marginBottom: '2%' }} title="ORDERS" bordered={false}>
                    <Button type='link' onClick={this.showModal}>view datail</Button>
                    <Table
                        columns={columns}
                    />
                </Card>
            </div>
        )
    }
}
