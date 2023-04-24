import { Antonym, Landing, Vmax } from './pages';
import { GlobalStyles } from './GlobalStyles';
import { Routes, Route } from 'react-router-dom';

function App() {

    return (
        <>
            <GlobalStyles />
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/antonym' element={<Antonym />} />
                <Route path='/vmax' element={<Vmax />} />
            </Routes>
        </>
    )
}

export default App
