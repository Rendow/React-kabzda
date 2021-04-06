import React, {useCallback, useMemo} from "react";
import {useState} from "react";

export default {
    title: 'useMemo demo'
}


export const DifficultCountingExample = () => {
    const [a, setA] = useState(3)
    const [b, setB] = useState(3)


    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let temp = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const random = Math.random()
            }
            temp = temp * i

        }
        return temp
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <div>
            <input value={a}
                   onChange={(event) => {
                       setA(+event.currentTarget.value)
                   }}/>
            <input value={b}
                   onChange={(event) => {
                       setB(+event.currentTarget.value)
                   }}/>
            <hr/>
            <div>
                Result for a : {resultA}
            </div>
            <div>
                Result for b : {resultB}
            </div>
        </div>
    )
}


const UsersSecret = (props: { users: string[] }) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)


export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['dimych', 'olya', 'ser'])

    const newArray = useMemo(()=>{
      return  users.filter( u => u.indexOf('a')>-1)
    },[users])

    return (
        <div>
            <button onClick={()=>(setCounter(counter+1))}>++</button>
            <div> {counter}</div>
            <Users users={newArray}/>
        </div>
    )
}

export const LikeUseCallback = () => {
    console.log('update')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['react', 'js', 'html'])

    const newArray = useMemo(() => {
        return books.filter(books => books.indexOf('a') > -1)
    }, [books])

    const memoraizedAddBook = useMemo(() => {
        return () => {
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    const memoraizedAddBook2 = useCallback(() => {
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)

    }, [books])

    return (
        <div>
            <button onClick={() => (setCounter(counter + 1))}>++</button>
            <div> {counter}</div>
            <Book books={newArray} addBook={memoraizedAddBook}/>
        </div>
    )
}

type BookSecretType = { books: string[], addBook: () => void }

const BooksSecret = (props: BookSecretType) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>

        {props.books.map((book, i) => <div key={i}>{book}</div>)}
    </div>
}

const Book = React.memo(BooksSecret)
