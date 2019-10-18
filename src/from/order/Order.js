import React, { Component } from 'react'
import { Card, Row, Col, Table, Tag } from 'antd'
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
                render: text => {
                    return (
                        <Tag color="#2db7f5" key={text}>
                            {text}
                        </Tag>
                    )
                }
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
                render: text => {
                    return (
                    <Tag color="#108ee9">
                        {text}
                        </Tag>
                    )
                }
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
                render: text => {
                    return (
                        <Tag color={text === "ยังไม่จัดส่งสินค้า" ? "gold" : text === "ส่งสินค้าเรียบร้อยแล้ว" ? "blue" : text === "รับสินค้าแล้ว" ? "green" : "purple"}>
                            {text}
                        </Tag>
                    )
                }
            },
            {
                title: 'สถานะการจ่าย',
                dataIndex: 'statusname',
                key: 'statusname',
                render: text => {
                    return (
                        <Tag color={text === "รอชำระ" ? "gold" : text === "รอตรวจสอบ" ? "blue" : text === "ชำระเงินแล้ว" ? "green" : "purple"}>
                            {text}
                        </Tag>
                    )
                }
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
