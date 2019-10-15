import React, { Component } from 'react'
import { Row, Col } from 'antd'
import ShippingFrom from '../../../from/shippingfrom/ShippingFrom'
import { shippigGet } from '../../../services/API'
export default class List extends Component {
    state = {
        shippings: [],

    }
    UNSAFE_componentWillMount () {
        this.getShipping();
    } 
    getShipping = async () => {
        const get = await shippigGet();
        this.setState({
            shippings: get.data
        })
    }
    showModal = async (index) => {
        // console.log('STATE +++ ', index);
        this.setState({
            shipping: this.state.shippings[index],
            visible: true
        })
    }
    render() {
        return (
            <div>
                <Row>
                    <Col>
                    <ShippingFrom 
                    data={this.state.shippings.length > 0 && this.state.shippings}
                    showModal={this.showModal}
                    shipping={this.state.shipping}
                    />
                    </Col>
                </Row>
            </div>
        )
    }
}