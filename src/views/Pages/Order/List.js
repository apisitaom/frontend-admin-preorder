import React, { Component } from 'react'
import Order from '../../../from/order/Order'
import { getOrder } from '../../../services/API'
import { Row, Col, Input } from 'antd'
export default class List extends Component {
    state={
        orders: [],
        searchname: '',
        search: false
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
    search = e => {
        this.setState({searchname: e.target.value},()=> {
            let dataSearch
            if(this.state.searchname !== ''){
                dataSearch = this.state.orders.filter(value=> {
                    return (value.fullname.toLowerCase().indexOf(this.state.searchname.toLowerCase()) > -1)
                })
                this.setState({dataSearch: [...dataSearch],search: true})
            }else{
                this.setState({search: false})
            }
        } 
        )
    }
    render() {
        return (
            <div>
                <Row>
                    <Col offset={16}>
                        <Input 
                        style={{width: '100%', textAlign: 'center', height: '35px' }}
                        placeholder="ค้นหา/ชื่อร้านค้า ?"
                        value={this.state.searchname}
                        onChange={(e)=>this.search(e)}
                        /> 
                    </Col>
                </Row>
                <Row style={{marginTop: '5px'}}>
                    <Col>
                        <Order 
                        orders={this.state.search ? this.state.dataSearch : this.state.orders.length > 0 ? this.state.orders : []}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}
