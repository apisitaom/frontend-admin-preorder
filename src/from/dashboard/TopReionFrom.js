import React, { Component } from 'react'
import { Card, Row, Col, Table } from 'antd'
import { CardHeader } from 'reactstrap'
export default class TopReionFrom extends Component {
    render() {
        const columns = [
            {
                title: 'จังหวัด',
                dataIndex: 'province',
                key: 'province',
            },
            {
                title: 'ยอดผู้ใช้',
                dataIndex: 'total_user',
                key: 'total_user',
            },
            {
                title: 'ยอดขาย',
                dataIndex: 'total_price',
                key: 'total_price',
            },
        ]
        return (
            <div>
                    <Card>
                    <CardHeader style={{backgroundColor: '#494d9b'}}><h5 style={{color:'white'}} >ยอดผู้ใช้ตามภูมิภาค</h5></CardHeader>
                    <Row>
                        <Col>
                            <Table
                            dataSource={this.props.topregions}
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
