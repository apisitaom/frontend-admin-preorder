import React, { Component } from 'react'
import { Row, Col, Divider, Table } from 'antd'
export default class Shipping extends Component {
    render() {
        const columns = [
            {
                title: '#',
                dataIndex: 'key',
                key: 'key',
                width: '5%',
                render: (text, record, index) => (
                    <span key={index}>
                        {index + 1}
                    </span>
                )
            },
            {
                title: 'ชื่อสินค้า',
                dataIndex: 'proname',
                key: 'proname',
            },
            {
                title: 'รายละเอียดสินค้า',
                dataIndex: 'prodetail',
                key: 'prodetail',
            },
            {
                title: 'ราคา',
                dataIndex: 'price',
                key: 'price',
            },
            {
                title: 'จำนวน',
                dataIndex: 'amounts',
                key: 'amounts',
            },
            {
                title: 'ผู้ขาย',
                dataIndex: 'sellername',
                key: 'sellername',
            }
        ]
        return (
            <div>
            <Divider orientation="left">วันที่ส่ง</Divider>
                <Row span={24} style={{marginBottom:'1%'}}>
                    <Col span={6}><b>วันที่สั่ง :</b></Col>
                    <Col span={18}>{this.props.shipping.createdate}</Col>
                </Row>
            <Divider orientation="left">ผู้สั่ง</Divider>
                <Row span={24} style={{marginBottom:'1%'}}>
                    <Col span={6}><b>ชื่อ :</b></Col>
                    <Col span={18}>{this.props.shipping.fullname}</Col>
                </Row>
            <Divider orientation="left">การรายที่สั่ง</Divider>
                <Col span={6}><b>ราคารวม :</b></Col>
                <Col span={18}><h3>{this.props.shipping.result.length > 0 && this.props.shipping.result[0].totalprice} บาท</h3></Col>
                <Col span={6}><b>เหลือ :</b></Col>
                <Col span={18}><h3>{this.props.shipping.result.length > 0 && this.props.shipping.result[0].totalproduct} ชิ้น</h3></Col> 
                <Row span={24} style={{marginBottom:'1%'}}>
                    <Table
                    columns={columns} 
                    dataSource={this.props.shipping.result}
                    rowKey={(row, index)=> index}
                    />
                </Row>
            </div>
        )
    }
}
