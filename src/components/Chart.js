import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getRequest } from "../global/httpRequests";

const Chart = () => {
  const [manageStatus, setManageStatus] = useState({
    loader: false,
    error: false,
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    setManageStatus({ loader: true, error: false });

    getRequest()
      .then((response) => {
        if (response.status === 200) {
          setData(response.data.items);
          setManageStatus({ ...manageStatus, error: false });
        } else {
          setManageStatus({
            ...manageStatus,
            error: "Oops... unable to fetch data",
          });
        }
      })
      .catch((error) => setManageStatus({ ...manageStatus, error }))
      .finally(() => setManageStatus({ ...manageStatus, loader: false }));
  }, []);

  return (
    <>
      {manageStatus.loader ? (
        <h1 className="wait">Please wait chat loading...</h1>
      ) : (
        <h1>3rd Party API & Visualization</h1>
      )}
      <div className="chart__wrapper">
        <LineChart
          width={800}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#F07DEA" />
        </LineChart>
      </div>
    </>
  );
};

export default Chart;
