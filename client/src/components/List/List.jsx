import React, { useMemo } from "react";
import "./list.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  // Memoize the query URL to prevent unnecessary re-fetches
  const queryUrl = useMemo(() => {
    const subCatsQuery = subCats
      .map((item) => `&[filters][sub_categories][id][$eq]=${item}`)
      .join("");
    return `/products?populate=*&[filters][categories][id]=${catId}${subCatsQuery}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`;
  }, [catId, subCats, maxPrice, sort]);

  const { data, loading, error } = useFetch(queryUrl);

  return (
    <div className="list">
      {loading ? (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        data?.map((item) => <Card item={item} key={item.id} className="card" />)
      )}
    </div>
  );
};

export default React.memo(List);
