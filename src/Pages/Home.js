import React, { Component } from 'react';
import '../Css/Home.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Delivery from '../Images/delivery.svg'
import Burger from '../Images/burger.svg'

import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import CafePizza from '../Images/cafepizza.jpg'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import $ from 'jquery'
import { data, cafe, order } from '../myData'
import StarBorderIcon from '@material-ui/icons/StarBorder';
class Home extends Component {

    componentDidMount() {
        $("button.btnklik").click(function () {
            $("button.btnklik").css('background-color', '');
            $(this).css('background-color', '#FCD561');
        });
    }

    state = {
        isOpen: false,
        totalPrice: 170000,
        jumlah: 1
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    tambah = () => {
        this.setState({ jumlah: this.state.jumlah + 1 })
    }

    kurang = () => {
        if (this.state.jumlah < 2) {
            this.setState({
                jumlah: 1
            })
        } else {
            this.setState({
                jumlah: this.state.jumlah - 1
            })
        }
    }

    renderTotal = () => {
        let jumlah = this.state.jumlah
        let price = this.state.totalPrice
        let total = 0
        total += jumlah * price
        return (
            total.toLocaleString()
        )
    }

    render() {
        return (
            <main>
                <div id="content">
                    <section id="first-section" >
                        <MenuIcon />
                        <strong className="title-name">Adirsca</strong>
                        <div className="search-container">
                            <button type="submit"> <SearchIcon /></button>
                            <input type="text" placeholder="Search.." name="search" />
                        </div>
                    </section>

                    <section id="second-section">
                        <img src={Delivery} style={{ height: '100%', width: '40%' }} alt="notfound" />
                        <div className="delivery-text">
                            <p>$0 delivery for 30 days!</p>
                            <p style={{ color: '#BBB6AE', fontSize: 10 }}>$0 delivery fee orders over $10 for 30 </p>
                        </div>
                    </section>

                    <section id="third-section">
                        <p>Restaurants  <img className="imgburger" src={Burger} /><button className="button button5" disabled><AccessTimeIcon />&nbsp; <span style={{ fontSize: 10 }}>Delivery : Now </span></button></p>
                        <div className="flex-container">
                            {
                                data.map(val => {
                                    return (
                                        <button type="submit" className="btnklik">
                                            <div className="bulet">
                                                <img src={val.src} style={{ width: 35 }} />
                                            </div>
                                            <span style={{ fontSize: 12 }}>{val.name}</span>
                                        </button>

                                    )
                                })
                            }
                        </div>
                    </section>

                    <section id="four-section">
                        <div className="menu-container">
                            {
                                cafe.map(val => {
                                    return (
                                        <div className="box-menu">
                                            <img src={val.src} className="card-menu" />
                                            <div className="textOnCard">{val.distance}<span style={{ fontSize: 10 }}>Min</span></div>
                                            <p style={{ fontSize: 18, fontWeight: 500, margin: 10 }}>{val.name}</p>
                                            <div style={{ margin: 5 }}>
                                                <StarBorderIcon /><span style={{ paddingRight: 10, fontWeight: 400 }}>{val.rating}</span><span style={{ paddingRight: 10, color: '#A3A3A3' }}>{val.location}</span><span style={{ paddingRight: 10, color: '#A3A3A3' }}  >{val.category}</span>
                                            </div>
                                        </div>

                                    )
                                })
                            }

                        </div>
                    </section>
                </div>

                <aside>

                    <MDBNavbar color="#FFF7ED" dark expand="md">
                        <MDBNavbarToggler onClick={this.toggleCollapse} />
                        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                            <MDBNavbarNav right>
                                <MDBNavItem >
                                    <MDBDropdown basic>
                                        <MDBDropdownToggle nav>
                                            <AccountCircleIcon style={{ fontSize: 36, color: 'grey' }} />
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default">
                                            <MDBDropdownItem href="#!">Login</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Register</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                                <MDBNavbarBrand style={{ paddingTop: 10, marginRight: '55px' }}>
                                    <div className="total-item">3</div>
                                </MDBNavbarBrand>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>

                    <div className="box-order">
                        <p>Menteng Sreet <span style={{ marginLeft: 115 }}>Edit</span></p>
                        <button className="button-small" disabled><AccessTimeIcon />&nbsp;35 min</button><span>Choose Time</span>
                    </div>

                    {
                        order.map(val => {
                            return (
                                <div className="list-menu">
                                    <img className="order-menu" src={val.src} />
                                    <span style={{ marginLeft: 25, fontWeight: 500 }}>{val.qty}</span>
                                    <span style={{ marginLeft: 25, fontWeight: 500 }}>{val.name}</span>
                                    <span style={{ marginLeft: 40, color: '#BBB6AE', fontSize: 12 }}>{val.price}</span>
                                </div>

                            )
                        })
                    }

                    <div className="list-menu">
                    <button className="button-delivery" disabled><AirportShuttleIcon fontSize="large" /></button>
                        <span style={{ marginLeft: 25, fontWeight: 500 }} className="delivery">Delivery</span>
                      
                        <span style={{ marginLeft: 40, color: '#BBB6AE', fontSize: 12 }}>IDR 0</span>
                    </div>

                    {/* <div className="list-menu">
                        <button className="button-delivery" disabled><AirportShuttleIcon fontSize="large" /></button>
                        <span className="delivery" style={{ marginLeft: 40, fontWeight: 500 }}>Delivery</span>
                        <span style={{ marginLeft: 100, color: '#BBB6AE', fontSize: 12 }}>IDR 0</span>
                    </div> */}

                    <div className="total-payment">
                        <span className="total">Total :<span style={{ marginLeft: 10 }}>IDR {this.renderTotal()}</span></span>
                        <hr />
                    </div>

                    <span style={{ marginLeft: 10, fontWeight: 500, fontSize: 14 }}>Persons</span>
                    <div className="btnChange">
                        <button onClick={this.kurang} type="button" className="btn btn-outline-grey  btnTambah">-</button>
                        <span style={{ paddingRight: 10, fontWeight: 500 }}>{this.state.jumlah}</span>
                        <button onClick={this.tambah} type="button" className="btn btn-outline-grey btn-rounded waves-effect btnTambah">+</button>
                        <button type="submit" className="button-checkout"><span style={{ marginRight: 50 }}>Checkout</span><ArrowForwardIcon /></button>
                    </div>
                </aside>
            </main>
        );
    }
}

export default Home;