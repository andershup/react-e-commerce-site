

import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router-dom'

// import MyImage from '../../assets/images/beginner.para.jpg'
// console.log(MyImage)
const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'First Wings',
      imageUrl: '/images/beginner.para.jpg',
    },
    {
      id: 2,
      title: 'Progression Wings',
      imageUrl: "../../assets/images/beginner-paraglider.webp"
    },
    {
      id: 3,
      title: 'XC Wings',
      imageUrl: '/images/paraglider-a.jpg',
    },
    {
      id: 4,
      title: 'Sports Wings',
      imageUrl: '/images/tandem-paraglider.jpg',
    },
    {
      id: 5,
      title: 'Performance Wings',
      imageUrl: '/images/tandem-paraglider.jpg',
    },
    {
      id: 6,
      title: 'Competition Wings',
      imageUrl: '/images/tandem-paraglider.jpg',
    },
  ];

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
