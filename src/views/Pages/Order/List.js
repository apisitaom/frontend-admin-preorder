import React, { Component } from 'react'
import Order from '../../../from/order/Order'
import { getOrder } from '../../../services/API'
export default class List extends Component {
    state={
        orders: []
    }
    UNSAFE_componentWillMount () {
        this.getOrders();
    }
    getOrders = async () => {
        const get = await getOrder();
        this.setState({
            orders: get.data
        })
    }
    render() {
        return (
            <div>
                <Order 
                orders={this.state.orders.length > 0 && this.state.orders}
                />
            </div>
        )
    }
}
