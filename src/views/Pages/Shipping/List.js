import React, { Component } from 'react'
import { Row, Col, Input } from 'antd'
import ShippingFrom from '../../../from/shippingfrom/ShippingFrom'
import { shippigGet } from '../../../services/API'
export default class List extends Component {
    state = {
        shippings: [],
        searchname: '',
        search: false
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
        this.setState({
            shipping: this.state.shippings[index],
            visible: true
        })
    }
    search = e => {
        this.setState({searchname: e.target.value},()=> {
            let dataSearch
            if(this.state.searchname !== ''){
                dataSearch = this.state.shippings.filter(value=> {
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
                        placeholder="ค้นหา/ชื่อลูกค้า ?"
                        value={this.state.searchname}
                        onChange={(e)=>this.search(e)}
                        />
                    </Col>
                </Row>
                <Row style={{marginTop: '5px'}}>
                    <Col>
                    <ShippingFrom 
                    status={this.setState.status = "shipping"}
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