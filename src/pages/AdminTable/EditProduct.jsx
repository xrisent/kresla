import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EMPTY_FORM = {
  title: "",
  description: "",
  price: "",
  heightChair: "",
  heightSeat: "",
  heightBack: "",
  seatWidth: "",
  color: "",
  imageUrl: "",
};

const EditProduct = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(null); // null | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios(`http://localhost:3000/armchairs/${id}`)
      .then(({ data }) => {
        setForm({
          title: data.title ?? "",
          description: data.description ?? "",
          price: data.price ?? "",
          heightChair: data.heightChair ?? "",
          heightSeat: data.heightSeat ?? "",
          heightBack: data.heightBack ?? "",
          seatWidth: data.seatWidth ?? "",
          color: data.color ?? "",
          imageUrl: data.imageUrl ?? "",
        });
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/armchairs/${id}`, form);
      setModal("success");
    } catch (err) {
      setErrorMessage(
        err.response?.data?.message ?? err.message ?? "Неизвестная ошибка"
      );
      setModal("error");
    }
  };

  const handleCloseModal = () => {
    if (modal === "success") navigate("/admin");
    setModal(null);
  };

  if (loading) {
    return (
      <div className="container py-10 px-4 flex items-center justify-center min-h-60">
        <p className="text-gray-400 text-sm">Загрузка...</p>
      </div>
    );
  }

  return (
    <div className="container py-10 px-4">
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full mx-4 text-center">
            {modal === "success" ? (
              <>
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold mb-2">Изменения сохранены!</h2>
                <p className="text-gray-500 text-sm mb-6">
                  Товар успешно обновлён.
                </p>
              </>
            ) : (
              <>
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold mb-2">Ошибка</h2>
                <p className="text-gray-500 text-sm mb-6">{errorMessage}</p>
              </>
            )}
            <button
              onClick={handleCloseModal}
              className="w-full bg-btn-bg hover:bg-[#005fad] text-white font-semibold py-2.5 rounded-lg transition text-sm cursor-pointer"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}

      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-400 hover:text-gray-700 transition cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="text-3xl font-bold uppercase tracking-wide">
          Редактирование товара
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 max-w-2xl"
      >
        {/* Название */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Название
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Кресло Samurai S-2.04"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-btn-bg transition"
          />
        </div>

        {/* Описание */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Описание
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Подробное описание товара..."
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm resize-none focus:outline-none focus:border-[#0074d4] transition"
          />
        </div>

        {/* Фото (ссылка) */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Ссылка на фото
          </label>
          <input
            type="text"
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-btn-bg transition"
          />
          {form.imageUrl && (
            <div className="mt-3 w-40 h-40 rounded-lg overflow-hidden border border-gray-200">
              <img
                src={form.imageUrl}
                alt="preview"
                className="w-full h-full object-cover"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
          )}
        </div>

        {/* Цена и цвет */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Цена (₽)
            </label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="22000"
              min={0}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-btn-bg transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Цвет
            </label>
            <input
              type="text"
              name="color"
              value={form.color}
              onChange={handleChange}
              placeholder="Серый"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-btn-bg transition"
            />
          </div>
        </div>

        {/* Характеристики */}
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Характеристики (мм)
        </p>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Высота кресла
            </label>
            <input
              type="number"
              name="heightChair"
              value={form.heightChair}
              onChange={handleChange}
              placeholder="1200"
              min={0}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-btn-bg transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Высота сиденья
            </label>
            <input
              type="number"
              name="heightSeat"
              value={form.heightSeat}
              onChange={handleChange}
              placeholder="500"
              min={0}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-btn-bg transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Высота спинки
            </label>
            <input
              type="number"
              name="heightBack"
              value={form.heightBack}
              onChange={handleChange}
              placeholder="780"
              min={0}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-btn-bg transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Ширина сиденья
            </label>
            <input
              type="number"
              name="seatWidth"
              value={form.seatWidth}
              onChange={handleChange}
              placeholder="560"
              min={0}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-btn-bg transition"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-btn-bg hover:bg-[#005fad] text-white font-semibold py-3 rounded-lg transition text-sm tracking-wide cursor-pointer"
        >
          Сохранить изменения
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
