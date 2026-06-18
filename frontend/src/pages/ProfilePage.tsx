"use client";

import {profile} from '../api/userApi'
import { useEffect, useState } from "react"
import type { userByIdResponse } from '../types/route_Types/userRoutesTypes';
export default function ProfilePage() {
    const [user, setUser] = useState<userByIdResponse|null>(null);

    useEffect(() => {
        async function loadUser() {
            const response = await profile();
            setUser(response.data);
        }
  
        loadUser();
    }, []);

    if (!user) {
        return <p>Loading...</p>;
    }

    console.log(user);
    return (
        <div>
            <h1>Profile Page</h1>
            <h3>{user.data.username}</h3>
            <h3>{user.data.email}</h3>
            <h3>{user.data.bio}</h3>
            <h3>{user.data.createdAt}</h3>
        </div>
    );
}