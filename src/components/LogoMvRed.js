import {useSpring, animated} from 'react-spring'


const LogoMvRed = ({color}) => {

    const props = useSpring({
        config: {
            duration: 850,
            mass: .125,
            bounce: 10,
            tension: 280,
            friction: 120,
        },
        from: {strokeDashoffset: -600, opacity: 0},
        to: {strokeDashoffset: 0, opacity: 1},
        delay: 500,
       
    })

    return(
<>
<animated.svg style={props} viewBox="0 0 200 200">
    <g fill="none" 
    // stroke="#ae0000" 
    stroke={color} strokeLinecap="round" strokeMiterlimit="10" strokeWidth="13"
     strokeDasharray="600"
    
    >

  <path d="M66.46 66.57v66.86M100 66.57v66.86"/>
  <path d="M162.69 147.22a78.34 78.34 0 1 0-29.57 23.95l.42-.2V66.57"/>
    </g>
</animated.svg>

</>

    )
}

export default LogoMvRed;