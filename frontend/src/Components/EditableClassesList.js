import React from 'react';
import EditableClass from './EditableClass';


class EditableClassesList extends React.Component {
    
 
 render() {
     const classes = this.props.classes.map((item) => (
     <EditableClass
         key={item.id}
         id={item.id}
         title={item.title}
         desc={item.desc}
         time={item.time}
         classImg = {item.classImg}

     />
 ));
 return (
    <div id='classes'>
        {classes}
     </div>
 );
 }
}

export default EditableClassesList;