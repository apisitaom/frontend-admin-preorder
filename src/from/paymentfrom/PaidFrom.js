import React, { Component } from 'react'
import { Card, Table, Button, Modal } from 'antd'
export default class PaidFrom extends Component {
    handleSelect = value => {
        this.setState({ status: value })
    }
    clearSearchData = () => {
        this.setState({
            customername: '',
            status: '0',
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
                    // visible={this.state.visible}
                    // onCancel={this.onCancel}
                    // footer={null}
                    // width='60%'
                    // style={{ left: 70 }}
                >
                </Modal>
                <Card style={{ boxShadow: '9px 9px 20px 0px rgba(0,0,0,0.23)', marginBottom: '2%' }} title="PAID" bordered={false}>
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
