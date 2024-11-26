
import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

function ViewCart() {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
        calculateTotal(storedCart);
    }, []);

    const calculateTotal = (cart) => {
        const total = cart.reduce((sum, item) => {
            const price = parseFloat(item.price.replace(/[^\d.]/g, "")); // Remove non-numeric characters
            return sum + (price || 0); // Add the parsed price or 0 if parsing fails
        }, 0);
        setTotalPrice(total.toFixed(2)); // Format to 2 decimal places
    };

    const removeItem = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        calculateTotal(updatedCart);
    };

    const handleCheckout = () => {
        alert("Proceeding to checkout...");
    };

    return (
        <div className="view-cart-page bg-light py-5">
            <div className="container">
                <h1 className="text-center text-success mb-4">Your Cart</h1>

                {cart.length > 0 ? (
                    <>
                        <div className="row g-4">
                            {cart.map((item, index) => (
                                <div key={index} className="col-md-6 col-lg-4">
                                    <Card className="shadow-sm">
                                        <CardBody>
                                            <div className="d-flex justify-content-center">
                                                <img 
                                                    src={item.img || "https://via.placeholder.com/150"} 
                                                    alt={item.name} 
                                                    className="img-fluid mb-3"
                                                    style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} 
                                                />
                                            </div>
                                            <CardTitle className="fs-4 text-center">{item.name}</CardTitle>
                                            <CardText className="text-muted text-center">
                                                {item.description}
                                            </CardText>
                                            <CardText className="text-center fs-5 fw-bold text-success">
                                                ₹{item.price}
                                            </CardText>
                                            <button
                                                className="btn btn-danger w-100"
                                                onClick={() => removeItem(index)}
                                            >
                                                Remove
                                            </button>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5">
                            <Card className="shadow">
                                <CardBody className="d-flex justify-content-between align-items-center">
                                    <h3 className="text-success">Total:</h3>
                                    <h3 className="text-dark">₹{totalPrice}</h3>
                                    <button 
                                        className="btn btn-success btn-lg"
                                        onClick={handleCheckout}
                                    >
                                        Proceed to Checkout
                                    </button>
                                </CardBody>
                            </Card>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-5">
                        <h2 className="text-secondary">Your cart is empty!</h2>
                        <p className="text-muted">Add items to your cart to view them here.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ViewCart;

