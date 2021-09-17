/* eslint-disable no-unused-vars */
// useState can hold the information we get from the API, useEffect runs that fetch call when our component mounts
import React, {useState, useEffect} from 'react';
import './App.css';


function ItemDetail({ match }) {
    useEffect(() => {
        fetchItem();
    },[]);

    const [item, setItem] = useState({
        images:{}
    });

    const fetchItem = async() => {
        // const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/store/get?ids=${match.params.id}`);
        // const item = await fetchItem.json();
        // setItem(item);
        // console.log(item);
    };

  return (
   <div>
       <h1>Item</h1>
       {/* <h1>{item.name}</h1>
       <img src={item.images.transparent} alt="" /> */}
   </div>
  );
}

export default ItemDetail;
