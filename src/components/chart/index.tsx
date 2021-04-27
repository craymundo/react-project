import React from "react";
import { IProps } from "./types";

import styled from "styled-components";

import icon01 from "../../assets/image/ico_01.png";
import icon02 from "../../assets/image/ico_02.png";
import icon03 from "../../assets/image/ico_03.png";
import icon04 from "../../assets/image/ico_04.png";
import icon05 from "../../assets/image/ico_05.png";
import icon06 from "../../assets/image/ico_06.png";

interface Props {
  width: string;
}

const DivBar = styled.div<Props>`
  width: ${(p) => p.width + "%" || "0%"};
`;

export const ChartBar: React.FC<IProps> = ({
  id,
  width,
  descripcion,
  cantidad,
}) => {
  const renderIcon = (id: string) => {
    console.log('id: ', id);
    let image;
    switch (id) {
      case "01":
        image= <img src={icon01} alt="" />;
        break;
      case "02":
        image= <img src={icon02} alt="" />;
        break;
      case "03":
        image= <img src={icon03} alt="" />;
        break;
      case "04":
        image= <img src={icon04} alt="" />;
        break;
      case "05":
        image= <img src={icon05} alt="" />;
        break;

      default:
        image= <img src={icon06} alt="" />;
        break;

    }

    return image;
  };

  return (
    <>
      <div className="item">
        <div className="box">
          <div className="progress-bar--wrap progress-bar--yellow">
            <div className="progress-bar">
              Progress
              <DivBar className="progress-bar--inner" width={width}></DivBar>
            </div>
          </div>
          <div className="data">
            {renderIcon(id)}
            <span>{cantidad}</span>
            <p>{descripcion}</p>
          </div>
        </div>
      </div>
    </>
  );
};
