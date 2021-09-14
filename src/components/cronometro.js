import React, { useRef, useEffect, useState } from "react";

export default function Cronometro({final,bool,guardarBool, num, setNum, volerEmpezar}) {
  //const [num, setNum] = useState(15);
  const [pause, setPause] = useState(false);
  
  let intervalRef = useRef();
  
  const decreaseNum = () => setNum((prev) => prev - 1);

  useEffect(() => {
    if(bool){
        volerEmpezar();
        guardarBool(false);
    }
    intervalRef.current = setInterval(decreaseNum, 1200);
    return () => clearInterval(intervalRef.current);
  }, [bool,guardarBool,volerEmpezar,intervalRef,decreaseNum]);
  
  return (
    <div>
        {num===0 ? final():null}
      <h1>{num}</h1>
      
    </div>
  );
}