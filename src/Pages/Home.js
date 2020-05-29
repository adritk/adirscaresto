import React, { Component } from 'react';
import '../Css/Home.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Delivery from '../Images/delivery.svg'
import Burger from '../Images/burger.svg'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import $ from 'jquery'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import { data } from '../myData'
class Home extends Component {

    componentDidMount() {
        $("button.btnklik").click(function(){
            $("button.btnklik").css('background-color','');
            $(this).css('background-color', '#FCD561'); 
    });
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
                </div>
            </main>
        );
    }
}

export default Home;