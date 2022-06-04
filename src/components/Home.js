import React, {useState} from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';
import LOGO from '../images/LOGO.png';

function Home() {
  const [rotate, setRotate] = useState(false);
  return (
    <>
    <div className="home" >
        <motion.div 
        animate={{rotate: rotate ? 360 : 0 }}
        transition={{duration: 1 }}
        onClick={()=> {setRotate(!rotate)}}
        > 
        <img src={LOGO} />
        </motion.div>
    </div>
    <div className="headerContainer">
        <h1>Poknus Art Place</h1>
        </div>
    </>
  )
}

export default Home