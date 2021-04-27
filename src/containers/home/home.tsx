import React from "react";
import "./scss/home.scss";

import { useDispatch, useSelector } from "react-redux";
import { getReportAction } from "../../redux/report/actions";
import { ReportReducerType } from "../../redux/report/report.reducer.types";
import { ChartBar } from "../../components/chart";

export default function Home() {
  const dispatch = useDispatch();

  const { response } = useSelector(
    (state: { ReportReducer: ReportReducerType }) => state.ReportReducer
  );

  React.useEffect(() => {
    dispatch(getReportAction());
  }, [dispatch]);

  return (
    <>
      <section className="titlev2">
        <h4 className="title-two">Tus estadísticas:</h4>
      </section>
      <section className="help help-two">
        <div className="help--desk">
          <div className="main-dasboard">
            {response?.length > 0 &&
              response.map((item: any) => (
                <ChartBar
                  key={item.description}
                  id={item.menu_id}
                  width={item.porcentaje}
                  descripcion={item.description}
                  cantidad={item.number_operations}
                ></ChartBar>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
