import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import GroceryItem from './GroceryItem';

function GroceryList({ grocery, removeGrocery, toogleGrocery, editGrocery }){
    if(grocery.length){
        return(
        <Paper>
            <List>
            {grocery.map((list, i) => (
                <>
                <GroceryItem 
                    id={list.id} 
                    task={list.task} 
                    key={list.id} 
                    completed={list.completed} 
                    removeGrocery={removeGrocery} 
                    toogleGrocery={toogleGrocery} 
                    editGrocery={editGrocery}   
                    />
                { i < grocery.length -1 && <Divider/>}
                </>
            ))}
            </List>
        </Paper>
    );
    }
    return null;
}

export default GroceryList;