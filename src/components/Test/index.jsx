
import React from "react";
import styles from './Test.module.scss';
import useTodo from "../../api/useTodo";

export default function Test() {
  const {data} = useTodo(2)
  return <div className={styles.element}>
    <div>{data?.title}
      <div>2</div>
    </div>
    <div>3</div>
    <div>4</div>
    </div>
}

