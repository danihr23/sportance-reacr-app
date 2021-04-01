import React from 'react'
import Nav from '../../containers/LoginNav/nav'
import Background from './background.jpg'
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SportsVolleyballIcon from '@material-ui/icons/SportsVolleyball';
import SportsTennisIcon from '@material-ui/icons/SportsTennis';
import SportsFootballIcon from '@material-ui/icons/SportsFootball';
import SportsIcon from '@material-ui/icons/Sports';
import './logInHome.css'
import { Link, NavLink } from 'react-router-dom';

export default function LogInHome() {
    return (
        <div className="logInHome" style={{
            backgroundImage: `url("background.jpg")`
        }}>
            <Nav />

            <section className="category">
                <article className="sport">
                    <Link  to="/sponrance/basketball"style={{ textDecoration: 'none',color:'#35456D' }} >
                    <div className="sport-one"  >
                        <p className='sport-icon' >
                            <SportsBasketballIcon />
                        </p>
                        <p>Basketboll</p>
                    </div>
                    </Link>
                   
                    <Link  to="/sponrance/football" style={{ textDecoration: 'none',color:'#35456D' }}>
                    <div className="sport-two">
                        <p className='sport-icon'>
                            <SportsSoccerIcon />
                        </p>
                        <p>Football</p>
                    </div>
                   </Link>
                </article>
                <article className="sport">
                <Link to="/sponrance/volleyball" style={{ textDecoration: 'none',color:'#35456D' }}>
                    <div className="sport-one">
                        <p className='sport-icon'>
                            <SportsVolleyballIcon />
                        </p>
                        <p>Volleyball</p>
                    </div>
                    </Link>
                    <Link  to="/sponrance/tennis" style={{ textDecoration: 'none',color:'#35456D' }}>
                    <div className="sport-two">
                        <p className='sport-icon'>
                            <SportsTennisIcon />
                        </p>
                        <p>Tennis</p>
                    </div>
                    </Link>
                </article>
                <article className="sport">
                <Link  to="/sponrance/NFL" style={{ textDecoration: 'none',color:'#35456D' }} >
                    <div className="sport-one">
                        <p className='sport-icon'>
                            <SportsFootballIcon />
                        </p>
                        <p>NFL</p>
                    </div>
                    </Link>
                    <Link to="/sponrance/other" style={{ textDecoration: 'none',color:'#35456D' }} >
                    <div className="sport-two">
                        <p className='sport-icon'>
                            <SportsIcon />
                        </p>
                        <p>Other</p>
                    </div>
                    </Link>
                </article>
            </section>

           
        </div>
    )
}
