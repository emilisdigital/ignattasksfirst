import React from 'react'
import s from './AlternativeMessage.module.css'

type messageType = {
    sticker: string
    avatarOne: string
    kinder: string
    nameZeroTwo: string
    textZeroTwo: string
    kinderName: string
    kinderText: string
}

function AlternativeMessage(props: messageType) {
    return (
        <div className={s.background}>
            <div className={s.container}>
                <div className={s.oneMessage}>
                    <div><img src={props.avatarOne}/></div>
                    <div>
                        <div><b>{props.nameZeroTwo}</b></div>
                        <div>{props.textZeroTwo}</div>
                    </div>
                </div>
                <div className={s.twoMessage}>
                    <div><img src={props.kinder}/></div>
                    <div><b>{props.kinderName}</b></div>
                    <div>{props.kinderText}</div>
                </div>
                <div className={s.threeMessage}>
                    <div><b>{props.nameZeroTwo}</b></div>
                    <div><img src={props.sticker}/></div>
                    <div className={s.time}>0:02</div>
                    <div className={s.ugolPink}></div>
                    <div className={s.ugolBlack}></div>
                </div>
            </div>
        </div>
    )
}

export default AlternativeMessage
