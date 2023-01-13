import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const value = e.currentTarget.value
        setName(value)
    }

    const nameTrim = name.trim() === ''

    const addUser = () => {
        alert(`Hello  ${name}!`) // need to fix
        if (nameTrim) {
            setError('Text required')
            setName('')
        } else {
            setName(name);
            setError('')
            addUserCallback(name)
        } // need to fix
    }

    const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        const keyPressNameTrim = e.key === 'Enter' && name.trim() !== ''
        if (keyPressNameTrim) {
            setName(name);
            setError('')
            addUserCallback(name)
            alert(`Hello  ${name}!`) // need to fix
        }
        if (nameTrim) {
            setError('Text required')
            setName('')
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <>
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                onPressEnter={onPressEnter}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
            />
            {users.map(m => <div>{m.name}</div>)}
        </>
    )
}

export default GreetingContainer
