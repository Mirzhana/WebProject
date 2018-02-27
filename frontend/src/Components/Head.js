import React from 'react';

class Head extends React.Component{
    render(){
        return(
            <div id = "header">
 			    <a href="index.html" className="logo"><strong>Mr.</strong> sky</a>
				<ul className="icons">
				    <li><a  className="icon fa-twitter"><span className="label">Twitter</span></a></li>
				    <li><a className="icon fa-facebook"><span className="label">Facebook</span></a></li>				
				    <li><a className="icon fa-instagram"><span className="label">Instagram</span></a></li>

                </ul>               
            </div>
        );
    }
}

export default Head;