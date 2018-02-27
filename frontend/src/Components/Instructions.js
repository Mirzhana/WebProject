import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

class Instructions extends React.Component{
 
    render(){
        return(
            <ScrollableAnchor id={'instruction'}><div>
				<header className="major">
                    <br/>
					<h2>Инструкция</h2>
				</header>
				<div className="features">
					
                    <article >
						<span className="icon fa-long-arrow-right"></span>
				        <div className="content">
							<a href='#classes'> <h3 >Просмотрите ближайшие классы</h3></a>
							<p>master Sky предлагает своим клиентам попробовать себя в кулинарии, скрапбукинге, леттеринге и многом другом. Просто выберете то чего желает ваша душа!</p>
						</div>
					</article> 
					<article>
						<span className="icon fa-long-arrow-down"></span>
						<div className="content">
							<h3>Выберете программу</h3>
							<p>После того как вы нашли интересный вам класс, вам нужно выбрать программу: Семейный, детский, взрослый</p>
						</div>
					</article>
										
					<article>
						<span className="icon fa-check"></span>
						<div className="content">
							<h3>Получите подтверждение</h3>
							<p>После регистрации вам на почту придет письмо с подтверждением и списком вещей, необходимых для посещения класса</p>
						</div>
					</article>
					<article>
						<span className="icon fa-long-arrow-left"></span>
						<div className="content">
							<h3>Регистрация</h3>
							<p>Заполните форму регистрации, указав всю необходимую информацию</p>
						</div>
					</article>
				</div>                
            </div></ScrollableAnchor>
            
        );
    } 
}
export default Instructions;