import React from 'react';

import pic01 from '../img/pic01.jpg';
import pic02 from '../img/pic02.JPG';
import pic03 from '../img/pic03.jpg';
import pic04 from'../img/pic04.jpg';
import ScrollableAnchor from 'react-scrollable-anchor';
import ReactModal from 'react-modal';


class Classes extends React.Component{

  constructor () {
        super();
        this.state = {
          classes: [],
          showModal: false,
          name: '',
          phone: '',
          email: '',


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
  
  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const classes = await res.json();

      this.setState({
        classes
      });

    } catch (e) {
      console.log(e);
    }
  }

    render(){
      var all = this.state.classes.map(item => (
  <div>
    <h3>{item.title}</h3>
    <p>{item.description}</p>
    <p>{item.date}</p>
    <p>{item.category}</p>
    <p>{item.status}</p>

  </div>
));
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
                            {all[0]}
                            <ul className="actions">
                                <li><a href='http://127.0.0.1:8000/inputs/'>
                                  <button className='button'>Зарегистрироваться</button>
                                  </a></li>
                             </ul>

                        </article>
                        <article>
                            <a  className="image"><img src={pic04} alt="" /></a>
                            {all[1]}
                             <ul className="actions">
                               <li><a href='http://127.0.0.1:8000/inputs/'>
                                  <button className='button'>Зарегистрироваться</button>
                                  </a></li>
                             </ul>
                        </article>
                        <article>
                            <a  className="image"><img src={pic03} alt="" /></a>
                           {all[3]}
                             <ul className="actions">
                                <li><a href='http://127.0.0.1:8000/inputs/'>
                                  <button className='button'>Зарегистрироваться</button>
                                  </a></li>
                             </ul>
                        </article>
                        <article>
                            <a  className="image"><img src={pic02} alt="" /></a>
                            {all[4]}
                             <ul className="actions">
                               <li><a href='http://127.0.0.1:8000/inputs/'>
                                  <button className='button'>Зарегистрироваться</button>
                                  </a></li>
                             </ul>
                        </article>
                    </div>              
                </div>
                </ScrollableAnchor>  

           
            <ReactModal   
                   isOpen={this.state.showModal}
                   onRequestClose={this.handleCloseModal}
            >
                  <form>  <h3>Регистрация на мастер - класс</h3>
                    <br/>
                    <label>Имя:</label> <br/><input input type="text" name="name" ></input><br/>
                    <label>Номер телефона:</label> <br/><input input type="text" name="phone" ></input><br/>
                    <label>Email:</label> <br/><input input type="email" name="email" ></input><br/>
                  <button onClick={this.handleCloseModal}>Close Modal</button> 
                  <button type ='submit' >Send</button></form>
            </ReactModal>
            </div>
        );
    } 
}
export default Classes;