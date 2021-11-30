import { Container } from './styles';
import { useState } from 'react';

 
export const AddArea = ( ) => {

    const [inputText, setInputText] = useState('');

    const handleKeyUp = () => {

    } 

    return(
        <Container  >
            <div className="image">+</div>
            <input 
                type="text" 
                placeholder="Add a task"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </Container>
    )
}