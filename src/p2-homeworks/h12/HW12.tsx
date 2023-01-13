import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemaAC} from "./bll/themeReducer";

export const themes = ['some', 'red', 'dark'];

function HW12() {
    // const theme = 'some'; // useSelector

    const theme = useSelector<AppStoreType, string>(state => state.colorReduce.color)
    const dispatch = useDispatch()

    // useDispatch, onChangeCallback
    const onChangeCallback = (color: string) => {
        dispatch(changeThemaAC(color))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect
                options={themes}
                onChangeOption={onChangeCallback}
            />

            <hr/>
        </div>
    );
}

export default HW12;
