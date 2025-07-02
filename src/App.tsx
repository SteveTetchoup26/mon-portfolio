import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/layouts/MainLayout.tsx'
import LandingPage from './components/LandingPage.tsx'
import './index.css'
import WorkDetail from './components/WorkDetail.tsx'

const App = () => {
  return (
    <div className='w-full mx-auto min-h-screen font-poppins'>
      <Routes>
        <Route path='/' element={ 
            <MainLayout>
                <LandingPage />
            </MainLayout> }>
        </Route>
        <Route path='/works/:id' element={ 
            <MainLayout>
                <WorkDetail />
            </MainLayout> }>
        </Route>
      </Routes>
    </div>
  )
}

export default App
