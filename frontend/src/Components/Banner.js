import React from 'react';
import pic10 from '../img/pic10.jpeg';

class Banner extends React.Component{
       
     
    render(){
        return(
            <div id="banner">
                <div className="content">
                    <header>
                        <h1>Привет!<br />
                        Добро пожаловать </h1>
                        <p>Туда, где творят чудеса</p>
                    </header>
                    <p>Вы знаете что такое DIY? Это создание чего либо своими руками. Попробуйте себя в кулинарии, шитье, скрапбукинге и многом другом! Берите с собой детей и творите вместе. Ждем вас на следующем мастер-классе! ><br /> 
                    <br /> С любовью, <strong>mister Sky</strong>
                    </p>
                    <ul className="actions">
                        <a href="#instruction" className="button big"><li>Узнать больше</li></a>
                    </ul>
                </div>
				<span className="image object">
				    <img src={pic10} alt="" />
				</span>
            </div>
        );
    }
}
export default Banner;
