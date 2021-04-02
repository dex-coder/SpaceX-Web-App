import React from 'react'
import { useLaunchMissionInfoQuery } from './../../generated/graphql';
import { MissionInfoList } from './MissionInfoList'

export const MissionInfo = () => {
    const { data, loading, error } = useLaunchMissionInfoQuery({
           variables: {
              id: '24'
           },
         });



    if(loading)
    return <h1>Loading...</h1>

    if(error || !data)
    return <h1>Error</h1>

    console.log(data)

    return(
        <MissionInfoList data={data} />
    )

}
