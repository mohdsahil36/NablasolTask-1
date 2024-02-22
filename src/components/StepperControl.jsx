import React from 'react';
import classes from './StepperControl.module.css';
import { ChevronLeft } from 'lucide-react';

export default function BackAndNext({ next, prev }){
    return(
    <div className={classes['nav-buttons']}>
        <button className={classes['back-btn']} onClick={prev}><ChevronLeft className={classes['left-icon']}/>Back</button>
        <button className={classes['next-btn']} onClick={next} type='submit'>Next</button>
    </div>
    )
}