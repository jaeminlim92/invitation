import './App.css'
import React from 'react'
import Map from './components/Map'
import MyGallery from './components/MyGallery'
import Layout from './components/Layout'
import HeaderIndex from './components/HeaderIndex'

function App() {
  return (
    <Layout>
      <HeaderIndex />
      <MyGallery />
      <Map />
    </Layout>
  )
}

export default App
