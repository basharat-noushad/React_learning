import { useState } from "react";


export function Hook() {

    const arry = [
        {
            name: "abc",
            age: 15
        },
        {
            name: "cde",
            age: 25
        },
        {
            name: "efg",
            age: 55
        },
        {
            name: "xyz",
            age: 23
        }
    ]

    const [count, setCount] = useState(0);

    const [users, setUsers] = useState(arry);


   const avgAge =  users.reduce(
        (accum, user) => {
            return (
                accum + user.age
            );
        }, 0
    )

    // console.log(arry);

    return (
        <div>
            <h1>React Hooks {count}</h1>
            <ul>
                {users.map((user, index) => {
                    return (
                        <li key={index}>{user.name} is {user.age} year old</li>
                    )
                })
                }
            </ul>
            <h2>{ avgAge/users.length }</h2>

            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div >
    );
}

export const SecondHook = () => {
    console.log("Second Hook");
    return (
        <div>
            <h1>Second Hook</h1>
        </div>
    )
}