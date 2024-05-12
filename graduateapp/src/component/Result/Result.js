import React, { useEffect, useState } from "react";
import styles from "../css/Result.module.css";

export default function Graduate(){

  const [pass, setPass] = useState(0);
  const [] = useState(false);

  return (
    <>
      <Result_Pass />
      <Result_NonPass />
   </>
  );

}