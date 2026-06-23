import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminTableCatalog = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios("http://localhost:3000/armchairs").then(({ data }) => setData(data));
  }, []);

  const deleteProduct = (e, id) => {
    e.stopPropagation();
    axios.delete(`http://localhost:3000/armchairs/${id}`);
  };

  return (
    <div className="container py-10 px-4">
      <h1 className="text-3xl font-bold uppercase mb-8 tracking-wide">
        Таблица товаров
      </h1>
      <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-4 py-3">Название</th>
              <th className="px-4 py-3">Цена (₽)</th>
              <th className="px-4 py-3">Цвет</th>
              <th className="px-4 py-3">Высота кресла</th>
              <th className="px-4 py-3">Высота сиденья</th>
              <th className="px-4 py-3">Высота спинки</th>
              <th className="px-4 py-3">Ширина сиденья</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50 transition"
                onClick={() => navigate(`/edit/${item.id}`)}
              >
                <td className="px-4 py-3 font-medium text-gray-900">
                  {item.title || "—"}
                </td>
                <td className="px-4 py-3">{item.price || "—"}</td>
                <td className="px-4 py-3">{item.color || "—"}</td>
                <td className="px-4 py-3">{item.heightChair || "—"}</td>
                <td className="px-4 py-3">{item.heightSeat || "—"}</td>
                <td className="px-4 py-3">{item.heightBack || "—"}</td>
                <td className="px-4 py-3">{item.seatWidth || "—"}</td>
                <td
                  className="px-4 py-3"
                  onClick={(e) => deleteProduct(e, item.id)}
                >
                  Удалить
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-gray-400">
                  Товары не найдены
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTableCatalog;
