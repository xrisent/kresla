import axios from "axios";

export const Catalog = () => {
  fetch("/api/catalog", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "John" }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));

  axios
    .post("/api/catalog", { name: "John" })
    .then((response) => console.log(response));

  return <div className="container"></div>;
};
