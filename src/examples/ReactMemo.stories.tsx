import React from "react";
import {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessageCounter = (props: any) => {
    return <div>{props.count}</div>
}


const UsersSecret = (props: { users: string[] }) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

//по сути контейнерная компонента
const Users = React.memo(UsersSecret)


export const Example = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['dimych','olya','ser'])

    const addUser = () => {
        setUsers([...users,'fader','sadwe'])
    }
    return (
        <div>
            <button onClick={()=>{setCounter(counter+1)}}>+ </button>
            <button onClick={addUser}>add user </button>
            <NewMessageCounter count={counter}/>
            <Users users={users}/>
        </div>
    )
}
