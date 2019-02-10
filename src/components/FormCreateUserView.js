
import React from 'react'

const FormCreateUserView = props => {
    const { handleInputChange, handleSave} = props;
    
    return (
        <form>
            <input type="text" name="name" placeholder="Type your name..." onChange={(e) => handleInputChange(e, 'data')} />
            <label> Type your name</label>
            <br />
            <br />

            <input type="text" name="job" placeholder="Job ?" onChange={(e) => handleInputChange(e, 'data')} />
            <label> Your job here</label>
            <br />
            <br />

            <button onClick={(e) => handleSave(e) }>Save</button>
      </form>
    )
}

export default FormCreateUserView;