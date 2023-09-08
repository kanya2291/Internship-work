import Employee1 from "./Employee1";
import Employee from "./Employee";
function Task3(){
    const imgs = [
      {
          id: 0,
          head: 'Class based component with props',
          Title:'Welcome to Employee component',
          name:"Sonu",
          age:23,
  
      },
      {
          id: 1,
          head: 'Class based component with props',
          Title:'Welcome to Employee component',
          name:"Loukya",
          age:1,
      },
      {
          id: 2,
          head: 'Class based component with props',
          Title:'Welcome to Employee component',
          name:"Divya",
          age:20
      },
    ];
    const imgss=[
  
      {
          id: 3,
          name:"Gayatri",
          course:"MBBS",
  
  
      },
      {
          id: 4,
          name:"sonu",
          course:"BTECH",
      },
  ];
    return(
      <div> 
        {
        imgs.map((u) => {
             return <Employee key={u.id} Head={u.head} title={u.Title} name={u.name} age={u.age} ></Employee>
               })
         }  
        {imgss.map((u)=>{
          return <Employee1 key={u.id} name={u.name} course={u.course}></Employee1>
        })
        } 
      </div>
    )
  }
  export default Task3