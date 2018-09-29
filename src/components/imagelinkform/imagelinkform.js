import React from 'react';
import './imagelinkform.css';


const imagelinkform = ({onInputChange, onButtonSubmit}) => {
    return(
        <div>
            <p className='f3'>
                {'This application uses the Clarifai API to detect faces in your pictures.\n Give it a try by entering a url of an image.'}
            </p>
            <p className='f4'>
                {'Example Input - https://images.pottermore.com/bxd3o8b291gf/2NpnaJstW8SyEIQcMAqAUI/d47e118b3142f6d82a213625359192c7/Snitch_WB_F1_HarryPotterHoldingTheSnitch_Still_100615_Land.jpg?w=601&h=339&fit=thumb&f=center&q=85'}
            </p>
            <div className= 'center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                        <button 
                            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                            onClick={onButtonSubmit}
                            >Submit Image URL
                        </button>
                </div>
            </div>
        </div>
        
    );
}

export default imagelinkform;