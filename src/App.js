import './App.css'
import React from 'react'
import Map from './components/Map'
import MyGallery from './components/MyGallery'
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <MyGallery />
      <Map />
    </Layout>
  )
}

export default App
