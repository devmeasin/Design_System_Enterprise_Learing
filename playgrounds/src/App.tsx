import { Button } from '@ds.e/react_ui/lib/';
import './App.css'

const App = () => {
    return (
        <div>
            <h1 className="animate-text">I am Jack </h1>
            <Button title='I am Button' onClick={() => console.log('Hello Bangladesh')}>Hello !!</Button>
        </div>
    )
}

export default App;