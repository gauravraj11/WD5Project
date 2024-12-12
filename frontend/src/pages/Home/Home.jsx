import React, { useContext } from "react";
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import { StoreContext } from "../../Context/StoreContext";
function Home() {
  const { food_list } = useContext(StoreContext);
  return (
    <div>
      <Header />
      <Menu dishes={food_list}/>
      <Footer />
    </div>
  )
}

export default Home
