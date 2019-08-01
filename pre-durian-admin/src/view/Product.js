import React, { Component } from 'react'
import { Button, Input,Table } from 'antd';
import { Link } from "react-router";


export default class Product extends Component {
    
    render() {
        const { Column } = Table;

        return (
            
            <div>
                ราคา
                <Input
                    placeholder="0"
                    type="number"
                    style={{ width: '10%', marginRight: '1%', marginLeft: '1%' }}
                />
                ถึง
                 <Input
                    placeholder="0"
                    type="number"
                    style={{ width: '10%', marginRight: '2%', marginLeft: '1%' }}
                />


                <Button type="primary" style={{ float: 'right' }}>ค้นหา</Button>
                <Input
                    placeholder="ค้นหา"
                    type="text"
                    style={{ width: '30%', marginRight: '1%', float: 'right' }}
                />

                <br />
                <br />
                <br />
                <Link to="/addProduct">
                <Button type="primary" style={{ float: 'right' }}>เพิ่มสินค้า</Button>
                </Link>
                <br />
                <br />
                <br />
                <Table>
                    <Column align="center" title="รหัสสินค้า" dataIndex="productID" key="productID" />
                    <Column align="center" title="ชื่อสินค้า" dataIndex="productName" key="productName" />
                    <Column align="center" title="ราคา" dataIndex="productPrice" key="productPrice" />                   
                </Table>

            </div>
        )
    }
}
