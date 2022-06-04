import React, {useState} from 'react'
import kor1 from '../images/banner1.png'
import { motion } from 'framer-motion'
import '../styles/Manga.css'
import {Link} from 'react-router-dom'

function Manga() {
    const [rotate, setRotate] = useState(false);
  return (
    <div className="mangaContainer">
        <Link to='/manga/:id'>
         <motion.div 
        animate={{rotate: rotate ? 360 : 0 }}
        transition={{duration: 1 }}
        onClick={()=> {setRotate(!rotate)}}
        > 
        <img src={kor1}/>
        </motion.div>
        </Link>
    </div>
  )
}

export default Manga