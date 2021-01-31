import React from "react"
import "./styles.css"

export default function Home() {
  return (
      <div style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          backgroundColor: 'black'
      }}>
        <h2 style={{
            fontFamily: 'sans-serif',
            fontWeight: 'normal',
            color: 'white'
        }}>Welcome to goal_tracker!</h2>
        <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/qGyPuey-1Jw?autoplay=1&mute=1" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
        />
      </div>
  )
}
