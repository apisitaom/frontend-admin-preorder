import React, { Component } from 'react'
import { Card, Row, Col } from 'antd'
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
                      <h3>ยอดขายรวม</h3>
                      <h5>{this.props.totalsale} บาท</h5>
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card 
                    style={ backgroundStype2 }
                    >
                      <h3>จำนวนร้านค้าที่ร่วมรายการ</h3>
                      <h5>{this.props.totalseller} ร้านค้า</h5>
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card 
                    style={ backgroundStype3 }
                    >
                    <h3>จำนวนผู้ใช้งาน</h3>
                    <h5>{this.props.totalcustomer} ผู้ใช้</h5>
                    </Card>
                  </Col>
                </Row>
            </div>
        )
    }
}
