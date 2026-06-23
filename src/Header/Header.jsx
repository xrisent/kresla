import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [data, setData] = useState();
  const [queryData, setQueryData] = useState();

  const handleInputChange = (e) => {
    setQueryData(e.target.value);
  };

  useEffect(() => {
    const fetchCatalog = async () => {
      try {
        const response = await axios.get("http://localhost:3000/armchairs", {
          params: { "title:contains": queryData },
        });

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCatalog();
  }, [queryData]);

  return (
    <header>
      <div className="container flex flex-col py-[17px] gap-[16px]">
        <div className="flex justify-between items-center">
          <img src="/Logo.png" className="w-[184px] h-[42px]" />
          <div className="relative">
            <input
              type="text"
              placeholder="Название модели или артикул"
              className="w-127.5 h-12.75 bg-[#f7f7f8] py-[15px] px-[20px]"
              onChange={handleInputChange}
            />
            {Boolean(queryData) && Boolean(data) && (
              <div className="absolute left-0 p-7 z-10 w-127.5 bg-[#f3f4f7] flex flex-col gap-5">
                {data.splice(0, 5).map((el) => {
                  return (
                    <p className="border-b-black border-b-2">{el.title}</p>
                  );
                })}
              </div>
            )}
          </div>
          <p>+7 495 221-06-75</p>

          <button className="px-[28px] py-[15px] bg-[#f3f4f7]">
            Заказать звонок
          </button>
        </div>
        <div>
          <nav className="flex gap-[34px]">
            <Link to="/">Главная</Link>
            <Link to="/catalog">Каталог</Link>
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
