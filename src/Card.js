import React from 'react'

const errorVar = false; //this variable has been added only to show what happens when the app encounter error so we have to take this
                         //in consideration and log a error page to the user 

const Card = (props) => { //destroctory is to type const Card = ({name, email, id}) => {
    if (errorVar ){
        throw new Error ('Nooooooo!!!!');
    }
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' >
            <img alt='robotPhoto' src={`https://robohash.org/khaoulita${props.id}?set=set2`} style= {{width:'200px', height:'200px'}} />
            <div >
                <h2>{props.name}</h2> 
                <p>{props.email}</p> 
            </div>
        </div>
    )
}
 //and instead of writing <h2> {props.name}</h2> ===== <h2> {name} </h2> using destroctory method
export default Card; 