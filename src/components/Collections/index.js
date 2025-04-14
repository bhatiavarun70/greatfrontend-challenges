import React, { useEffect, useState } from "react";
import axios from "axios";
import mockData from "../../data/data.json";
import "./collections.css";
import CollectionCard from "../CollectionCard";

const Collections = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        await axios
          .get(
            "https://www.greatfrontend.com/api/projects/challenges/e-commerce/collections"
          )
          .then((response) => {
            setData(response.data.data);
          });
      } catch (e) {
        console.log(e);
        setData(mockData);
      }
    }
    fetchData();
  }, []);
  console.log("data", data);
  return (
    <div className="collections-container">
      <div className="collection-wrapper">
        <h2 className="collection-heading">Our Collections</h2>
        <div className="collection-content-wrapper">
          <div className="collections-left">
            <CollectionCard
              image={data[0]?.image_url}
              name={data[0]?.name}
              description={data[0]?.description}
              variant="primary"
              id={data[0]?.collection_id}
            />
          </div>
          <div className="collections-right-wrapper">
            <div className="collections-right">
              <CollectionCard
                image={data[1]?.image_url}
                name={data[1]?.name}
                description={data[1]?.description}
                variant="secondary"
                id={data[1]?.collection_id}
              />
            </div>
            <div className="collections-right">
              <CollectionCard
                image={data[2]?.image_url}
                name={data[2]?.name}
                description={data[2]?.description}
                variant="secondary"
                id={data[2]?.collection_id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
