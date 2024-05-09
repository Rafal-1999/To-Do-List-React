import { useLocation, useNavigate } from "react-router-dom";

export const useQueryParameter = (key) => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get(key);
    return query;
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return ({ key, inputValue }) => {
        const searchParams = new URLSearchParams(location.search);

        if (inputValue === "") {
            searchParams.delete(key);
        } else {
            searchParams.set(key, inputValue);
        }

        navigate(`${location.pathname}?${searchParams.toString()}`);
    };
};
