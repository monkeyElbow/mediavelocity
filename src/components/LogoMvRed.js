import {useSpring, animated} from 'react-spring'


const LogoMvRed = () => {

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
    <g fill="none" stroke="#ae0000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="18"
     strokeDasharray="600"
    
    >

  <path d="M66.46 66.57v66.86M100 66.57v66.86"/>
  <path d="M162.69 147.22a78.34 78.34 0 1 0-29.57 23.95l.42-.2V66.57"/>
    </g>
</animated.svg>

{/* classic logo */}
{/* <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 200 200"
      overflow="visible"
      >
      <style>{".prefix__red{fill:#ae0000}"}</style>
      <path
        className="prefix__red"
        d="M172 157.7c12.6-15.9 20.1-35.9 20.1-57.7 0-51.3-41.7-93-93-93s-93 41.7-93 93 41.7 93 93 93c17.3 0 33.4-4.8 47.3-13 2.5-1.2 5.9-3.7 6.4-4.1l.2-88.3c0-17-10.5-22.9-23.6-22.9-10.2 0-17 4.5-22.3 11.9-3.5-8.9-11.7-11.9-18.1-11.9-9.6 0-17.9 4.4-22.8 11.9h-.3v-2.5c0-5.7-3.4-9.5-8.9-9.5s-8.9 3.8-8.9 9.5v52.2c0 5.1 2.1 9.5 9.5 9.5s9.5-4.4 9.5-9.5V94.8c0-8.8 6.5-14.6 13.7-14.6 7.4 0 10.4 5.4 10.4 12.2v33.9c0 5.1 2.1 9.5 9.5 9.5s9.5-4.4 9.5-9.5V94.8c0-8.8 6.5-14.6 13.7-14.6 7.4 0 10.4 5.4 10.4 12.2v75c-10.5 5.5-22.3 8.6-34.9 8.6-41.9 0-75.9-34.1-75.9-75.9 0-41.9 34.1-75.9 75.9-75.9 41.9 0 75.9 34.1 75.9 75.9 0 7.3-1.1 14.4-3 21.1v36.5z"
        />
    </svg> */}


</>

    )
}

export default LogoMvRed;