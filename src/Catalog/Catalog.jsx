import axios from "axios";
import { useEffect, useState } from "react";

export const Catalog = () => {
  const [totalData, setTotalData] = useState([]);
  const [data, setData] = useState();
  const [page, setPage] = useState(1);

  const totalPage = Math.ceil(totalData.length / 10);

  const handleNext = () => {
    if (page === totalPage) return;
    setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };

  useEffect(() => {
    axios("http://localhost:3000/armchairs").then(({ data }) =>
      setTotalData(data)
    );
  }, []);

  useEffect(() => {
    const fetchCatalog = async () => {
      try {
        const response = await axios.get("http://localhost:3000/armchairs", {
          // queryParams - это параметры запроса, которые мы передаем бэку. допустим в данном случае мы говорим бэку что нам нужно первая страница и 10 элементов
          params: { _page: page, _per_page: 10 },
          // пагинация - позволяет разбивать большой объем данных на отдельные, последовательные страницы. к примеру 100 объектов и мы делим его на 10 частей по 10 объектов
          // позволяет облегчать загрузку сайта и запроса бэку
        });

        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCatalog();
  }, [page]);

  return (
    <div className="container pb-20">
      <div className="container  pt-[100px] pb-[50px] flex flex-wrap text-center gap-4.5">
        {data &&
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
          {Array.from({ length: totalPage }).map((item, idx) => (
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
