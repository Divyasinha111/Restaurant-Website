import React from 'react';
import './Menu.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import BreakfastImg from '../utils/img/breakfast.jpg';
import LunchImg from '../utils/img/lunch.jpg';
import DinnerImg from '../utils/img/dinner.jpg';
import DessertImg from '../utils/img/dessert.jpg';

const breakfast = [
    {
        id: 1,
        name: 'Sandwich',
        description: 'slices cheese, other food placed between two slices of bread',
        price: '₹100',
        img: "https://i.pinimg.com/736x/dd/04/90/dd049082b917212f25de2a2ed27687b8.jpg"
    },
    {
        id: 2,
        name: 'Pancake',
        description: 'flat, circular piece of cooked batter made from milk, flour, eggs',
        price: '₹150',
        img: "https://i.pinimg.com/736x/d0/bd/dc/d0bddce4efb65033c4422ac3e92c1edf.jpg"
    },
    {
        id: 3,
        name: 'Bread Omelette',
        description: 'toasting bread with beaten eggs, onions, spices & herbs',
        price: '₹70',
        img: "https://i.pinimg.com/736x/71/97/7b/71977b0591022daf373a2c9547dd5669.jpg"
    }
];




const lunch = [
    {
        id: 1,
        name: 'Veg Thali',
        description: 'some vegetables, sour chutney, raita, pickle, some tadka, plus, ghee and spices',
        price: '₹300',
        img: "https://i.pinimg.com/736x/2c/52/86/2c5286ab81b31eaba8a85227324c4568.jpg" 
    },
    {
        id: 2,
        name: 'Chicken Biryani ',
        description: 'fluffy basmati rice & succulent pieces of chicken, spices, herbs.',
        price: '₹400',
        img: "https://i.pinimg.com/736x/2b/64/e1/2b64e15ac11687bb3074b9f7abc87edd.jpg" 
    },
    {
        id: 3,
        name: 'Paneer Tikka Masala ',
        description: 'paneer, spices, onions, tomatoes, cashews,spices,ginger paste.',
        price: '₹300',
        img: "https://i.pinimg.com/736x/ec/7b/89/ec7b89fd9bbb10b4e6b251b84c1f67a5.jpg" 
    }
];




const dinner = [
    {
        id: 1,
        name: 'Chana Puri',
        description: 'channa, spices, flour, onion, tomato',
        price: '₹150',
        img: "https://i.pinimg.com/736x/29/34/d4/2934d4f790d97c07863cb46249815f5b.jpg"
    },
    {
        id: 2,
        name: 'Daal Makhni',
        description: 'spices, butter & cream,  red kidney beans',
        price: '₹180',
        img: "https://i.pinimg.com/736x/ef/6e/1b/ef6e1b22f8de024fc8611bc407b6e761.jpg" 
    },
    {
        id: 3,
        name: 'Chole Kulche ',
        description: 'onion, garlic, tomatoes, spices, green chilli, white peas',
        price: '₹70',
        img: "https://i.pinimg.com/736x/de/72/00/de720026b920c85c9316dce2b8670977.jpg"
    }
];




const dessert = [
    {
        id: 1,
        name: 'Chocolate Cake',
        description: 'flour, baking powder, baking soda, and salt ',
        price: '₹200',
        img: "https://i.pinimg.com/736x/96/67/36/966736b0f455d221d9f3b71f14167b7e.jpg" 
    },
    {
        id: 2,
        name: 'Cinnamon Rolls',
        description: 'Flour, cinnamon, sugar, and butter',
        price: '₹150',
        img: "https://i.pinimg.com/736x/88/3d/20/883d20515cc7720de9e8d4e8c59c833f.jpg" 
    },
    {
        id: 3,
        name: 'Trifle',
        description: 'Sherry, custard, fruit, whipped cream',
        price: '₹100',
        img: "https://i.pinimg.com/736x/69/49/cc/6949ccef69e75987310cb14b22632bc3.jpg" 
    }
];


function Menu() {
    const addToCart = (item) => {

        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        
    
        const updatedCart = [...existingCart, item];
        
    
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        
        alert(`${item.name} has been added to your cart.`);
    };
    return (
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Menu</h1>
                </div>
            </header>

            <div className='breakfast my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Breakfast</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                    <div style={{"display":"flex"}}>
                            {breakfast.map((breakfast) => (
                                <div key={breakfast.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <img src={breakfast.img} alt='Breakfast' className='img-fluid' />
                                            <CardTitle className='text-center fs-3'>
                                                {breakfast.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-'>
                                                {breakfast.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {breakfast.price}
                                            </CardText>
                                        </CardBody>
                                        <button className='btn btn-success w-50 mx-auto' onClick={()=>{addToCart(breakfast)}}>Order</button>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='lunch bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Lunch</h2>
                    <div className='row'>
                        <div style={{"display":"flex"}}>
                            {lunch.map((lunch) => (
                                <div key={lunch.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                        <img src={lunch.img} alt='Breakfast' className='img-fluid' />
                                            <CardTitle className='text-center fs-3'>
                                                {lunch.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {lunch.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {lunch.price}
                                            </CardText>
                                        </CardBody>
                                        <button className='btn btn-success w-50 mx-auto' onClick={()=>{addToCart(lunch)}}>Order</button>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='dinner my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Dinner</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div style={{"display":"flex"}}>
                            {dinner.map((dinner) => (
                                <div key={dinner.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                        <img src={dinner.img} alt='Dinner.name' className='img-fluid' />
                                            <CardTitle className='text-center fs-3'>
                                                {dinner.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dinner.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dinner.price}
                                            </CardText>
                                        </CardBody>
                                        <button className='btn btn-success w-50 mx-auto' onClick={()=>{addToCart(dinner)}}>Order</button>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='dessert bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Dessert</h2>
                    <div className='row'>
                        <div style={{"display":"flex"}} >
                            {dessert.map((dessert) => (
                                <div key={dessert.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                        <img src={dessert.img} alt='Dessert.name' className='img-fluid' />
                                            <CardTitle className='text-center fs-3'>
                                                {dessert.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dessert.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dessert.price}
                                            </CardText>
                                        </CardBody>
                                        <button className='btn btn-success w-50 mx-auto' onClick={()=>{addToCart(dessert)}}>Order</button>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;
