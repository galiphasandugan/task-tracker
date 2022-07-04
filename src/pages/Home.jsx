import React from 'react';
import Header from '../components/Header';
import ShowTasks from "../components/ShowTasks";
import starterData from '../helper/starterData'

const Home = ({starterData}) => {
  console.log(starterData);
  return (
    <div>
      <Header />
      <ShowTasks />
    </div>
  );
};

export default Home;
