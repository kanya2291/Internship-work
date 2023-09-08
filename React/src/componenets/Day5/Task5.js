import Task5_1 from "./Task5_1";


function Task5(){
    const array=[
        {
          SNO: "1",
          Image:'./assets/smartwatch.jpg',
          Name: "MI watch",
          price: 1500,
          qty: 15,
        },
        {
          SNO: "2",
          Image: './assets/smartwatch.jpg',
          Name: "Boat watch",
          price: 2700,
          qty: 1,
        },
        {
          SNO: "3",
          Image: './assets/smartwatch.jpg',
          Name: "FastTrack watch",
          price: 1300,
          qty: 3,
        },
        {
          SNO: "4",
          Image: './assets/smartwatch.jpg',
          Name: "Samsung watch",
          price: 1800,
          qty: 11,
        },
        {
          SNO: "5",
          Image: './assets/smartwatch.jpg',
          Name: "Apple watch",
          price: 3000,
          qty: 0,
        },
      ];
      return(
        <>
        <center>
          <div id="division">
         <p className="text-success text-center">Product Cart</p>
        <p className="text-center">Paris is the department with the highest proportion of highly educated people</p> 
        </div>
        <div> 
          {
          array.map((u) => {
               return <Task5_1 key={u.SNO} image={u.Image} name={u.Name} pri={u.price} quality={u.qty} ></Task5_1>
                 })
           } 
           </div>
           </center>
           </>
      )
}
export default Task5;