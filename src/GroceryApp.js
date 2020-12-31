import React, { useState, useEffect } from 'react';
import GroceryList from './GroceryList';
import ListForm from './ListForm';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import uuid from 'uuid/dist/v4';

function GroceryApp() {
    // Initialize the local storage or look for an item 'groceries in our case todo list
    const initialGrocery = JSON.parse(window.localStorage.getItem('groceries') || "[]");

    const [grocery, setGrocery] = useState(initialGrocery);
    // set groceries or todo list to the state
    useEffect(() => {
        window.localStorage.setItem("groceries", JSON.stringify(grocery))
    }, [grocery]);

    // Add Item to the list 
    const addGrocery = newGroceryText => {
        setGrocery([...grocery, {id: uuid(), task: newGroceryText, compoleted: false }]);
    }

    // Remove Item to the list
    const removeGrocery = groceryId => {
        const updatedGroceries = grocery.filter(item => item.id !== groceryId);
        setGrocery(updatedGroceries);
    }

    // Toggle Item check box 
    const toogleGrocery = groceryId => {
        const updatedGroceries = grocery.map( item => 
            item.id === groceryId ? { ...item, completed: !item.completed } : item    
        );
        setGrocery(updatedGroceries);
    }

    // Edit Grocery Item
    const editGrocery = (groceryId, newTask) => {
        const updatedGroceries = grocery.map( item =>
            item.id === groceryId ? { ...item, task: newTask } : item    
        );
        setGrocery(updatedGroceries);
    }   

    return (
        <Paper style={{
            padding: 0,
            marggin: 0,
            height: "100vh",
            background: "#fafafa"
            }} 
            elevation={0}
        >
            <AppBar color='secondary' position='static' style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color='inherit'>Grocery List With Hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{marginTop: '1rem'}}>
                <Grid item xs={11} md={8} lg={4}>
                    <ListForm addGrocery={addGrocery}/>
                    <GroceryList 
                        grocery={grocery} 
                        removeGrocery={removeGrocery}
                        toogleGrocery={toogleGrocery} 
                        editGrocery={editGrocery}   
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default GroceryApp;