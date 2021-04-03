import React from "react";
import { MissionsInfoQuery } from "../../generated/graphql";

export interface OwnProps {
  handleChange: (newId: number) => void;
}

interface Props extends OwnProps {
  data: MissionsInfoQuery;
}

export const MissionList: React.FC<Props> = ({ data, handleChange }) => {
  return (
    <div>
      <ul>
        {data.launches?.map((launchObj: any, ind: any) => {
          return (
            <li key={ind} 
            onClick={() => handleChange(launchObj.mission_id)}>
              {launchObj.mission_name} 
            </li>
          );
        })}
      </ul>
    </div>
  );
};
