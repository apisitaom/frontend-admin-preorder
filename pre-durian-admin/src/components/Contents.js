import React, { Component } from 'react'
import Product from './../view/Product'
import Dashboard from './../view/Dashboard'
import PreOrder from './../view/PreOrder'
import OrderList from './../view/OrderList'
import Delivery from './../view/Delivery'
import ShopInfo from './../view/ShopInfo'
import OrderDetail from '../view/OrderDetail'
import AddProduct from '../view/AddProduct';

export default class Content extends Component {

    render() {
        var currentLocation = window.location.pathname;
            if(currentLocation == '/'){
                return(<div><Dashboard/></div>)
            }
            else if(currentLocation == '/product'){
                return(<div><Product/></div>)
            }
            else if(currentLocation == '/preorder'){
                return(<div><PreOrder/></div>)
            }
            else if(currentLocation == '/orderlist'){
                return(<div><OrderList/></div>)
            }
            else if(currentLocation == '/delivery'){
                return(<div><Delivery/></div>)
            }
            else if(currentLocation == '/shopinfo'){
                return(<div><ShopInfo/></div>)
            }else if(currentLocation == '/orderDetail'){
                return(<div><OrderDetail/></div>)
            }else if(currentLocation == '/addProduct'){
                return(<div><AddProduct/></div>)
            }
    }
}
