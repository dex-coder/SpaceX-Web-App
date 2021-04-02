import React from 'react'
import { MissionsInfoQuery } from '../../generated/graphql'

interface Props{
    data: MissionsInfoQuery
}

function handleClick(e:any){
    //const value = event?.target.value
    console.log(e.target.value)
}

export const MissionList:React.FC<Props> = ({data}) => {
    return (
        <div>
            <ul>
                {
                    data.launches?.map((launchObj:any, ind:any)=>{
                        return <li key={ind} onClick={handleClick}>
                            {launchObj.mission_name}
                            {launchObj.mission_id}
                        </li>
                        
                    })
                }
            </ul>
        </div>
    )
}
