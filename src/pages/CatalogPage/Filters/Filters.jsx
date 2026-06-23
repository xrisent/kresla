import { useSelector } from "react-redux";

export const Filters = () => {
   const num = useSelector((state) => state.counter.count);
  return (
    <div>
      <div className="flex justify-between items-center container !mb-6">
        <h1 className="text-center font-bold">Каталог кресел {num}</h1>
        <select name="" id="">
          <option value="">По возрастанию</option>
          <option value="">По убыванию</option>
        </select>
      </div>
      <div className="flex gap-10 items-center container">
        <select name="" id="">
          <option value="">Красные</option>
          <option value="">Белые</option>
        </select>
        <input type="range" />
      </div>
    </div>
  );
};
