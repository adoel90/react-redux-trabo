import React from 'react';

const UserListView = props => { 

    const { openModal, userList, selected, handleUserSelect, data} = props;

    return (
      <tr>
        <td><input type="checkbox" onChange={(e) => handleUserSelect(e)} /></td>
        <td><img src={data.avatar} alt="Avatar" /></td>
        <td>{data.first_name}</td>
        <td>{data.last_name}  </td>
        <td>
          <input type="button" value="Edit" onClick={(e, data) => openModal(e, data)} />
        </td>
      </tr>
    ) 


}

export default UserListView;