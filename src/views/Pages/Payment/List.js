import React, { Component } from 'react'
import { Row, Col } from 'antd'
import PaymentFrom from '../../../from/paymentfrom/PaymentFrom'
export default class List extends Component {
    render() {
        return (
            <div>
                <Row gutter={4}>   
                    <Col span={12}>
                        <PaymentFrom />
                    </Col>
                    <Col span={12}>
                        <PaymentFrom />
                    </Col>
                </Row>
            </div>
        )
    }
}
