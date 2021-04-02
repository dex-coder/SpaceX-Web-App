import React from 'react'
import { LaunchMissionInfoQuery, useLaunchMissionInfoLazyQuery } from '../../generated/graphql'

interface Props{
    data: LaunchMissionInfoQuery
}

export const MissionInfoList:React.FC<Props> = ({data}) => {
    return (
        <div>
            <ul>
                {JSON.stringify(data)}
            </ul>
        </div>
    )
}
