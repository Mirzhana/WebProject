import React from 'react';

import pic01 from '../img/pic01.jpg';
import pic02 from '../img/pic02.JPG';
import pic03 from '../img/pic03.jpg';
import pic04 from'../img/pic04.jpg';
import ScrollableAnchor from 'react-scrollable-anchor';
import ToggleableRegForm  from './ToggleableRegForm';
import RegisterForm  from './RegisterForm';
import ReactModal from 'react-modal';

class Classes extends React.Component{
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
    render(){
        return(
            <div>
            <ScrollableAnchor id={'classes'}>
            <div>
                <header className="major">
            <br/>
				    <h2>Ближайшие Мастер-классы</h2>
				</header>
            
				<div className="posts">
				    <article>
				        <a className="image"><img src={pic01} alt="" /></a>
				        <h3>Носорог из бумаги</h3>
				        <p>Мастер класс по пейперкрафту от Саи Асановой! <br/> 13 февраля 18.00</p>
				        <ul className="actions">
                            <li><button onClick={this.handleOpenModal} className='button'>Зарегистрироваться</button></li>
                         </ul>

				    </article>
				    <article>
				        <a  className="image"><img src={pic04} alt="" /></a>
				        <h3>Готовим чизкейк Oreo Brookie</h3>
				        <p>Попробуйте приготовить десерт вместе с Санатом Сапар <br/> 15 февраля 20.00</p>
                         <ul className="actions">
                            <li><button onClick={this.handleOpenModal}  className='button'>Зарегистрироваться</button></li>
                         </ul>
				    </article>
            <article>
				        <a  className="image"><img src={pic03} alt="" /></a>
				        <h3>Подарки на 8 марта</h3>
				        <p>Маме, бабушке, подругам и сестре, с любовью <br/> 15 февраля 20.00</p>
                         <ul className="actions">
                            <li><button onClick={this.handleOpenModal}  className='button'>Зарегистрироваться</button></li>
                         </ul>
				    </article>
            <article>
				        <a  className="image"><img src={pic02} alt="" /></a>
				        <h3>Подставки для телефонов</h3>
				        <p>Летние подставки точно поднимут вам настроение! <br/> 14 февраля 20.00</p>
                         <ul className="actions">
                            <li><button onClick={this.handleOpenModal}  className='button'>Зарегистрироваться</button></li>
                         </ul>
				    </article>
                </div>              
            </div>
            </ScrollableAnchor>  
        
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
        >
          
      
        <h3>Регистрация на мастер - класс</h3>
        
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
        </div>
        );
    }
}
export default Classes;