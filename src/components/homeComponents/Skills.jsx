import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

function Skills() {
  const [goals, setGoals] = useState([])  
  const [error, setError] = useState(false)  
  const data = useSelector(state => state.ui.landingPage)  

  
  useEffect(() => {
    if (!data || !data.Mission_and_Goals) {
      setError(true)  
    } else {
      setGoals(data.Mission_and_Goals)  
      setError(false)  
    }
  }, [data])  

  return (
    <div className='skills-main flex w-full h-fit bg-[#333] py-8 px-5 gap-12 items-center justify-center'>
      {error ? (
        <h1>Data Not Loaded</h1>  // Show error if there's no data
      ) : (
        goals.length > 0 ? (
          goals.map(item => (
            <div className='h-52 w-52 rounded-lg flex flex-col justify-center py-4 px-3 bg-white' key={item._id}>
              <div className='image h-16 w-16'>
                <img src={item.image} alt={item.title} className='object-cover w-full h-full rounded-full'/>
              </div>
              <h1 className='heading2 my-2 text-2xl sm:text-xl font-["Montserrat"]'>{item.title}</h1>
              <p className='text-gray-500 text-sm'>{item.content}</p>
            </div>
          ))
        ) : (
          <p>No goals available.</p>  
        )
      )}
    </div>
  )
}

export default Skills
