import React from "react";
import { Transition } from 'react-transition-group';
import { motion, useMotionValue, useTransform } from "framer-motion"
import { ReactComponent as Looool } from '../../svgImages/Group 1.svg'
import './index.css'



export default function LoadingPage () {
    const xInput = [-100, 0, 100];
    const pathVariant = {
        hidden: {
            // opacity: 0,
            pathLength: 0,

        },
        visible: {
            // opacity: 1,
            pathLength: 1,
            transition: {
                duration:2,
                ease: 'easeInOut'
            }
        }
    }
    const black = "black"
    const x = useMotionValue(0)
    const tickPath=useTransform(x, [10, 100], [0, 1]);
    const color = useTransform(x, xInput, [
        "rgb(211, 9, 225)",
        "rgb(68, 0, 255)",
        "rgb(3, 209, 0)"
    ]);
    return(
        <>




            <motion.svg className='loader' width="86" height="99" viewBox="0 0 86 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    variants={pathVariant}
                    fill='none'
                    initial='hidden'
                    animate='visible'
                    d="M2 25.543L42.7042 2L84 25.8979V73.407L42.9408 97L2 72.3387V24.543Z"
                    stroke={black}
                    // strokeDasharray="0 1"
                    strokeWidth="4"/>
                <div className="nameLitre">
                    E
                </div>
            </motion.svg>




        </>
    )
}