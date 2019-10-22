import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Shippingfrom from '../../../from/shippingfrom/ShippingFrom'
import { shippingRecieve } from '../../../services/API'
export default class List extends Component {
    state = {
        shippings : [],
    }
    UNSAFE_componentWillMount () {
        this.getRecieve();
    }
    getRecieve = async () => {
        const get = await shippingRecieve();
        this.setState({
            shippings: get.data
        })
    }
    showModal = async (index) => {
        this.setState({
            shipping: this.state.shippings[index],
            visible: true
        })
    }
    render() {
        return (
            <div>
                <Row style={{marginTop: '5px'}}>
                    <Col>
                    <Shippingfrom 
                    status={this.setState.status = "recieve"}
                    data={this.state.search ? this.state.dataSearch : this.state.shippings.length > 0 && this.state.shippings}
                    showModal={this.showModal}
                    shipping={this.state.shipping}
                    />
                    </Col>
                </Row>
            </div>
        )
    }
}
