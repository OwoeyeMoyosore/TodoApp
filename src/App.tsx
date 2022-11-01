import React from 'react';
import './App.css';
// import { Container } from '@mui/system';
import {Modal, Container,Box,Input,TextField,Button} from '@mui/material';
import CustomCard from './components/customCard';
import { CardDto } from './@types/props';
import { CustomCardProps } from './@types/props';

const App: React.FC = () => {
  const [todo,setTodo] = React.useState<CardDto>({
    name:'',
    description:'',
  });
  const [allTodo,setAllTodo] = React.useState<CardDto[]>([]);
  const [isEdit, setEdit] = React.useState(false)
  const [index,setIndex] = React.useState(1);
  const [show,setShow] = React.useState(false)
  
  const handleTodo = (type: "add" | "delete" |"update", ind?: number) => {
    if(type === "add"){
      allTodo.push(todo);
      setTodo({
        name:'',
        description: ''
      });
      setShow(false);
      setAllTodo(allTodo)
    }
    if (type === "delete"){
      let data = [...allTodo];
      data.splice(index, 1)
      console.log(data)
      setAllTodo(data);
    }

    if (type === "update"){
      let data = {ind, name:todo.name, description: todo.description}
      setTodo(data);
      let newTodo = allTodo.map(ind => {
        if(allTodo.indexOf(ind) === index){
          return {...ind, name:todo.name, description:todo.description}
        }
        return ind;
      })
      setAllTodo(newTodo);
      setEdit(false);
      setShow(false)

      // let data = allTodo[ind as number];
      
      
      // setShow(true);
      
      // npm install @material-ui/core @material-ui/icons @chec/commerce.js @stripe/react-stripe-js @stripe/stripe-js react-router-dom react-hook-form 
        
      
    }
  };

  const style = {
    position : "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  }
  return(
    <Container sx={{mt: 5}}>
      <Button sx={{mt:20,mb: 5 ,m :"auto", width:"20%", display:"block"}}
      variant="contained"
      onClick={() => setShow(!show)}>
        Add a new Task
      </Button>
      <Modal open={show} onClose={() => setShow(!show)}>
        <Container sx={style}>
        <TextField 
          label='Todo Task'
          value={todo.name}
          onChange={(name) => {
            setTodo({
              ...todo,
              name: name.target.value,
            });
          }} fullWidth sx={{display: "block"}} />

          <TextField
            label ="Todo Description" 
            fullWidth
            value={todo.description}
            onChange={(description) => {
              setTodo({
                ...todo,
                description: description.target.value,
              });
            }}
            sx={{mt:2, display:'block'}}/>

        <Button 
          variant="contained"
          onClick = {() => isEdit?handleTodo('update') : handleTodo("add")}
          sx={{mt:2, display:"block", float:"right"}}>{isEdit?'Edit Todo': "Add Todo"}</Button>
        </Container>
        
          
         
        
      </Modal>
   
      {allTodo.map(({description, name},index) => {
        return(
          <React.Fragment key={index}>
              <CustomCard 
                name={name}
                description ={description}
                handleDelete = {() => handleTodo("delete")}
                handleEdit={() => {
                  let ind = allTodo[index];
                  setTodo(ind);
                  setShow(true);
                  setIndex(index);
                  setEdit(true)
                  
                  // handleTodo("update",ind)}
                }}
              />
          </React.Fragment>
        )
      })}
      
    </Container>
  )
};

export default App;
