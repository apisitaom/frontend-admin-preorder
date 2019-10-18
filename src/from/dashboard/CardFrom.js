import React, { Component } from 'react'
import { Card, Row, Col, Statistic, Icon } from 'antd'
export default class CardFrom extends Component {
    render() {
        const backgroundStype1 ={
            background: '#FF2442',
            textAlign: 'center',
            borderRadius: 10,
        }
        const backgroundStype2 ={
            background: '#5EC440',
            textAlign: 'center',
            borderRadius: 10,
        }
        const backgroundStype3 ={
            background: '#558CD4',
            textAlign: 'center',
            borderRadius: 10,
        }
        return (
            <div style={{ padding: '30px' }}>
                <Row gutter={16}>
                  <Col span={8}>
                    <Card 
                    style={ backgroundStype1 }
                    >
                      <h3 style={{color:'white'}}>ยอดขายรวม</h3>
                      <Statistic 
                      valueStyle={{color: 'white'}} 
                      value={this.props.totalsale} 
                      prefix={<Icon 
                        style={{ margin: '-22px 0px 0px -25px', position: 'absolute'}} type="like" />} />
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card 
                    style={ backgroundStype2 }
                    >
                      <h3 style={{color:'white'}}>จำนวนร้านค้าที่ร่วมรายการ</h3>
                      <h5 style={{color:'white'}}>{this.props.totalseller} ร้านค้า</h5>
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card 
                    style={ backgroundStype3 }
                    >
                    <h3 style={{color:'white'}}>จำนวนผู้ใช้งาน</h3>
                    <h5 style={{color:'white'}}>{this.props.totalcustomer} ผู้ใช้</h5>
                    </Card>
                  </Col>
                </Row>
            </div>
        )
    }
}
