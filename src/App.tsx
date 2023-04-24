import { useState } from 'react'
import { Antonym, Landing } from './pages';
import { GlobalStyles } from './GlobalStyles';
import { Routes, Route } from 'react-router-dom';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <GlobalStyles />
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/antonym' element={<Antonym />} />
            </Routes>
        </>
    )
}

export default App
