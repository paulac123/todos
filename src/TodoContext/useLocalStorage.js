import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    //aqui agregamos parsedItem 
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    
    React.useEffect(() => {
        setTimeout(()=> {
            try { const localStorageItem =localStorage.getItem (itemName);
  
                let parsedItem;
        
            if (!localStorageItem) {
                localStorage.setItem('TODOS_V1', JSON.stringify([initialValue]));
                parsedItem = initialValue;
            
              } else {
                parsedItem = JSON.parse(localStorageItem);
            
              }
              setItem(parsedItem)
              setLoading(false);
            }catch(error){
                setLoading(false);
                setError(true);

            }
        },2000)
      });     
    
        const saveItem = (newItem) => {
          localStorage.setItem('TODOS_V1',JSON.stringify(newItem));
          setItem(newItem);
      
        };  
        return {item, 
            saveItem,
            loading,
            error};
          
          }
  

      export { useLocalStorage};
      
      // localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//  {text: 'Cortar cebolla' , completed:true},
//   {text: 'Tomar  curso de react.js' , completed:false},
//   {text: 'Llorar con la llorona' , completed:false},
//   {text: 'LALALA' , completed:false},
  
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

  