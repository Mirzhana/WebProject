import React from 'react';


class RegisterForm extends React.Component {


	render() {
		return (
            <div>
        <form>
        <h1>Регистрация на мастер - класс</h1>
        

          <label for="name">Имя:</label>
          <input type="text" id="name" name="user_name"></input>
          
          <label for="mail">Email:</label>
          <input type="email" id="mail" name="user_email"></input>
          <label for="mail">Номер телефона:</label>
          <input type="email" id="mail" name="user_email"></input>
          
          <label>Программа:</label>
          <input type="radio"   ><label  class="light">Взрослая</label><br/></input>
          <input type="radio"  ><label class="light">Семейная</label></input>
          <input type="radio"  ><label  class="light">Взрослая</label></input>

          
        <label >Количество человек:</label>
        <select >
   
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          
        </select>
        
          <label>Наличие необходимых инструментов и материалов:</label>
          <input type="radio"><label class="light">Есть</label><br/></input>
          <input type="radio"><label class="light">Будет приобретено в мастерской</label></input>
        

        <button type="submit">Зарегестрировать!</button>
      </form>
      	</div>
		);
	}
}

export default RegisterForm;