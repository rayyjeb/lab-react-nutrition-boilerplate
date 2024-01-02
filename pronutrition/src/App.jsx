import { useState } from 'react'
import './App.css'
import Search from './Components/Search'
import FoodBox from './Components/FoodBox'
import foodData  from './resources/FoodData'

function App(){

  const [search, setSearch] = useState("")

  const noResult = foodData.filter((e) => {
    return e.name.toLowerCase().includes(search.toLowerCase())
  })
  
  let searchedContent = null;
  if (noResult.length === 0) {
    searchedContent = <p className='resultHeader'>No results found</p>; 
  } else {
    searchedContent = noResult.map((e, i) => {
      return <FoodBox data={e} index={i} />
    })
  }

  console.log(foodData)
  return(
    <>  
      <h1 className='HeaderText'>PRO NUTRITION</h1>
      <Search setSearch={setSearch}/>
      <p className='resultHeader'>{search}</p>
      {searchedContent}
    </>
  )
}

export default App