import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";

const Nav = () => {
    // global state
    let isLogin = useSelector((state) => state.isLogin);
    isLogin = isLogin || localStorage.getItem("userId");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //state
    const [isOpen, setIsOpen] = useState(false);

    //logout
    const handleLogout = () => {
        try {
            dispatch(authActions.logout());
            toast.success("Logout Successfully");
            navigate("/");
            localStorage.clear();
        } catch (error) {
            toast.error("Internal Server Error");
            console.log(error);
        }
    };
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div></div>
    );
};

export default Nav;
