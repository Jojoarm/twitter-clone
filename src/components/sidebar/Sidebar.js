import { Avatar, IconButton } from '@material-ui/core'
// import { Checkbox, IconButton } from '@material-ui/core'
import { Assignment, BookmarkBorder, Home, MailOutline, MoreHorizOutlined, NotificationsNone, PermIdentity } from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'
import tweetIcon from '../images/tweet.PNG'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__icons'>
                <img className='twitter__logo logo' src='data:image/png;base64,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' alt='twitter logo' />            
                <div className='icon__button'>
                    <Home className='home__icon icon' />
                </div>
                <div className='icon__button'>
                    <span className='hash__icon'>#</span>
                </div>
                <div className='icon__button'>
                    <NotificationsNone className='icon' />
                </div>
                <div className='icon__button'>
                    <BookmarkBorder className='icon' />
                </div>
                <div className='icon__button'>
                    <Assignment className='icon assignment__icon' />
                </div>
                <div className='icon__button'>
                    <PermIdentity className='icon' />
                </div>
                <div className='icon__button'>
                    <MoreHorizOutlined className='icon' />
                </div>
                <img src={tweetIcon} className='logo' alt='twitter share icon' />
                
            </div>
            <div className='icon__button2'>
                <Avatar className='avatar' />
            </div>
        </div>
    )
}

export default Sidebar
