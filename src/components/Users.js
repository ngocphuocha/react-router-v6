import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const showActiveUsers = searchParams.get('filter') === 'active'
    let userId = searchParams.get('userId');
    const [user, setUser] = useState('')
    const [error, setError] = useState('')

    const changeUserIdParam = (e) => {
        setSearchParams({ userId: e.target.value })
    }

    const handleSearchUser = async () => {
        try {
            if (userId > 0) {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
                console.log(response);
                setUser(response.data.name)
                setError('')
            } else {
                setUser('')
                setError('')
            }
        } catch (error) {
            if (error.response.status === 404) {
                setError('User Not found')
            }
            console.log(error);
        }
    }

    useEffect(() => {
        handleSearchUser()
    }, [userId])

    return (
        <div>
            <h1>User 1</h1>
            <h1>User 2</h1>
            <h1>User 3</h1>

            <Outlet />
            {/* <div>{user}</div> */}
            <div>
                <input onKeyUp={changeUserIdParam} type="text" placeholder="Enter user id" />
                <div className="result">
                    {user}
                    {error}
                </div>
                <button onClick={handleSearchUser}>Search</button>
                <button onClick={() => setSearchParams({ filter: 'active' })}>
                    Active Users
                </button>
                <button onClick={() => setSearchParams({})}>Reset Filter</button>
            </div>
            {showActiveUsers ? (
                <h2>Showing active users</h2>
            ) : (
                <h2>Showing all users</h2>
            )}
        </div>
    );
};
