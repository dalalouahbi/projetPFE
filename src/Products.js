import Productt from  './Productt';
import React, { Component }  from 'react';

function Products(props) {
  console.log("hi",props)
    return (
      <div class="container">
        <div class="row">
          {
            props.data.map((produit, index)=>{
              return <Productt key={index} data={produit} />
            })
          }
        </div>
      </div>
    )
  }export default Products;