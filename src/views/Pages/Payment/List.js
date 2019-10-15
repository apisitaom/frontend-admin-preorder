import React, { Component } from 'react'
import { Row, Col } from 'antd'
import PaymentFrom from '../../../from/paymentfrom/PaymentFrom'
import PaidFrom from '../../../from/paymentfrom/PaidFrom'
import { paymentPaid, paymentCheck, paymentRole } from '../../../services/API'
export default class List extends Component {
    state = {
        paids: [],
        payments: []
    }
    UNSAFE_componentWillMount () {
        this.getPaid();
        this.getPayment();
    }
    getPaid = async () => {
        const get = await paymentPaid();
        this.setState({
            paids: get.data
        })
    }
    getPayment = async () => {
        const get = await paymentCheck();
        this.setState({
            payments: get.data
        })
    }
    render() {
        return (
            <div>
                <Row >   
                    <Col span={24}>
                        <PaymentFrom 
                        data={this.state.payments.length > 0 && this.state.payments}
                        />
                    </Col>
                    <Col span={24}>
                        <PaidFrom 
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}
