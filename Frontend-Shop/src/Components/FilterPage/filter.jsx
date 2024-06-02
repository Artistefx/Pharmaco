import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Card1 from "./card";
import Buttons from "./buttons";
import axios from "axios";

function Filter() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [categorie, setCategorie] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result;
        if (searchTerm.length === 0) {
          result = await axios.get(`http://localhost:8086/api/v1/produit/all`);
        } else {
          result = await axios.get(
            `http://localhost:8086/api/v1/produit/find/nom/like/${searchTerm}`
          );
        }
        setItems(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://127.0.0.1:8086/api/v1/categorie/top5`);
        setCategories(result.data);
        console.log(categories)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://127.0.0.1:8086/api/v1/produit/find/categorie/${categorie}`);
        setItems(result.data);
        console.log(categories)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [categorie]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1 className="text-center col-12 fw-bold mt-3 mb-5">
            Bienvenue dans Pharmaco
          </h1>
          <div className="col-12 mb-3">
            <input
              type="text"
              className="container-fluid form-control search-bar"
              style={{
                width: "50%",
                height: "40px",
                fontSize: "16px",
                borderRadius: "5px",
                border: "3px solid #ced4da",
              }}
              placeholder="Rechercher un medicament..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Buttons
            filterItems={categories}
            setCategorie={setCategorie}
            setSearchTerm={setSearchTerm}
          />
          <Card1 item={items} />
        </div>
      </div>
    </>
  );
}

export default Filter;
