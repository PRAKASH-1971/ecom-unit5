import React, { useEffect } from 'react'
import {Box} from "@chakra-ui/react"
import FilterComponent from '../Components/FilterComponent'
import {useSelector, useDispatch} from "react-redux"
import { fetchData } from '../Redux/action'

const Products = () => {
  const products = useSelector((store)=> store.ecommerceData.products)
 const dispatch = useDispatch();

 useEffect(()=>{
  if(products?.length === 0){
    dispatch(fetchData());
  }
 },[dispatch, products?.length]);


  console.log(products);


  return (
    <div>
        <Box><FilterComponent/></Box>
        <Box>
            {/* <Products /> */}
        </Box>
    </div>
  )
}

export default Products