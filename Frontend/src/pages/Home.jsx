
import Hero from"../component/Hero";
import FeaturedPoducts from "../component/FeaturedPoducts";
import LeatestProducts from "../component/LeatestProducts";
import TrendingProducts from "../component/TrendingProducts";
import WhatShopexOffer from "../component/WhatShopexOffer";
import UniqueFeature from "../component/UniqueFeature";
import DiscountItem from "../component/DiscountItem";
import TopCategories from "../component/TopCategories"




import api from "../api/api"

import { Link } from "react-router-dom";

import {useState , useEffect} from "react"

function Home(){


    const [products , setProducts] = useState([])
    const[loading , setLoading] = useState(true)
 useEffect(()=>{

      async function getProducts(){

        try{
          
          const response = await api.get("/api/products");
          console.log(response.data);

          setProducts(response.data.products|| [])
        }

        catch(error){
          console.log(error)
        }
        setLoading(false)

      
      }

      getProducts();



    },[])


    if (loading) {
        return <p className="text-center mt-5">Loading...</p>;
    }



    return(
        <>
        
        <Hero/>
<FeaturedPoducts  products={products}/>
<LeatestProducts products={products}/>
<WhatShopexOffer/>
<UniqueFeature/>

<TrendingProducts products={products}/>

<DiscountItem/>
<TopCategories/>


        </>
    )
}


export default Home ;