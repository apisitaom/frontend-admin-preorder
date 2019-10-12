import React, { Component } from 'react'
import { Row, Col } from 'antd'
import PaymentFrom from '../../../from/paymentfrom/PaymentFrom'
import { paymentGet, paymentCheck, paymentPay } from '../../../services/API'
export default class List extends Component {
    state = {
        paids: [],
        payments: []
    }
    UNSAFE_componentWillMount () {

    }

    render() {
        return (
            <div>
                <Row gutter={4}>   
                    <Col span={12}>
                        <PaymentFrom 
                        />
                    </Col>
                    <Col span={12}>
                        <PaymentFrom 
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}
