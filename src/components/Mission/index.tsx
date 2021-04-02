import React from 'react'
import { useMissionsInfoQuery } from './../../generated/graphql';

export const MissionContainer = () => {
    const {loading, error, data} = useMissionsInfoQuery();

    if(loading)
    return <h1>Loading...</h1>

    if(error)
    return <h1>Error</h1>

    console.log(data)

    return(
        <div></div>
    )

}
