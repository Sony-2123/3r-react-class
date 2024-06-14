// import Images from "./components/image.js";
import Listcomponent from "./components/list.js";
//  import TableComponent from "./components/table.js";
//  import FormsComponent from "./components/forms.js";
import ButtonComponent from "./components/button.js";
// import Heading1,{Heading2,Heading3,Heading4,Heading5} from "./components/heading.js";
// function Hello(){
//   const isSubscribed=false
//   return(
//     <div>
//       <Heading1/>
//       <Heading2/>
//       <Heading3/>
//       <Heading4/>
//       <Heading5/>
//     </div>
//   )
// }
// export default Hello

// function Hello(){
//   return
//    const employee={
//     name:"sony",
//    secondName:"ram"
//   }
//   const{name,secondName}=employee
// }
//  export default Hello
// function Hello(){
//   return(
//   <div className="nemm">
//     <h1>Helloworld {name}</h1>
//     <h1>Helloworld {secondName}</h1>
//   <button onClick={()=>{}}>hello</button>
//   </div>
// )
 
// }
// export default Hello
// ------------------------------------------------------
// function Hello() {
//   const isSubscribed=true
//   if (isSubscribed) {
//     return <h1>Thanks for Subscribing</h1>
    
//   }else{
//     return<h1>please Subscribe</h1>
//   }
  
// }

// export default Hello
//-------------------------------------------------------
//COMPONENT return
// function Hello() {
//   const isSubscribed=true
  //if (isSubscribed) {
//     return <Listcomponent/>
    
//   }else{
//     return<h1>please Subscribe</h1>
//   }}
// //(or)
//   return(
//     <div> 
//       {
// isSubscribed
// ?
// <Listcomponent/>
// :

// <h1>please Subscribe</h1>

//       }
//     </div>
//   )
  
// }

// export default Hello

//--------------------------------------------------



//filter method
import React from "react";
  
  
  const employees=[
    {

      name:"sony",
      role:"web developer",
      salary:"1000000",
      company:"It solutions"
    },
    {
      name:"sunil",
      role:"web developer",
      salary:"2000000",
          company:"It solutions"
    },
    {
      name:"Kusuma",
      role:"web developer",
      salary:"3000000",
          company:"It solutions"
    },
    {
      name:"Hari",
      role:"web developer",
      salary:"4000000",
          company:"It solutions"
    },
    {
      name:"Gnana",
      role:"App developer",
      salary:"5000000",
          company:"It solutions"
    },
    {
      name:"santhosh",
      role:"Game developer",
      salary:"6000000",
          company:"It solutions"
    }
  ];
  export default  function App(){
   return (
    <div>
      {employees.filter(employees => employees.salary<3000000).map(filteredEmployees=>(
        <li>
          {filteredEmployees.salary}
        </li>
      ))}
    </div>
   ) 
  }
  export default  function Hello(){
  return(
    <>
    {
      employees.map((eachEmployee)=>{

            return(

          <div>
          
            <table>
              <tr>
                <th>
              
              {eachEmployee.name}
              </th>
              <th>  
              {eachEmployee.salary}
         
              </th>
             <th> {eachEmployee.company}</th>
             <th>  
              {eachEmployee.role}
         
              </th>
            
            </tr>
           
            </table>
          </div>
        )
      })
    }
    </>
  )
}


