import React, { createContext, useEffect, useRef, useState } from 'react'
import './search.css'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { updateProducts } from '../../redux/reducers/productSlice';

const Search = () => {
    const [searchTerm, setSearch] = useState("");
    const [categorySearch, setCategorySearch] = useState("");
    const searchContext = createContext();

    
    const [results,setResults] = useState([]);
    const resultRef = useRef(null);
    const searchbarRef = useRef(null);
    const [clickedOutside, setClickedOutside] = useState(false);


    //redux
    const currentProducts = useSelector((state) => state.products);
    const dispatch =useDispatch();

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleCategorySearch = (e) => {
        setCategorySearch(e.target.value);
    }    

    const handleClick = (itemname) => {
        setSearch(itemname);
        console.log(itemname);
    }

    const fetchData = async () => {
        try{
            const response = await fetch("http://localhost:8000/api/products/", {
                method: 'GET',
                headers: {'content-type': 'application/json',}
            });
    
            if(response.ok){
                const data = await response.json();
                console.log(data);
                setResults(data);
                
                //redux
                dispatch(updateProducts(data));
            }
            else if(response.status === 400){
                console.log("error")
            }
        } catch (error) {
            console.log(error.message);
        }

    }

    useEffect(() => {
        fetchData();
      
    },[]);

    useEffect(() => {
        function handleClickOutside(event) {
            // Check if the clicked element is not the target element or its descendants
            if (resultRef.current && !resultRef.current.contains(event.target) && !searchbarRef.current.contains(event.target) ) {
              // Set clickedOutside state to true
              //console.log("clicked outside");
              resultRef.current.style.display = 'none';

              setClickedOutside(true);
            } else {
              // Set clickedOutside state to false
              //console.log("clicked inside");
              resultRef.current.style.display = 'flex';
              setClickedOutside(false);
            }
          }

          document.addEventListener('click', handleClickOutside);

          return () => {
            document.removeEventListener('click', handleClickOutside);

          };

    },[searchTerm])
  return (
    <div id='productsearch-container' ref={searchbarRef}>
    <input type='text' placeholder='Search Product...' id='productsearchbar' 
    value={searchTerm} onChange={handleSearch}/>

    <select id='categories' name='categories' onChange={handleCategorySearch}>
        <option default selected value=''>All Categories</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Fruits">Fruits</option>
        <option value="Food">Food</option>
        <option value="Electronics">Electronics</option>
        
    </select>
    <span className='icon-container'>
        <SearchIcon style={{color:'white'}}/>
    </span>

    
    
    <div id='results-list' ref={resultRef}>
        {results
        .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()) && item.category.toLowerCase().includes(categorySearch.toLowerCase())) // Filter items based on searchTerm
        .map((item, index) => (  // item should be the first argument in .map()
            <div key={index} className='result-item' onClick={() => handleClick(item.name)}>
                {item.name}
            </div>
        ))}
    </div>
    
    
        
    
    </div>
  )
}

export default Search
