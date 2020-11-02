import React, { useContext } from 'react';
import FellowContext from './FellowContext'; 

const FellowProfile = () => {

    const { users } = useContext(FellowContext);  
            return (
            <div style={staffStyle}>
                <table class="table table-condensed">
                        <thead>
                            <tr>
                                <th scope="colgroup">Photo Id</th>
                                <th scope="colgroup">Name</th>
                                <th scope="colgroup">Email</th>
                                <th scope="colgroup">Phone</th>
                            </tr>
                        </thead>
                {users.map((item) => {
                    return(
                        <tbody>
                            <tr>
                                <th> <img src={item.picture.thumbnail}></img></th>
                                <td>{item.name.first} {item.name.last}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                            </tr>
                        </tbody>
                    )})}
                </table>
            </div>
            )}

const staffStyle = {
    padding: '12px',
    borderBottom: '17px gold solid',
    background: 'grey'

}

export default FellowProfile;
