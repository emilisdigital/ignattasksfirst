import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import {arrType} from "../../HW7";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: arrType
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value) // onChange, onChangeOption
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key гитхаб офнится
        <label key={name + '-' + i}>
            <input
                type={'radio'}
                name={name}
                value={o}
                onChange={onChangeCallback}
                checked={value === o}
                {...restProps}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
            {/*{options ? options.map((option, index) => {*/}
            {/*    return <label key={index}>*/}
            {/*        <input type={'radio'}*/}
            {/*               name={name}*/}
            {/*               value={option}*/}
            {/*               onChange={onChangeCallback}*/}
            {/*               checked={value === option}/>*/}
            {/*        {option}*/}
            {/*    </label>*/}
            {/*}) : []}*/}
        </>
    )
}

export default SuperRadio
