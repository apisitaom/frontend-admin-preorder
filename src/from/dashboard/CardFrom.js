import React, { Component } from 'react'
import { Card, Row, Col } from 'antd'
export default class CardFrom extends Component {
    render() {
        const backgroundStype1 ={
            background: '#FF2442',
        }
        const backgroundStype2 ={
            background: '#5EC440'
        }
        const backgroundStype3 ={
            background: '#558CD4'
        }
        return (
            <div style={{ padding: '30px' }}>
                <Row gutter={16}>
                  <Col span={8}>
                    <Card 
                    style={ backgroundStype1 }
                    >
                      <h3>ยอดขายรวม</h3>
                      <h5>120,000 บาท</h5>
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card 
                    style={ backgroundStype2 }
                    >
                      <h3>จำนวนร้านค้าที่ร่วมรายการ</h3>
                      <h5>50,001 ร้านค้า</h5>
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card 
                    style={ backgroundStype3 }
                    >
                    <h3>จำนวนผู้ใช้งาน</h3>
                    <h5>650,150 ผู้ใช้</h5>
                    </Card>
                  </Col>
                </Row>
            </div>
        )
    }
}
