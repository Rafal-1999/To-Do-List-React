import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useEmptySearchParams = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);

        if (searchParams.get("szukaj") === "") {
            searchParams.delete("szukaj");
            navigate(`?${searchParams.toString()}`);
        }
    }, [location, navigate]);
};
