import React from 'react'
import classes from './Header.scss'

const header = (props) => {
    let sidebarStyle = classes.header
    if(props.hover) {
        sidebarStyle = [classes.header,classes.expandSidebar].join(' ')
    }
    return (
        <div className={sidebarStyle}>
            YouKnow
        </div>
    )
}

export default header