import { createContext, useState } from "react";


export const searchContext = createContext()

const SearchProvider = ({children}) => {

    const [searchType, setSearchType] = useState("")

    return(
        <searchContext.Provider value={{searchType, setSearchType}}>
            {children}
        </searchContext.Provider>
    )
}

export default SearchProvider