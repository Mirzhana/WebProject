import React from 'react';
import Classes from './Classes';
import RegisterForm from './RegisterForm';

class ToggleableClasses extends React.Component {

  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
        <Classes   />
        <ul class="actions">
				            <li><a href="#"  class="button" onClick={this.toggleModal}>Регистрация</a></li>
                        </ul>

        <RegisterForm show={this.state.isOpen}
          onClose={this.toggleModal}>
         
      
        <h1>Регистрация на мастер - класс</h1>
        

          <label for="name">Имя:</label>
          <input type="text" id="name" name="user_name">
          </input>
          <label for="mail">Email:</label>
          <input type="email" id="mail" name="user_email"></input>
          <label for="mail">Номер телефона:</label>
          <input type="email" id="mail" name="user_email"></input>
          
          <label>Программа:</label>
          <input type="radio" id="under_13" value="under_13" name="user_age"><label for="under_13" class="light">Взрослая</label><br/></input>
          <input type="radio" id="over_13" value="over_13" name="user_age"><label for="over_13" class="light">Семейная</label></input>
          <input type="radio" id="over_13" value="over_13" name="user_age"><label for="over_13" class="light">Взрослая</label></input>

          
        <label for="job">Количество человек:</label>
        <select id="job" name="user_job">
   
            <option value="frontend_developer">1</option>
            <option value="php_developor">2</option>
            <option value="python_developer">3</option>
            <option value="rails_developer"> 4</option>
            <option value="web_designer">5</option>
          
        </select>
        
          <label>Наличие необходимых инструментов и материалов:</label>
          <input type="radio" id="under_13" value="under_13" name="user_age"><label for="under_13" class="light">Есть</label></input><br/>
          <input type="radio" id="over_13" value="over_13" name="user_age"><label for="over_13" class="light">Будет приобретено в мастерской</label></input>
        

        <button type="submit">Зарегестрировать!</button>
      
        </RegisterForm>
      </div>
    );
}
}

export default ToggleableClasses;