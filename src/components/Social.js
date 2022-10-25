import React from "react";
import '../App.css';
import './style.css';
import SocialItem from "./SocialItem";

function Social() {
    return (

        <ul className="list-group">
            <SocialItem
                media='Facebook'
                id='facebook'
                img='https://picsum.photos/60'
            />
            <SocialItem
                media='Instegram'
                id='instegram'
                img='https://picsum.photos/61'
            />
            <SocialItem
                media='WhatsApp'
                id='whatsApp'
                img='https://picsum.photos/63'
            />
            <SocialItem
                media='Linkden'
                id='linkden'
                img='https://picsum.photos/64'
            />

        </ul>
    );
}

export default Social;