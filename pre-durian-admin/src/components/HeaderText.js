import React, { Component } from 'react'

export default class HeaderText extends Component {
    render() {
        const divStyle = {
            margin: '-65px 50px',
            color: 'white',
            size: 16
        }
        var currentLocation = window.location.pathname;
            if(currentLocation == '/'){
                return(<div style={divStyle}>แดชบอร์ด</div>)
            }
            else if(currentLocation == '/product'){
                return(<div style={divStyle}>สินค้าของฉัน</div>)
            }
            else if(currentLocation == '/preorder'){
                return(<div style={divStyle}>เปิดพรีออเดอร์</div>)
            }
            else if(currentLocation == '/orderlist'){
                return(<div style={divStyle}>รายการสั่ง</div>)
            }
            else if(currentLocation == '/delivery'){
                return(<div style={divStyle}>การจัดส่ง</div>)
            }
            else if(currentLocation == '/shopinfo'){
                return(<div style={divStyle}>ข้อมูลร้านค้า</div>)
            }else if(currentLocation == '/orderDetail'){
                return(<div style={divStyle}>รายการสั่ง</div>)
            }else if(currentLocation == '/addProduct'){
                return(<div style={divStyle}>เพิ่มสินค้าทดลอง</div>)
            }
    }
}
