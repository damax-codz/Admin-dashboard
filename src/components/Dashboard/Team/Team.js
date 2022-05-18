import React, {useState, useEffect} from 'react';
import './Teams.css'
import male from '../../../images/male.jpg' 




const Team = () => {

    const [Team, setTeam] = useState([])

    const url = 'https://fakerapi.it/api/v1/persons?_quantity=10';

    useEffect(() => {
        fetch(url)
    .then(response => response.json())
    .then(data => setTeam(data.data))
   
    }, [])
    
    console.log(Team)
    
  return (
    <div className="team">
            

            <div className="team-set">

              <div  className="team-tab">
                 <table>
                     <thead>
                         <tr>
                             <th> IMAGE</th>
                             <th> FIRST NAME</th>
                             <th> LAST NAME</th>
                             <th> EMAIL</th>
                             <th> PHONE NO</th>
                             <th> GENDER</th>
                            

                               
                         </tr>

                         <tr>

                         </tr>
                     </thead>

                     <tbody>

                         {
                             Team ? Team?.map((Team, idx) => (
                            <tr key={idx}>

                            {<img src={male} alt= 'a Fufu2' />}
                             <td> <p> <span> {Team.firstname}</span></p> </td>
                             <td> <p> <span> {Team.lastname}</span> </p> </td>
                             <td> {Team.email}</td>
                             <td> {Team.phone}</td>
                             <td> {Team.gender}</td>
                             
                             
                         </tr>
                             ) ) : null
                         }
                         
                     </tbody>
                 </table>
             </div>
            </div>

    </div>
  )
}

export default Team

