import React, { Component } from 'react'
import { Card, Row, Col, Table } from 'antd'
export default class Order extends Component {
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
                title: 'ลูกค้าที่สั่งซื้อ',
                dataIndex: 'fullname',
                key: 'fullname',
            },
            {
                title: 'เบอร์',
                dataIndex: 'phone',
                key: 'phone',
            },
            {
                title: 'จำนวนสินค้าที่สั่ง',
                dataIndex: 'sum',
                key: 'sum',
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
                title: 'ไปษณีย์',
                dataIndex: 'zipcode',
                key: 'zipcode',
            },
            {
                title: 'เลขหมายการขนส่ง',
                dataIndex: 'shiptrackno',
                key: 'shiptrackno',
            },
            {
                title: 'สถานะการส่ง',
                dataIndex: 'shippingstatusname',
                key: 'shippingstatusname',
            },
            {
                title: 'สถานะการจ่าย',
                dataIndex: 'statusname',
                key: 'statusname',
            }
        ]
        return (
            <div>
                <Card>
                    <Row>
                        <Col span={24}>
                            <Table
                            columns={columns}
                            dataSource={this.props.orders}
                            rowKey={(row, index)=> index}
                            />
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}
