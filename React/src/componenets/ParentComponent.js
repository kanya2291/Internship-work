import React,{ useState ,useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

export const ParentComponent = () => {
    const [age,setAge]=useState(25)
    const [Salary,setSalary]=useState(50000 )
    const incrementAge =useCallback(()=>{
        setAge(age+1)
    },[age])
    const incrementSalary=useCallback(()=>{
        setSalary(Salary+1000)
    },[Salary])

  return (
    <div>
        <Title />
        <Count text="Age" count={age} />
        <Button handleClick={incrementAge}>Increment Age</Button>
        <Count text="Salary" count={Salary} />
        <Button handleClick={incrementSalary}>Increment Salary</Button>


    </div>
  )
}
