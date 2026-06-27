import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchData, setPage } from "../kreslaSlice";

export const Catalog = () => {
  // Используем хук useDispatch для того чтобы вызывать экшены из нашего слайса
  const dispatch = useDispatch();
  // Вытаскиваем данные из глобального хранилища
  const { data, page, page_size, total_pages, status } = useSelector(
    // Определяется по ключику, который мы указываем в store.js
    (state) => state.kresla,
  );

  // Здесь идут запросы на бэк
  useEffect(() => {
    // С помощью dispatch вызываем экшен fetchData
    dispatch(fetchData({ _page: page, _per_page: page_size }));
  }, [dispatch, page, page_size]);

  // Функция, которую мы подвязали на нажатие кнопки "Следующая страница"
  const handleNext = () => {
    // Если дошли до конца, то функция ничего не делает
    if (page === total_pages) return;
    // Устанавливаем страницу на которую нам надо сделать запрос
    dispatch(setPage(page + 1));
  };

  // Функция, которую мы подвязали на нажатие кнопки "Предыдущая страница"
  const handlePrev = () => {
    // Если дошли до начала, то функция ничего не делает
    if (page === 1) return;
    // Устанавливаем страницу на которую нам надо сделать запрос
    dispatch(setPage(page - 1));
  };

  // Отлавливаем состояние загрузки (запрос летит), если так, то показывай Загрузку, чтобы человек не видел пустой экран
  if (status === "loading") {
    return (
      <div className="container">
        <h1>Загрузка</h1>
      </div>
    );
  }

  return (
    <div className="container pb-20">
      <div className="container  pt-[100px] pb-[50px] flex flex-wrap text-center gap-4.5">
        {data &&
          data.length > 0 &&
          data.map((el) => (
            <div className="cards">
              <img
                className="w-[278px] h-[333px ]"
                src={el.imageUrl ? el.imageUrl : "/creslo.png"}
                alt=""
              />
              <p className="w-[273px]">{el.title}</p>
              <p className="text-2xl font-bold">{el.price}</p>
            </div>
          ))}
      </div>
      <div className="flex gap-10">
        <button onClick={handlePrev}>назад</button>
        <ul className="flex gap-5">
          {Array.from({ length: total_pages }).map((item, idx) => (
            <li
              className={`text-2xl w-10 h-10 border flex items-center justify-center ${
                idx + 1 === page ? "border-red-600" : ""
              }`}
            >
              {idx + 1}
            </li>
          ))}
        </ul>
        <button onClick={handleNext}>вперед</button>
      </div>
    </div>
  );
};
