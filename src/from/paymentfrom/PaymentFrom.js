import React, { Component } from 'react'
import { Card, Table, Button, Modal, Select } from 'antd'
const { Option } = Select
export default class PaymentFrom extends Component {
    state = {
        payments: [],
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
                title: 'วันที่จ่ายสินค้า',
                dataIndex: 'createdate',
                key: 'createdate',
            },
            {
                title: 'ชื่อลูกค้าที่สั่งซื้อ',
                dataIndex: 'fullname',
                key: 'fullname',
            },
            {
                title: 'สถานะการจ่าย',
                dataIndex: 'statusname',
                key: 'statusname',
            },
            {
                title: 'สถานะ',
                key: 'active',
                render: (text, record, index) => 
              { 
                  return (
                    <Select
                    // value={String(record.active)}
                    // onChange={(e) => this.changeStatus(record, e)}
                    value="สถานะ"
                    >   
                        <Option key={"true"}>จ่ายเเล้ว</Option>
                        <Option key={"false"}>ยังไม่จ่าย</Option>
                    </Select>
                )}          
            },
            {
                title: 'รายละเอียด',
                // dataIndex: 'dateend',
                // key: 'dateend',
                render: (text, record, index) =>
                    <span>
                        <Button type='link' onClick={this.showModal}>ดู</Button>
                    </span>
            }
        ]
        return (
            <div>
                <Modal
                    visible={this.state.visible}
                    onCancel={this.onCancel}
                    footer={null}
                    width='60%'
                    style={{ left: 70 }}
                >
                </Modal>
                <Card style={{ boxShadow: '9px 9px 20px 0px rgba(0,0,0,0.23)', marginBottom: '2%' }} title="PAYMENT" bordered={false}>
                    <Table
                    dataSource={this.props.data}
                    columns={columns}
                    rowKey={(row, index)=> index}
                    />
                </Card>
            </div>
        )
    }
}
