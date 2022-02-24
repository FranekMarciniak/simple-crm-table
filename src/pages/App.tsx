import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import Table from "../components/Table";
import TableRow from "../components/TableRow";
import { useFetchData } from "../hooks/useFetchData";
import { IOrder } from "../types/APIData.type";
import styles from "./app.module.scss";

function App() {
  // Custom hook for retriving data from api (in this case just json file in public dir).
  // It accepts url as param (data.json) and what to return from req body as generic type (IOrder[])
  const { data, error, loading } = useFetchData<IOrder[]>("data.json");

  // This part of state is used to display data from api
  // I'm not using "data" from useFetchData because I'ill alter state trought search later
  const [dataToDisplay, setDataToDisplay] = useState<IOrder[] | null>([]);

  useEffect(() => {
    // Setting data to display from useFetchData hook
    setDataToDisplay(data as IOrder[]);
  }, [data]);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setDataToDisplay(data);
    } else {
      data &&
        setDataToDisplay(
          data.filter((order) => {
            return (
              order.description
                .toLowerCase()
                .indexOf(e.target.value.toLowerCase()) > -1
            );
          })
        );
    }
  };
  return (
    <Layout>
      {error ? <p>{JSON.stringify(error)}</p> : <></>}
      <div className={styles.search__box__wrapper}>
        <input
          className={styles.search__box}
          placeholder="Search by description"
          onChange={searchHandler}
        />
      </div>
      {!loading && dataToDisplay ? (
        <Table>
          {dataToDisplay.map((order) => (
            <TableRow key={order.work_order_id} order={order} />
          ))}
        </Table>
      ) : (
        <Loading />
      )}
    </Layout>
  );
}

export default App;
