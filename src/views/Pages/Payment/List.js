import React, { Component } from 'react'
import { Row, Col, Input } from 'antd'
import PaymentFrom from '../../../from/paymentfrom/PaymentFrom'
import PaidFrom from '../../../from/paymentfrom/PaidFrom'
import { paymentPaid, paymentCheck, paymentRole } from '../../../services/API'
export default class List extends Component {
    state = {
        paids: [],
        payments: [],
        results: [],
        searchnamepayment: '',
        search: false,
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
            payments: get.data,
            results: get.data.result
        })
    }
    showModalPayment = async (index) => {
        this.setState({
            payment: this.state.payments[index],
            visible: true
        })
    }
    showModalPaid = async (index) => {
        this.setState({
            payment: this.state.paids[index],
            visible: true
        })
    }
    onUpdatetatusPayment = async data => {
        await paymentRole(data);
        await window.location.reload();
    }
    searchPayment = e => {
        this.setState({searchnamepayment: e.target.value},()=> {
            let dataSearch
            if(this.state.searchnamepayment !== ''){
                dataSearch = this.state.payments.filter(value=> {
                    return (value.fullname.toLowerCase().indexOf(this.state.searchnamepayment.toLowerCase()) > -1)
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
                    <Col offset={4} span={8} >
                        <Input 
                        style={{width: '100%', textAlign: 'center', height: '35px' }}
                        placeholder="ค้นหา/ชื่อลูกค้า ?"
                        value={this.state.searchnamepayment}
                        onChange={(e)=>this.searchPayment(e)}
                        />
                    </Col>
                </Row>
                <Row gutter={4} style={{marginTop: '5px'}}>   
                    <Col span={12}>
                        <PaymentFrom 
                        data={this.state.search ? this.state.dataSearch : this.state.payments.length > 0 ? this.state.payments :[]}
                        showModal={this.showModalPayment}
                        payment={this.state.payment}
                        changeStatus={this.onUpdatetatusPayment}
                        />
                    </Col>
                    <Col span={12}>
                        <PaidFrom 
                        data={this.state.paids.length > 0 ? this.state.paids :[]}
                        showModal={this.showModalPaid}
                        payment={this.state.payment}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}
