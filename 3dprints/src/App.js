import CategoryItem from './components/category-item/category-item.component'
import Directory from './components/directory/directory.component' 

import './App.css'
const App = () => {
  const categories = [
    {
      id: 1,
      title: 'books'
    },
    {
      id: 2,
      title: 'books'
    },
    {
      id: 3,
      title: 'books'
    },
    {
      id: 4,
      title: 'books'
    },
    {
      id: 5,
      title: 'books'
    },
  ];

 return (
   <div className='category-container'>
     <CategoryItem/>
      <Directory  categories ={categories}/>
    
   </div>
 )
};

export default App;

