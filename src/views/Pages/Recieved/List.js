import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Shippingfrom from '../../../from/shippingfrom/ShippingFrom'
import { shippingRecieve } from '../../../services/API'
export default class List extends Component {
    state = {
        recieves : []
    }
    UNSAFE_componentWillMount () {
        this.getRecieve();
    }
    getRecieve = async () => {
        const get = await shippingRecieve();
        this.setState({
            recieves: get.data
        })
    }
    render() {
        return (
            <div>
                <Row>
                    <Col>
                    <Shippingfrom 
                    data={this.state.recieves.length > 0 && this.state.recieves}
                    />
                    </Col>
                </Row>
            </div>
        )
    }
}
