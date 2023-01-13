import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const [visible, setVisible] = useState<boolean>(false)

    const changeSuperRange = (value: number) => setValue1(value)

    const changeSuperDblRange = (value: [number, number]) => {
        const dblRange = value[1] * 2
        setValue1(value[0])
        setValue2(dblRange)
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={changeSuperRange}
                    value={value1}
                    changeVisible={() => setVisible(!visible)}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    oneRange={value1}
                    onChangeRange={changeSuperDblRange}
                    visible={visible}
                    changeVisible={() => setVisible(!visible)}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
