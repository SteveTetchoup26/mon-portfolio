import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/layouts/MainLayout.tsx'
import LandingPage from './components/LandingPage.tsx'
import './index.css'

const App = () => {
  return (
    <div className='w-full mx-auto min-h-screen font-poppins'>
      <Routes>
        <Route path='/' element={ 
            <MainLayout>
                <LandingPage />
            </MainLayout> }>
        </Route>
      </Routes>
    </div>
  )
}

export default App
