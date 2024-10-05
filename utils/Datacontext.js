import React,{createContext,useState,useContext} from 'react';

const DataContext = createContext();

export const DataProvider = ({children}) =>{
    const [firstquestion,setfirstQuestion] = useState(null);

    return (
        <DataContext.Provider value = {{firstquestion,setfirstQuestion}}>
        {children}
        </DataContext.Provider>
    );
};

export const useDataContext =()=>{
    return useContext(DataContext);
}