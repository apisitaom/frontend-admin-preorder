import React, { Component } from 'react'
import { Row, Col,Table ,Select,Button} from 'antd';
import { Link } from "react-router";
import './../App.css';


const { Option } = Select;

export default class OrderDetail extends Component {
    render() {
        const { Column } = Table;
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <Col span={6}>
                            รหัสรายการ
                        </Col>
                        <Col span={6}>
                            <p>(รหัส)</p>
                        </Col>
                        <br />
                        <br />
                        <Col span={6}>
                            ชื่อลูกค้า
                        </Col>
                        <Col span={6}>
                            <p>(ชื่อลูกค้า)</p>
                        </Col>
                        <br />
                        <br />
                        <Col span={6}>
                            วันที่สั่ง
                        </Col>
                        <Col span={6}>
                            <p>(วันที่สั่ง)</p>
                        </Col>
                        <br />
                        <br />

                    </Col>
                    <Col span={12}>
                        <Col span={6}>
                            ที่อยู่
                        </Col>
                        <Col span={6}>
                            <p>(ที่อยู่)</p>
                        </Col>
                    </Col>
                </Row>
                <Table >
                    <Column align="center" title="ชื่อสินค้า" dataIndex="proName" key="proName" />
                    <Column align="center" title="ตัวเลือกสินค้า" dataIndex="optionName" key="optionName" />
                    <Column align="center" title="ราคา/หน่วย" dataIndex="price" key="price" />  
                    <Column align="center" title="จำนวน" dataIndex="Amount" key="Amount" />                   
                    <Column align="center" title="ราคารวม" dataIndex="Total" key="Total" />                                    
                </Table>
                <br />
                <br />
                <br />
                <Row >
                    <Col span={12} >
                    สถานะการโอน <Select 
                                        placeholder="เลือกสถานะการโอน"
                                        style={{ width: '30%', marginLeft: '1%', }}>
                        <Option value="ex1">Ex1</Option>
                        <Option value="ex2">Ex2</Option>
                    </Select>
                    <br/>
                    <br/>
                    <Link >ดูสถานะการโอน</Link>
                    </Col>
                    <Col span={12} type="flex" justify="end">
           
                        <Col span={8} align="center">
                            ราคารวม
                            <br/>
                            (รวมภาษีมูลค่าเพิ่ม)
                        </Col>
                        <Col span={8} className="font-important" align="center">
                            <p>(จำนวนเงิน)</p>
                        </Col>
                        <Col span={8} align="center">
                            <p>บาท</p>
                        </Col>
                        
                    </Col>
                </Row>
                <br/>
                <br/>
                <div className="center-item">
                <Button type="primary"  style={{width:'10%' }}>บันทึก</Button>
                </div>

            </div>
        )
    }
}
