import { Query, QueryContext } from "./Types";
import React, { createContext, useState } from "react";

const DEFAULT_CONTEXT = {
  query: {
    genre: "all",
    title: undefined,
  },
  setQuery: () => {},
};

const AppContext = createContext<QueryContext>(DEFAULT_CONTEXT);

const AppContextProvider: React.FC = ({ children }) => {
  const [query, setQuery] = useState(DEFAULT_CONTEXT.query as Query);

  return (
    <AppContext.Provider value={{ query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider };
export default AppContext;
