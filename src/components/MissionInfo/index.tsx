import React from 'react'
import { useLaunchMissionInfoQuery } from './../../generated/graphql';
import { MissionInfoList } from './MissionInfoList'
import { useEffect } from 'react';


interface OwnProps {
    id: number;
  }

export const MissionInfo = ({id}:OwnProps) => {
    console.log(id)
    const { data, loading, error, refetch } = useLaunchMissionInfoQuery({
           variables: { id: String(id) },
         });

        useEffect(() => {
            refetch();
           console.log(id)

          }, [id]);


    if(loading)
    return <h1>Loading...</h1>

    if(error || !data)
    return <h1>Error</h1>

    console.log(data)

    return(
        <MissionInfoList data={data} />
    )

}
