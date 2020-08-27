import React from 'react';


import './Course.css';

const Course = (props) => {
    //console.log(props);
    const {image, name,Instructor,Fees} = props.course;
    return (
        <div className='courseName'>
            <div>
               <img className='imgs' src={image} alt=""/>
            </div>
            <div>
                <h2 className='crName'>{name}</h2>
                <br/>
                <h5>Instructor: {Instructor}</h5>
                <p>Course fee: ${Fees}</p>
                {/* bootstrap button has been used here */
                <button type="button" class="btn btn-primary btn-lg" 
                 onClick={()=> props.handleAddCourse(props.course)}
                >Enroll now</button>}
            </div>
            
            
        </div>
    );
};

export default Course;