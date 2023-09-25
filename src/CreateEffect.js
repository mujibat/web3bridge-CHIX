import { useEffect } from 'react'

export default function useCreateEffect(setTodos){
    return useEffect(() => {
    let canceled = false;
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => {
            if (!canceled) {
                setTodos(data.slice(0, 10));
            }
        })
        .catch((err) => {
            console.error(err);
        });

    return () => (canceled = true);
}, []);
}