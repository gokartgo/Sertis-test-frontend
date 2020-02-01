import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Card.scss'

const card = (props) => {
    return (
        <div key={props.key} className={classes.cardContainer}>
            <div className={classes.cardHeader}>
                <p>{props.header}</p>
                <p>{props.status}</p>
            </div>
            <div className={classes.cardContent}>
                <p>{props.content}</p>
            </div>
            <button onClick={props.edit} >Edit</button>
            <button onClick={props.delete}>Delete</button>
        </div>
    )
}

export default card