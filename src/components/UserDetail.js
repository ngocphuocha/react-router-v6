import React from 'react';
import {useParams} from "react-router-dom";

export const UserDetail = () => {
    const {userId} = useParams()

    return <div>
        User detail {userId}
    </div>;
};
