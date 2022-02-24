import React from "react";
import styles from "./tableRow.module.scss";
import { IOrder } from "../types/APIData.type";

type Props = {
  order: IOrder;
};

function TableRow({ order }: Props) {
  return (
    <div className={styles.table__row}>
      <div className={styles.id}>
        <strong>
          <p>{order.work_order_id}</p>
        </strong>
      </div>
      <div className={styles.desc}>
        <p>{order.description}</p>
      </div>
      <div className={styles.additional__info__wrapper}>
        <span
          className={styles[`badge--${order.priority.toLocaleLowerCase()}`]}
        >
          <p>{order.priority}</p>
        </span>
        <p>{order.status}</p>
      </div>
      <div className={styles.technitians__wrapper}>
        {order.assigned_to.map((tech, i) => {
          return (
            <div className={styles.technitian} key={i}>
              <p>{tech.person_name}</p>
              <strong>
                <p>{tech.status}</p>
              </strong>
            </div>
          );
        })}
      </div>
      <div className={styles.date__wrapper}>
        <p>{order.received_date}</p>
      </div>
    </div>
  );
}

export default TableRow;
