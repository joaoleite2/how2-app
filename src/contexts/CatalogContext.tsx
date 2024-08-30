import React, { createContext, useState } from "react";

interface CatalogContextProps {
  screen:string;
  setScreen:React.Dispatch<React.SetStateAction<string>>;
}

export const CatalogContext = createContext<CatalogContextProps>({
  screen:'',
  setScreen:()=>{}
})

export const CatalogProvider:React.FC<any> = ({children}) => {
  const [screen, setScreen] = useState('catalog');

  return(
    <CatalogContext.Provider value={{
      screen,
      setScreen
    }}>
      {children}
    </CatalogContext.Provider>
  )
}