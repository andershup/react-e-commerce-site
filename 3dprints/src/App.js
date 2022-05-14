import Directory from './components/directory/directory.component.jsx'

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
    
      <Directory  categories ={categories}/>
    
   </div>
 )
};

export default App;

