import './App.css'
import React, {useEffect} from 'react'
import Map from './components/Map'
import MyGallery from './components/MyGallery'
import Layout from './components/Layout'
import HeaderIndex from './components/HeaderIndex'
import Transfer from './components/Transfer'
import Greeting from './components/Greeting'

function App() {
  return (
    <Layout>
      <HeaderIndex />
      <Greeting />
      <MyGallery />
      <Map />
      {/*<Transfer />*/}
    </Layout>
  )
}

export default App
