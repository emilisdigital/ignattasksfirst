import React, {ChangeEvent, useState} from 'react'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    oneRange: number
    changeVisible: () => void
    visible: boolean
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        visible,
        changeVisible,
        oneRange,
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeRange && onChangeRange([0, +e.currentTarget.value])
    }
    const onChangeCallback2 = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeRange && onChangeRange([+e.currentTarget.value, 0])
        changeVisible()
    }

    return (
        <>
            {
                visible
                    ? <input
                        type={'range'}
                        onChange={onChangeCallback}
                    />
                    : <input
                        type={'range'}
                        value={oneRange}
                        onChange={onChangeCallback2}
                    />
            }
        </>
    )
}

export default SuperDoubleRange
