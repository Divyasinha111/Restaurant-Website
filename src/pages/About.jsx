import React from 'react';
import './About.css';
import chef13 from '../utils/img/chef13.jpg';
import chef12 from '../utils/img/chef12.jpg';
import { ImageGallery } from '../components/ImageGallery';
import { Reviews } from '../components/Reviews';

function About() {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>About Us</h1>
                </div>
            </header>

            <div className='container my-5'>
                <p>Welcome to The Royals, where passion meets flavor! We believe that the key to great dining lies in using only the finest ingredients, carefully sourced from local farms and trusted suppliers. Our menu is a celebration of fresh, high-quality produce, combined with a mix of bold flavors and innovative culinary techniques. Whether you’re enjoying a hearty breakfast, a satisfying lunch, or an indulgent dinner, every dish is prepared with love and dedication, ensuring an unforgettable dining experience.</p>
                <p>At Royals, our chefs are the heart and soul of the kitchen. Led by a team of seasoned professionals, each one brings a wealth of experience and a deep passion for culinary excellence. From mastering traditional recipes to crafting modern twists, our chefs create dishes that delight both the eyes and the taste buds. Every meal is crafted with precision and flair, using only the finest ingredients to ensure the highest quality. When you dine with us, you’re not just enjoying a meal—you’re experiencing a masterpiece.</p>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={chef13} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={chef12} className='img-fluid my-4' alt="" />
                    </div>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, esse nulla, debitis similique, ad nihil architecto maiores doloribus quis blanditiis distinctio. Praesentium, harum atque fuga nobis eius laboriosam totam consequuntur officia dolorem quo velit incidunt fugiat at maxime, molestias esse dignissimos accusantium enim debitis. Id et quidem sapiente adipisci dolor ipsa amet tempora porro atque perferendis. Libero odio, molestiae aliquam modi facere, veritatis, illo labore deserunt ducimus ipsam rem ipsum perspiciatis eveniet maiores excepturi. Architecto sit ducimus inventore officia porro vel? Accusantium recusandae nisi autem iste suscipit distinctio, libero rem.</p>
            </div>

            <div className='bg-dark text-light'>
                <ImageGallery />
            </div>

            <div className='my-5'>
                <Reviews />
            </div>
        </div>
    )
}

export default About;