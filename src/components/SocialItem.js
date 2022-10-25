import React from "react";
import '../App.css';
import './style.css';
function SocialItem(props) {
    return (
       
        <li className="list-group-item">
             <img src={props.img} alt={` icon of ${props.media}`} />
            <input className="form-check-input" type="checkbox" id={props.id} />
            <label className="form-check-label" htmlFor={props.id}>{props.media}</label>
        </li>

    );

}
export default SocialItem;