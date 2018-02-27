import React from 'react';
import pic01 from '../img/pic01.jpg';
import pic04 from'../img/pic04.jpg';



import '../App.css';
import Head from './Head.js';
import Banner from './Banner.js';
import Instructions from './Instructions.js';
import Classes from './Classes.js';
import EditableClassesList from './EditableClassesList.js';


class Wrapper extends React.Component{
    
    state = {
 classes: [{
     title:'Носорог из бумаги',
     desc:'Мастер класс по пейперкрафту от Саи Асановой!',
     time : '13 февраля 18.00',
     editFormOpen: false,
     classImg : {pic01}
},{
    title:'Готовим чизкейк Oreo Brookie',
     desc:'Попробуйте приготовить десерт вместе с Санатом Сапар',
     time : '15 февраля 20.00',
     editFormOpen: false,
     classImg : {pic04}
 }],
 };
    render(){
        return(
            <div className='column wrapper' >
                            <Head />
                            <Banner />
                            <Instructions />
                            <Classes/>
            </div>
        );
    }
    
}

export default Wrapper;
