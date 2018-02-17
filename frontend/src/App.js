import React, { Component } from 'react';
import logo from './logo.svg';
import pic10 from './img/pic10.jpeg';
import pic01 from './img/pic01.jpg';
import pic04 from'./img/pic04.jpg';
import {Route, NavLink, HashRouter} from "react-router-dom";
import './App.css';

class Wrapper extends React.Component{
    render(){
        return(
            <div className='column' class = "wrapper">

                            <Head />
                            <Banner />
                            <Instructions />
                            <Classes />
            </div>
        );
    }
    
}

class Head extends React.Component{
    render(){
        return(
            <div id = "header">
 			    <a href="index.html" class="logo"><strong>Mr.</strong> sky</a>
				<ul class="icons">
				    <li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
				    <li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>				
				    <li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>

                </ul>               
            </div>
        );
    }
}

class Banner extends React.Component{
    render(){
        return(
            <div id="banner">
                <div class="content">
                    <header>
                        <h1>Привет!<br />
                        Добро пожаловать </h1>
                        <p>Туда, где творят чудеса</p>
                    </header>
                    <p>Вы знаете что такое DIY? Это создание чего либо своими руками. Попробуйте себя в кулинарии, шитье, скрапбукинге и многом другом! Берите с собой детей и творите вместе. Ждем вас на следующем мастер-классе! ><br /> 
                    <br /> С любовью, <strong>mister Sky</strong>
                    </p>
                    <ul class="actions">
                        <li><a href="#instruction" class="button big">Узнать больше</a></li>
                    </ul>
                </div>
				<span class="image object">
				    <img src={pic10} alt="" />
				</span>
            </div>
        );
    }
}

class Instructions extends React.Component{
    render(){
        return(
            <div>
									<header class="major">
										<h2>Инструкция</h2>
									</header>
									<div class="features">
										<article >
											<span class="icon fa-long-arrow-right"></span>
											<div class="content">
												<h3 >Просмотрите ближайшие классы</h3>
												<p>master Sky предлагает своим клиентам попробовать себя в кулинарии, скрапбукинге, леттеринге и многом другом. Просто выберете то чего желает ваша душа!</p>
											</div>
										</article> 
										<article>
											<span class="icon fa-long-arrow-down"></span>
											<div class="content">
												<h3>Выберете программу</h3>
												<p>После того как вы нашли интересный вам класс, вам нужно выбрать программу: Семейный, детский, взрослый</p>
											</div>
										</article>
										
										<article>
											<span class="icon fa-check"></span>
											<div class="content">
												<h3>Получите подтверждение</h3>
												<p>После регистрации вам на почту придет письмо с подтверждением и списком вещей, необходимых для посещения класса</p>
											</div>
										</article>
										<article>
											<span class="icon fa-long-arrow-left"></span>
											<div class="content">
												<h3>Регистрация</h3>
												<p>Заполните форму регистрации, указав всю необходимую информацию</p>
											</div>
										</article>
									</div>                
            </div>
            
        );
    }
    
}

class Classes extends React.Component{
    render(){
        return(
            <div>
                <header class="major">
				    <h2>Ближайшие Мастер-классы</h2>
				</header>
				<div class="posts">
				    <article>
				        <a href="#" class="image"><img src={pic01} alt="" /></a>
				        <h3>Носорог из бумаги</h3>
				        <p>Мастер класс по пейперкрафту от Саи Асановой! <br/> 13 февраля 18.00</p>
				        <ul class="actions">
				            <li><a href="#" class="button">Регистрация</a></li>
				        </ul>
				    </article>
				    <article>
				        <a href="#" class="image"><img src={pic04} alt="" /></a>
				        <h3>Готовим чизкейк Oreo Brookie</h3>
				        <p>Попробуйте приготовить десерт вместе с Санатом Сапар <br/> 15 февраля 20.00</p>
				        <ul class="actions">
				            <li><a href="#" class="button">Регистрация</a></li>
                        </ul>
				    </article>
                </div>                
            </div>
        );
    }
}





export default Wrapper;
