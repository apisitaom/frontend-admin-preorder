import React, { Component } from 'react'
import PieChart from '../../../from/topregion/PieChart'
export default class List extends Component {
    state={
     topregions: []   
    }
    UNSAFE_componentWillMount () {

    }
    getTopRegion = async () => {

    }
    render() {
        console.log('TOP REGION NOT DASHBOARD : ', this.state);
        return (
            <div>
                <PieChart
                
                />
            </div>
        )
    }
}
