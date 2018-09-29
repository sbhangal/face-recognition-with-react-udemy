import React from 'react';
import './facerecognition.css';


const faceRecognition = ({imageUrl, facesList}) => {
    
    if(facesList.length === 0)
    {
        facesList.push({
            topRow:0,
            rightCol:0,
            bottomRow:0,
            leftCol:0
        })
    }

    return(
        <div className = 'center ma'>
            <div className = 'absolute mt2'>
                <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto'/>
                {
                    facesList.map((number) => 
                    {
                        return(
                            <div className='bounding-box' style={{top: number['topRow'], right: number['rightCol'], bottom: number['bottomRow'], left: number['leftCol']}}>
                            </div>
                        );
                    })
                }
            </div>  
        </div>
    );
}



export default faceRecognition;