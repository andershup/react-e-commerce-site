import CategoryItem from "./components/category-item/category-item.component";



const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Gifts',
      imageUrl: ''
    },
    {
      id: 2,
      title: 'Gifts'
    },
    {
      id: 3,
      title: 'Gifts'
    },
    {
      id: 4,
      title: 'Gifts'
    },
    {
      id: 5,
      title: 'Gifts'
    },
  ]
  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category}/>
      ))}
      </div>
    
  );
};

export default App;

