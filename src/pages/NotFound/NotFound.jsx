import { useEffect, useState } from "react";
import { PiSmileySadLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const [seconds, setSeconds] = useState(10);

  const router = useNavigate();
  const intervalId = setInterval(() => {
    if (seconds === 0) {
      router("/");
    }
    setSeconds(seconds - 1);
  }, 1000);
  useEffect(() => {
    intervalId;
  }, [seconds]);

  
  useEffect(() => {
    () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div className="bg-[#f8f8f8] h-[100vh]">
      <div className="container">
        <h1 className="text-center text-[54px]">404 Page Not Found</h1>
        <div className="flex flex-col items-center">
          <PiSmileySadLight size={500} />

          <button
            onClick={() => router("/")}
            className="w-[200px] h-[48px] bg-[green] text-white"
          >
            Вернуться на главную
          </button>
        </div>
        <h2 className="text-center text-[38px]">
          Через {seconds} секунд вы вернетесь на главную страницу
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
