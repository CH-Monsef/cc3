import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { getcasd } from "../redux/CardSlice";
import { getUser } from "../redux/UserSlice";
import User from "./User";

const ListUser = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getUser());
      dispatch(getcasd());
    }, [dispatch]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://dummyjson.com/users");
      return res.data;
    };
    getData().then((item) => setUser(item.users));
  }, []);

  return (
    <div className="listUser">
      <h1>Liste des utilisateurs: </h1>
      <div className="usC">
        {user.map((item) => (
          <User user={item} key={item.id} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default ListUser;
