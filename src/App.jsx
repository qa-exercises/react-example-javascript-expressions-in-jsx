import React from 'react'
import './style.css'

export default function App() {
  const date = new Date().toDateString()

  return (
    <div>
      <p>The current date is {date}.</p>
    </div>
  )
}
