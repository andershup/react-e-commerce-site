import { createContext, useState, useEffect} from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

// import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
// temporary useEffect for products object upload to firestore. 
  //   useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  useEffect(() => {
   const getCategoriesMap = async () => {
     const categoryMap = await getCategoriesAndDocuments('categories')
     setCategoriesMap(categoryMap)
     console.log(categoryMap)
   }
  
  getCategoriesMap()
}, [])

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

