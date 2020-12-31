import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

function EditForm({ editGrocery, id, task, toogleEditForm }){
    const [value, handleChange, reset] = useInputState(task)
    return (
        <form onSubmit={e => {
            e.preventDefault();
            editGrocery(id, value);
            reset();
            toogleEditForm();
        }}
        style={{margin:"1rem 0", width:"100%"}}
        >
        <TextField margin="normal" value={value} onChange={handleChange} fullWidth autoFocus/>
        </form>
    );
}

export default EditForm;