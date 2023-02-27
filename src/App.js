import "@cedcommerce/ounce-ui/dist/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout1 from "./Dashboard/Layout1";
import Layout2 from "./Dashboard/Layout2";
import Layout3 from "./Dashboard/Layout3";
import ProductList from "./Dashboard/ProductList";
import AnnouncementBarComp from "./TopAndSideBar/AnnouncementBarComp";
import SideBarComponent from "./TopAndSideBar/SideBarComponent";
import TopBarComponent from "./TopAndSideBar/TopBarComponent";
import "./style.css";
import AddProduct from "./Dashboard/AddProduct";
import HelpText from "./Dashboard/Help";
import NewJoinMember from "./Dashboard/NewJoinMember";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

export const ProductGridContext = createContext();

function App() {
  const [productData, setProductData] = useState();
  useEffect(() => {
    axios
      .get("https://dashboard-application-b2k5.onrender.com/productlist")
      .then((res) => {
        setProductData(res.data.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(productData)
  return (
    <>
      <BrowserRouter>
        <AnnouncementBarComp />
        <TopBarComponent />
        <SideBarComponent />
        <Routes>
          <Route exact path="/" element={<Layout1 />} />
          <Route exact path="/dashboard" element={<Layout1 />} />
          <Route exact path="/sales" element={<Layout2 />} />
          <Route exact path="/text" element={<Layout3 />} />
          <Route
            exact
            path="/productlist"
            element={
              <ProductGridContext.Provider value={productData}>
                <ProductList />
              </ProductGridContext.Provider>
            }
          />
          <Route exact path="/addproduct" element={<AddProduct />} />
          <Route exact path="/help" element={<HelpText />} />
          <Route exact path="/NewJoinMember" element={<NewJoinMember />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
