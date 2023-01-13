import React from 'react'
import style from './Message.module.css'

type testType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: testType) {
    return (
        <div className={style.message}>
            <img src={props.avatar} alt={`avatar`}/>
            <div className={style.messageMain}>
                <div><b>{props.name}</b></div>
                <div className={style.messageFooter}>
                    {props.message}
                    <div>{props.time}</div>
                </div>
                <div className={style.angleOne}></div>
                <div className={style.angleTwo}></div>
            </div>
        </div>
    )
}

export default Message
