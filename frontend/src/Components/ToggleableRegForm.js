import React from 'react';
import RegisterForm from './RegisterForm'

class ToggleableRegForm extends React.Component {
    state = {
 isOpen: false,
 };
handleFormOpen = () => {
this.setState({ isOpen: true });
};
 render() {
 if (this.state.isOpen) {
 return (
     <RegisterForm />
     );
     } else {
     return (
     <div className='ui basic content center aligned segment'>
     <ul className="actions">
        <li><button onClick={this.handleFormOpen} className='button'>Зарегистрироваться</button></li>
     </ul>
     </div>
     );
     }
 }
}

export default ToggleableRegForm;