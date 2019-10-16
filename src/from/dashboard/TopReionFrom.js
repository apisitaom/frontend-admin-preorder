import React, { Component } from 'react'
import { Card, Row, Col, Table } from 'antd'
import { CardHeader } from 'reactstrap'
export default class TopReionFrom extends Component {
    render() {
        const columns = [
            {
                title: 'ชื่อร้านค้า',
                dataIndex: '',
                key: '',
            },
            {
                title: 'ยอดขาย',
                dataIndex: '',
                key: '',
            },
            {
                title: 'ยอดผู้ใช้',
                dataIndex: '',
                key: '',
            },
        ]
        return (
            <div>
                    <Card>
                    <CardHeader><h5>ยอดผู้ใช้ตามภูมิภาค</h5></CardHeader>
                    <Row>
                        <Col>
                            <Table
                            columns={columns}
                            />
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}
