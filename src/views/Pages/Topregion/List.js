import React, { Component } from 'react'
import PieChart from '../../../from/topregion/PieChart'
import { topPieChart } from '../../../services/API'
export default class List extends Component {
    state={
     topregions: [],
     ages: [],
     amountages: [],
     products: [],   
     amountproducts:[],
     type: 'year',
     province: 'กรุงเทพมหานคร'
    }
    UNSAFE_componentWillMount () {
        this.getTopRegion(this.state.type, this.state.province);
    }
    getTopRegion = async (type = this.state.type, province = this.state.province) => {
                this.setState({
                    type: type,
                    province: province
                }, () => console.log('TOP RESION => ', this.state.type, this.state.province))
                this.setState({data : {value: type}}, async () => {
                    const get = await topPieChart(this.state.data);
                    get.code === 200 && 
                this.setState({
                    topregions: get.data
                }, () => this.setState({
                ages: this.state.topregions.valueTotal_age.filter(item => {
                    if (item.province === province && typeof item.life_span !== 'undefined') {
                        return item                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                }}).map(item => item.life_span),
                amountages: this.state.topregions.valueTotal_age.filter(item => {
                    if (item.province === province) {
                        return item
                }}).map(item => item.total_customer),
                products: this.state.topregions.valueTotal_product.filter(item => {
                    if (item.province === province) {
                        return item
                }}).map(item => item.product_name),
                amountproducts: this.state.topregions.valueTotal_product.filter(item => {
                    if (item.province === province) {
                        return item
                }}).map(item => item.total_amount)
            }))
        })
    }
    render() {
        return (
            <div>
                <PieChart
                type={this.state.type}
                province={this.state.province}
                ages={this.state.ages !== undefined && this.state.ages}
                amountages={this.state.amountages !== undefined && this.state.amountages}
                products={this.state.products !== undefined && this.state.products}
                amountproducts={this.state.amountproducts !== undefined && this.state.amountproducts}
                getTopRegion={this.getTopRegion}
                />
            </div>
        )
    }
}
