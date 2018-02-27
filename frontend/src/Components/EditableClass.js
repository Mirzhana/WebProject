import React from 'react';
import RegisterForm from './RegisterForm'
import Classes from './Classes'

class EditableClass extends React.Component {
    state = {
        editFormOpen: false,
 };
 render() {
 if (this.props.editFormOpen) {
 return ( 
     <RegisterForm
     />
 );
 } else {
 return (
 <Classes
     id={this.props.id}
     title={this.props.title}
     desc={this.props.desc}
     time={this.props.time}
     classImg = {this.props.classImg}
     
 />
 );
 }
 }
}

export default EditableClass;