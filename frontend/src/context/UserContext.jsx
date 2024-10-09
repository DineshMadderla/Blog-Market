/* eslint-disable react/prop-types */

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { URL } from "../url";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='));
    
    if (token) {
      getUser();
    } else {
      console.log("No token found, user not logged in");
    }
  }, []);

  const getUser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/refetch", { withCredentials: true });
      // console.log("User data refetched:", res.data);
      setUser(res.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        console.log("User not logged in or refetch endpoint not found");
      } else {
        console.error("An error occurred:", err);
      }
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
