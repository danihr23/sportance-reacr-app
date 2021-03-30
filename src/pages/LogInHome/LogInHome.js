import React from 'react'
import Nav from '../../containers/nav'
import Background from './background.jpg'
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SportsVolleyballIcon from '@material-ui/icons/SportsVolleyball';
import SportsTennisIcon from '@material-ui/icons/SportsTennis';
import SportsFootballIcon from '@material-ui/icons/SportsFootball';
import SportsIcon from '@material-ui/icons/Sports';
import './logInHome.css'
import { Link } from 'react-router-dom';

export default function LogInHome() {
    return (
        <div className="logInHome" style={{
            backgroundImage: `url("background.jpg")`
        }}>
            <Nav />

            <section className="category">
                <article className="sport">
                    <Link to="/sponrance/category/bassketball">
                    <div className="sport-one"  >
                        <p className='sport-icon' >
                            <SportsBasketballIcon />
                        </p>
                        <p>Basketboll</p>
                    </div>
                    </Link>
                   
                    <div className="sport-two">
                        <p className='sport-icon'>
                            <SportsSoccerIcon />
                        </p>
                        <p>Football</p>
                    </div>
                </article>
                <article className="sport">
                    <div className="sport-one">
                        <p className='sport-icon'>
                            <SportsVolleyballIcon />
                        </p>
                        <p>Volleyball</p>
                    </div>
                    <div className="sport-two">
                        <p className='sport-icon'>
                            <SportsTennisIcon />
                        </p>
                        <p>Tennis</p>
                    </div>
                </article>
                <article className="sport">
                    <div className="sport-one">
                        <p className='sport-icon'>
                            <SportsFootballIcon />
                        </p>
                        <p>NFL</p>
                    </div>
                    <div className="sport-two">
                        <p className='sport-icon'>
                            <SportsIcon />
                        </p>
                        <p>Other</p>
                    </div>
                </article>
            </section>
        </div>
    )
}
