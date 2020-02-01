import React,{Component} from 'react';

import classes from './Sidebar.scss';
import Header from './Header/Header';
import SidebarItems from './SidebarItems/SidebarItems'

class Sidebar extends Component {

    state = {
        hover: false
    }

    render() {
        const {
            hover
        } = this.state
        let sidebarStyle = classes.sidebarContainer
        if(hover) {
            sidebarStyle = [classes.sidebarContainer,classes.expandSidebar].join(' ')
        }
        return (
            <div className={sidebarStyle}>
                <Header hover={hover}/>
                <nav
                    onMouseOver={() => {
                        this.setState({hover: true})
                    }}
                    onMouseLeave={() => {
                        this.setState({hover: false})
                    }}>
                    <SidebarItems hover={hover}/>
                </nav>
            </div>
        );
    }
}

export default Sidebar;