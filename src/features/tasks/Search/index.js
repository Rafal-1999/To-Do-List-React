import { SearchEngine } from "./styled";
import { HiddenFormLabel } from "../styled";

const Search = () => {
    return (
        <form>
            <HiddenFormLabel htmlFor="search">Wyszukaj zadanie</HiddenFormLabel>
            <SearchEngine
                id="search"
                type="text"
                placeholder="Filtruj zadania"
                value=""
            />
        </form>
    )
};

export default Search;
