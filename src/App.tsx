import { useState } from 'react';
import { Container, Area, Header } from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem'; 
import { AddArea } from './components/AddArea'; 

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name:'Buy the bread', done: false},
    {id: 2, name:'Buy the cake', done: true}
  ]); 
  return (
    <Container>
      <Area>
        <Header>
            To Do List
        </Header>

        {/* Region for add a new task */}
        <AddArea />

        {list.map( (item, index) => (
          <ListItem key={index} item={item}/>
        ))}

        <h1>To Do B7WEB</h1>
      </Area>
    </Container>
  );
 }

export default App;