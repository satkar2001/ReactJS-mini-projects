import React,{useState,useEffect} from 'react'
import axios from 'axios'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import './body.css'
function Body(){
    const[items,setitems]=useState([])
    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
         .then(res=>{
          setitems(res.data.meals)
         }).catch(err=>{
             console.log(err)
         })

    }, [])

    const itemslist=items.map((obj)=>{
         return(
             <div className="col-md-4">

                 <img src={obj.strMealThumb} className='img-fluid' />
                 <p>{obj.strMeal}</p>
                 <p>{obj.idMeal}</p>
             </div>
         )
    })
    return(
    <div>
     <div className="row">
      {itemslist}
     </div>
    </div>
    )
}
export default Body