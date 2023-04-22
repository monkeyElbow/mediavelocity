import {useSpring, animated} from 'react-spring'
import { Container } from 'react-bootstrap'
import { useState } from 'react'


export default function HomeSplash() {
    const [height] = useState('70vh');
    
    return (
        <>
    <Container style={{height}} fluid className="bg-dark d-flex flex-column align-items-center justify-content-center text-white">




{/* <MvWireLogo /> */}
<div className="d-flex justify-items-start">

<h5 className="text-uppercase fs-6 lead">
    you found your solution
</h5>

</div>
    </Container>


        </>
    )
}


const MvWireLogo = () => {
                
            const props = useSpring({
                config: {
                    duration: 650,
                    mass: .125,
                    bounce: 20,
                    tension: 280,
                    friction: 20,
                },
                from: {strokeDashoffset: -600, opacity: 0},
                to: [
                    {strokeDashoffset: 0, opacity: 1},
                    // {strokeDashoffset: 50, opacity: 1},
                    // {strokeDashoffset: 0, opacity: 1},
                ],
                delay: 700,
            })
                        
            return(
                <div className="d-flex flex-column align-items-center">
                   
    <div
    className="m-3"
    style={{
    // position:"relative", 
    // backgroundColor:"#666", 
    width:"100px", 
    height:"100px"
}}>
<animated.svg 
style={props}
viewBox="0 0 200 200">
     <g 
     fill="none" 
     stroke="#fff" 
     strokeLinecap="round" 
     strokeMiterlimit="10" 
     strokeWidth="16"
     strokeDasharray="600"
     // strokeDashoffset="600"
     >

  <path d="M66.46 66.57v66.86"/>
  <path d="M100 66.57v66.86"/>
  <path d="M162.69 147.22a78.34 78.34 0 1 0-29.57 23.95l.42-.2V66.57"/>

     </g>
</animated.svg>
</div>  

<animated.h2 style={props}>mediavelocity</animated.h2>
<animated.div className="mt-5" 
style={props}>
    brand design . photography . web development
    </animated.div>

         </div>


    )
}

