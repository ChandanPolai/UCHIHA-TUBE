import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthLayout({ authentication = true, guestComponent = false, children }) {
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      if (guestComponent) return;
      else navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  if (!authStatus && guestComponent) return guestComponent;

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}

export default AuthLayout;
