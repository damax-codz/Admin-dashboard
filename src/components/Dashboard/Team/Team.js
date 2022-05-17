import React, {useState, useEffect} from 'react';
import './Teams.css'
import male from '../../../images/male.jpg' 




const Team = () => {

    const [Team, setTeam] = useState([])

    const url = process.env.REACT_APP_TEAM_URL;

    useEffect(() => {
        fetch(url)
    .then(response => response.json())
    .then(data => setTeam(data.data))
   
    }, [])
    
    console.log(Team)
    
  return (
    <div className="container">
            

            <div className="set">

              <div  className="tab">
                 <table>
                     <thead>
                         <tr>
                             <th> FIRST NAME</th>
                             <th> LAST NAME</th>
                             <th> EMAIL</th>
                             <th> PHONE NO</th>
                             <th> GENDER</th>
                             <th> IMAGE</th>

                               
                         </tr>

                         <tr>

                         </tr>
                     </thead>

                     <tbody>

                         {
                             Team ? Team?.map((Team, idx) => (
                            <tr key={idx}>

                             
                             <td> <p> <span> {Team.firstname}</span></p> </td>
                             <td> <p> <span> {Team.lastname}</span> </p> </td>
                             <td> {Team.email}</td>
                             <td> {Team.phone}</td>
                             <td> {Team.gender}</td>
                             {<img src={male} alt= 'a Fufu2' />}
                             
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

