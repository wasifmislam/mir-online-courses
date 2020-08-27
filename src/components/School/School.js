import React from 'react';

import fakeData from '../../fakeData/Courses'
import { useState } from 'react';
import './School.css';
import Course from '../course/Course';
import Cart from '../cart/Cart';


const School = () => {
    const first10 = fakeData.slice(0,15);
    const [courses, setCourses] = useState(first10);
    const [cart, setCart] = useState([]);

    // console.log(fakeData)

    const handleAddCourse = (course) => {
        console.log('pd added', course);
        const newCart = [...cart, course];
        setCart(newCart);
    }

    
    return (
        <div className='class-container'>
            <div className="course-container">
            
                {
                  courses.map(cr =><Course
                     handleAddCourse= {handleAddCourse}
                     course={cr}
                     ></Course>)  
                }
            

            </div>
            
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default School;