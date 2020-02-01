import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Menu.scss'

const menu = (props) => {
    return (
        <div className={classes.menuContainer}>
            <NavLink exact to="/" activeClassName={classes.active}>Show</NavLink>
            <NavLink to="/add-card" activeClassName={classes.active}>Add</NavLink>
        </div>
    )
}

export default menu