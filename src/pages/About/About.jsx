// import { useCallback, useMemo, useState } from "react";

export const About = () => {
  // // useMemo - позволяет выполнять вычисления только когда меняется какая то зависимость
  // // const memoizedValue = useMemo(calculateFunction, depsArray)

  // // useCallback - запоминает саму функцию и у нас есть возможность ее вызывать (в данном кейсе мы сохраняем старые значение и только когда меняется count2, то функция обновляется)

  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);

  // const result = useMemo(() => {
  //   // тяжелое вычисление
  //   return count;
  // }, [count]);

  // console.log(result);

  // const func = useCallback(() => {
  //   console.log("Вычисляю", count2 + count);
  // }, [count2]);

  // func();

  // return (
  //   <>
  //     <p>{count}</p>

  //     <button
  //       style={{ width: 300, height: 150, background: "red" }}
  //       onClick={() => setCount((prev) => prev + 1)}
  //     >
  //       Увеличить
  //     </button>

  //     <p>{count2}</p>

  //     <button
  //       style={{ width: 300, height: 150, background: "red" }}
  //       onClick={() => setCount2((prev) => prev + 1)}
  //     >
  //       Увеличить
  //     </button>
  //   </>
  // );

  
};
