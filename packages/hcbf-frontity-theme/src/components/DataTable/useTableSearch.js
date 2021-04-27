import React, { useState, useEffect } from "react";
import { connect } from "frontity";

const useTableSearch = ({ searchVal, searchFilter, retrieve }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [origData, setOrigData] = useState([]);
  const [searchIndex, setSearchIndex] = useState([]);
  const [loading, setLoading] = useState(true);

  const crawl = (user, allValues) => {
    if (!allValues) allValues = [];

    for (var key in user) {
      if (typeof user[key] === "object") {
        crawl(user[key], allValues);

      } else {
        allValues.push(user[key] + " ");
      }
    }
    return allValues;
  };

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const { data: users } = await retrieve();
      setOrigData(users);
      setFilteredData(users);

      const searchInd = users.map((user) => {
        const allValues = crawl(user);
        return { allValues: allValues.toString() };
      });

      setSearchIndex(searchInd);

      if (users) {
        setLoading(false);
      }
    };
    fetchData();

  }, []);

  useEffect(() => {
    if (searchFilter.length > 0 || searchVal) {

      const reqData = searchIndex.map((user, index) => {
        searchFilter.forEach(filter => {
          if (user !== null && user.allValues.toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
            return user;
          }
          user = null;
          return user;
        });

        if (searchVal) {
          if (user !== null && user.allValues.toLowerCase().indexOf(searchVal.toLowerCase()) >= 0) {
            return origData[index];
          }
          user = null;
          return user;
        }

        if (user) {
          return origData[index];
        }
        return user;
      });

      setFilteredData(reqData.filter((user) => {
        if (user) {
          return true;
        }
        return false;
      }));

    } else {
      setFilteredData(origData);
    }
  }, [searchFilter, searchVal, origData, searchIndex]);

  return { filteredData, loading };
}

export default useTableSearch;
