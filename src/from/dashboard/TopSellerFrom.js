import React, { Component } from 'react'
import { Card, Row, Col, Table } from 'antd'
import { CardHeader } from 'reactstrap'
export default class TopSellerFrom extends Component {
    render() {
        const columns = [
            {
                title: 'ชื่อร้านค้า',
                dataIndex: 'seller_name',
                key: 'seller_name',
            },
            {
                title: 'ยอดขาย',
                dataIndex: 'total_price',
                key: 'total_price',
            },
            {
                title: 'ยอดผู้ใช้',
                dataIndex: 'total_customer',
                key: 'total_customer',
            },
        ]
        return (
            <div>
                <Card>
                    <CardHeader style={{backgroundColor: '#494d9b'}}><h5 style={{color:'white'}}>ยอดผู้ใช้ตามภูมิภาค</h5></CardHeader>
                    <Row>
                        <Col>
                            <Table
                            dataSource={this.props.topsellers}
                            columns={columns}
                            rowKey={(row, index)=> index}
                            />
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}
