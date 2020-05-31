// import FastfoodIcon from '@material-ui/icons/Fastfood';
import Menu from '../src/Images/menu.svg'
import Pizza from '../src/Images/pizza.svg'
import Asian from '../src/Images/asian.svg'
import Hamburger from '../src/Images/hamburger.svg'
import Bbq from '../src/Images/bbq.svg'
import Dessert from '../src/Images/dessert.svg'
import Thai from '../src/Images/thai.svg'
import Sushi from '../src/Images/sushi.svg'

import CafePizza from '../src/Images/cafepizza.jpg'
import CafePancake from '../src/Images/menupancake.jpg'
import CafeSushi from '../src/Images/menusushi.jpg'

import Spageti from '../src/Images/spageti.jpg'
import CocaCola from '../src/Images/cocacola.jpg'
import Sausage from '../src/Images/sausage.jpg'


export const data = [
    {   
        id: 1,
        name: "All",
        src: Menu
    },
    {
        id: 2,
        name: "Pizza",
        src: Pizza
    },
    {
        id: 3,
        name: "Asian",
        src: Asian
    },
    {
        id: 4,
        name: "Burgers",
        src: Hamburger
    },
    {
        id: 5,
        name: "Barbeque",
        src: Bbq
    },
    {
        id: 6,
        name: "Dessert",
        src: Dessert
    },
    {
        id: 7,
        name: "Thai",
        src: Thai
    },
    {
        id: 8,
        name: "Sushi",
        src: Sushi
    }
]

export const cafe= [
    {
        name: "Bagels",
        src: Spageti,
        rating: '4.7',
        location: 'Jakarta',
        category: 'Pizza',
        distance: '20-30'
    },
    {
        name: "The Estaminet",
        src: CafePancake,
        rating: "4.5",
        location: 'Jakarta',
        category: 'Dessert',
        distance: '30-40'
    },
    {
        name: "The Estaminet",
        src: CafeSushi,
        rating: "4.6",
        location: 'Jakarta',
        category: 'Sushi',
        distance: '40-50'
    }
]

export const order = [
    {
        qty: '1 x',
        name: 'Pizza Beef',
        price: 'IDR 90.000',
        src: CafePizza
    },
    {
        qty: '1 x',
        name: 'Bratwurst      ',
        price: 'IDR 60.000',
        src: Sausage
    },
    {
        qty: '1 x',
        name: 'Coca Cola',
        price: 'IDR 20.000',
        src: CocaCola
    }
]