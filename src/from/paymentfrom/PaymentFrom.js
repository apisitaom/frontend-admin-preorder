import React, { Component } from 'react'
import { Card, Table, Button, Modal, Select, Tag } from 'antd'
import PaymentModal from '../../modalComponents/Payment'
const { Option } = Select
export default class PaymentFrom extends Component {
    state={
        visible: false
    }
    onCancel = () => {
        this.setState({visible: false})
    }
    showModal = async (index) => {
        this.props.showModal(index);
        this.setState({visible: true})
    }
    changeStatusPayment = async (index, e) => {
        const data = {
            payid: index.payid
        }
        Modal.confirm({
            title: 'update status payment',
            onOk: () => this.onUpdateStatus(data)
        })
    }
    onUpdateStatus = async data => {
        await this.props.changeStatus(data);
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
                render: text => {
                    return (
                        <Tag color="red" key={text}>
                        {text.toLowerCase()}
                        </Tag>   
                    )
                }
            },
            {
                title: 'สถานะ',
                key: 'active',
                render: (text, record, index) => 
              { 
                  return (
                    <Select
                    onChange={(e) => this.changeStatusPayment(record, e)}
                    value="สถานะ"
                    >   
                        <Option key={"true"}>จ่ายเเล้ว</Option>
                    </Select>
                )}          
            },
            {
                title: 'รายละเอียด',
                render: (text, record, index) =>
                    <span>
                        <Button type='link' onClick={() => this.showModal(index)}>ดู</Button>
                    </span>
            }
        ]
        return (
            <div>
                <Modal
                    visible={this.state.visible}
                    onCancel={this.onCancel}
                    footer={null}
                    width='70%'
                >
                    <PaymentModal
                    payment={this.props.payment}
                    />
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
