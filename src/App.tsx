import { Antonym, Landing, Vmax } from './pages';
import { GlobalStyles } from './GlobalStyles';
import { Routes, Route } from 'react-router-dom';
import ShiftA from './pages/ShiftA/ShiftA';

function App() {

    return (
        <>
            <GlobalStyles />
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/antonym' element={<Antonym />} />
                <Route path='/vmax' element={<Vmax />} />
                <Route path='/shifta' element={<ShiftA />} />
            </Routes>
        </>
    )
}

export default App
