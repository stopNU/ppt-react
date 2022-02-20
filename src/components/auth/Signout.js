import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signout } from "../../store/auth-actions";

const Signout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signout());
  }, [dispatch]);

  return <div>You are now signed out!</div>;
};

export default Signout;
