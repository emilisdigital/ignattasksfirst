import React from 'react'
import Message from "./Message/Message";
import AlternativeMessage from "./Alternative/AlternativeMessage";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Kaoru Matsubara',
    message: 'life how gacha game',
    time: '22:00',
}

const messageType = {
    sticker: 'https://ae01.alicdn.com/kf/HTB1uxqpnkOWBuNjSsppq6xPgpXaR/Mu-eco-de-peluche-de-DARLING-In-The-FRANXX-Zero-Two-02-nuevo-coj-n-de.jpg_Q90.jpg_.webp',
    avatarOne: 'https://stickerly.pstatic.net/sticker_pack/JApmn4n4iwBxTA1iac1yTQ/PS8MYX/2/394b52ce-3c3b-4a18-a62f-c3533654bb3b.png',
    kinder: 'https://honestcooking.com/wp-content/uploads/2011/04/Kinder-egg-HC-21.jpg',
    nameZeroTwo: 'Zero Two',
    textZeroTwo: 'Durling, ohayo!',
    kinderName: 'Kinder',
    kinderText: 'Ohayo..'
}


function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            для личного творчества, могу проверить
            <AlternativeMessage
                kinderText={messageType.kinderText}
                kinderName={messageType.kinderName}
                textZeroTwo={messageType.textZeroTwo}
                nameZeroTwo={messageType.nameZeroTwo}
                kinder={messageType.kinder}
                avatarOne={messageType.avatarOne}
                sticker={messageType.sticker}/>
            <hr/>
        </div>
    )
}

export default HW1
