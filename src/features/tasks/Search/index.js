import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";
import { SearchEngine } from "./styled";
import { HiddenFormLabel } from "../styled";

const Search = () => {
    const query = useQueryParameter("szukaj");
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: "szukaj",
            inputValue: target.value.trim() ? target.value : ""
        });
    };

    return (
        <form>
            <HiddenFormLabel htmlFor="search">Wyszukaj zadanie</HiddenFormLabel>
            <SearchEngine
                id="search"
                type="text"
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </form>
    )
};

export default Search;
