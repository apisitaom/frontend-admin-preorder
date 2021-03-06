import React, { Component } from 'react'
import { Card, Table, Button, Modal, Tag } from 'antd'
import PaidModal from '../../modalComponents/Paid'
import moment from 'moment'
export default class PaidFrom extends Component {
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
    render() {
        const columns = [
            {
                title: '#',
                dataIndex: 'key',
                key: 'key',
                width: '10%',
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
                render: text => (
                    <span>{moment(text).format('lll')}</span>
                )
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
                        <Tag color="green" key={text}>
                        {text.toLowerCase()}
                        </Tag>   
                    )
                }
            },
            {
                title: 'รายละเอียด',
                render: (text, record, index) =>
                    <span>
                        <Button type='link' onClick={ () => this.showModal(index)}>ดู</Button>
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
                    <PaidModal 
                    payment={this.props.payment}
                    />
                </Modal>
                <Card style={{ boxShadow: '9px 9px 20px 0px rgba(0,0,0,0.23)', marginBottom: '2%' }} title="PAID" bordered={false}>
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
