// import { useEffect, useRef, useState } from "react";

function Header() {
  // const ref = useRef();
  // useRef - "пустая" коробка, может хранить значение или тег
  // useRef - не вызывает ререндер
  // 1 способ - подвязка ref к какому то тегу (по простому вытащили тег, как это делали через querySelector)
  // 2 способ - хранить в себе какие либо данные, но есть загвоздка, useRef не вызывает ререндер, поэтому как тот же счетчик мы его не сможем использовать
  // зато есть возможность хранить предыдущее значение

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   ref.current = count;
  //   // console.log(ref.current);
  // }, [count]);

  return (
    <header>
      <div className="container flex flex-col py-[17px] gap-[16px]">
        <div className="flex justify-between items-center">
          <img src="/Logo.png" className="w-[184px] h-[42px]" />
          <input
            // ref={ref}
            type="text"
            placeholder="Название модели или артикул"
            className="w-127.5 h-12.75 bg-[#f7f7f8] py-[15px] px-[20px]"
          />
          <p>+7 495 221-06-75</p>

          {/* <p>предыдущий {ref.current}</p> */}
          {/* <p>текущий {count}</p> */}
          <button
            // onClick={() =>
            //   setCount((prev) => {
            //     return prev + 1;
            //   })
            // }
            className="px-[28px] py-[15px] bg-[#f3f4f7]"
          >
            Заказать звонок
          </button>
        </div>
        <div>
          <nav className="flex gap-[34px]">
            <a href="/">Главная</a>
            <a href="/about">О продукте</a>
            <a href="">Отзывы</a>
            <a href="">Доставка и оплата</a>
            <a href="">Контакты</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
