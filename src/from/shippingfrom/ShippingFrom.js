import React, { Component } from 'react'
import { Card, Table, Button, Modal } from 'antd'
import ShippingModal from '../../modalComponents/Shipping'
export default class RecieveFrom extends Component {
    state={
        visible: false
    }
    onCancel = () => {
        this.setState({visible: false})
    }
    showModalShipping = async (index) => {
        this.props.showModal(index);
        this.setState({
            visible: true
        })
    }
    showModalRecieve = async (index) => {
        this.props.showModal(index);
        this.setState({
            visible: true
        })
    }
    render() {
        console.log(this.props);
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
                title: 'วันที่จัดส่งสินค้า',
                dataIndex: 'createdate',
                key: 'createdate',
            },
            {
                title: 'ชื่อลูกค้าที่สั่งซื้อ',
                dataIndex: 'fullname',
                key: 'fullname',
            },
            {
                title: 'สถานะการจัดส่ง',
                dataIndex: 'shippingstatusname',
                key: 'shippingstatusname',
            },
            {
                title: 'ที่อยู่',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: 'อำเภอ',
                dataIndex: 'disstrict',
                key: 'disstrict',
            },
            {
                title: 'จังหวัด',
                dataIndex: 'province',
                key: 'province',
            },
            {
                title: 'รายละเอียด',
                render: (text, record, index) =>
                    <span>
                        <Button type='link' onClick={ () => this.props.status === "shipping" ? this.showModalShipping(index): this.showModalRecieve(index)}>ดู</Button>
                    </span>
            }
        ]
        return (
            <div>
                <Modal
                    visible={this.state.visible}
                    onCancel={this.onCancel}
                    footer={null}
                    width='75%'
                    style={{ left: 70 }}
                >
                    <ShippingModal 
                    shipping={this.props.shipping}
                    />
                </Modal>
                <Card style={{ boxShadow: '9px 9px 20px 0px rgba(0,0,0,0.23)', marginBottom: '2%' }} title="RECIEVED" bordered={false}>
                    <Table
                        columns={columns}
                        dataSource={this.props.data}
                        rowKey={(row, index)=> index}
                    />
                </Card>
            </div>
        )
    }
}