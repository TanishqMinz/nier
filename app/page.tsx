"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import "./theme.css"

interface Balloon {
  id: number
  x: number
  y: number
  color: string
  size: number
  speed: number
}

export default function StartPage() {
  const [balloons, setBalloons] = useState<Balloon[]>([])
  const [score, setScore] = useState(0)
  const [poppedCount, setPoppedCount] = useState(0)
  const [showRickRoll, setShowRickRoll] = useState(false)

  useEffect(() => {
    // Set start theme colors
    document.documentElement.style.setProperty("--bg-color", "#c8c2aa")
    document.documentElement.style.setProperty("--text-color", "#4d493e")
    document.documentElement.style.setProperty("--bg-color-rgb", "200, 194, 170")
    document.documentElement.style.setProperty("--text-color-rgb", "77, 73, 62")
    document.documentElement.style.setProperty("--theme-image", "none")

    // Add page transition class
    document.body.classList.add("page-enter")
    const timer = setTimeout(() => {
      document.body.classList.remove("page-enter")
    }, 500)

    return () => {
      clearTimeout(timer)
      document.body.classList.remove("page-enter")
    }
  }, [])

  useEffect(() => {
    // Animation loop for balloons
    const animationInterval = setInterval(() => {
      setBalloons((prevBalloons) => {
        const updatedBalloons = prevBalloons
          .map((balloon) => ({
            ...balloon,
            y: balloon.y - balloon.speed,
          }))
          .filter((balloon) => {
            if (balloon.y > -100) {
              return true
            } else {
              // Balloon escaped - lose 1 point
              setScore((prev) => Math.max(0, prev - 1))
              return false
            }
          })

        return updatedBalloons
      })
    }, 16) // ~60fps

    return () => clearInterval(animationInterval)
  }, [])

  const createBalloon = () => {
    const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#ff9ff3", "#54a0ff"]
    const newBalloons: Balloon[] = Array.from({ length: 5 }, () => ({
      id: Date.now() + Math.random(),
      x: Math.random() * (window.innerWidth - 100),
      y: window.innerHeight,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 40 + Math.random() * 40, // 40-80px
      speed: 1 + Math.random() * 2, // 1-3px per frame
    }))

    setBalloons((prev) => [...prev, ...newBalloons])
  }

  const popBalloon = (id: number) => {
    setBalloons((prev) => prev.filter((balloon) => balloon.id !== id))
    setScore((prev) => prev + 1)
    setPoppedCount((prev) => {
      const newCount = prev + 1
      if (newCount === 20) {
        setShowRickRoll(true)
      }
      return newCount
    })
  }

  const closeRickRoll = () => {
    setShowRickRoll(false)
  }

  const resetGame = () => {
    setScore(0)
    setPoppedCount(0)
    setBalloons([])
    setShowRickRoll(false)
  }

  return (
    <>
      <div className="page-transition start-transition"></div>

      <div className="topbar">
        <nav className="topbar-nav">
          <Link href="/">
            <button className="active">
              <span className="label" data-label="Nier">
                Nier
              </span>
            </button>
          </Link>
          <Link href="/miku">
            <button>
              <span className="label" data-label="Miku">
                Miku
              </span>
            </button>
          </Link>
          <Link href="/bachira">
            <button>
              <span className="label" data-label="Bachira">
                Bachira
              </span>
            </button>
          </Link>
          <Link href="/silent-hill">
            <button>
              <span className="label" data-label="Silent Hill">
                Silent Hill
              </span>
            </button>
          </Link>
        </nav>
      </div>

      {/* Score Display */}
      <div className="score-display">
        <div className="score-item">
          <span className="score-label">Score:</span>
          <span className="score-value">{score}</span>
        </div>
        <div className="score-item">
          <span className="score-label">Popped:</span>
          <span className="score-value">{poppedCount}</span>
        </div>
        <button className="reset-btn" onClick={resetGame}>
          Reset
        </button>
      </div>

      {/* Rick Roll Modal */}
      {showRickRoll && (
        <div className="rickroll-modal">
          <div className="rickroll-content">
            <button className="close-btn" onClick={closeRickRoll}>
              ×
            </button>
            <h2>CONGRATULATIONS!</h2>
            <p>You popped 20 balloons so here you go lol</p>
            <div className="rickroll-video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&start=0"
                title="Rick Roll"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="rickroll-text">Never gonna give you up! 🕺</p>
          </div>
        </div>
      )}

      <div className="page-content">
        <div className="pattern">
          <div className="pattern-inner"></div>
        </div>
        <div className="container">
          <header>
            <h1>
              <span className="flex items-center justify-center">GOOD LUCK ON YOUR EXAMS!</span>
            </h1>
          </header>
          <main>
            <div className="content">
              <h2 className="text-xl">Hey, hope you like this website lol</h2>
              <br />
              <br />
              <p>
                Between being worried about landing a job and being worried you being gone, I decided to make a website
                to basically help both, forget about jobs for a while and also apologize I guess?
              </p>
              <br />
              <p>Sooooooo let me know what you think of it and I do hope you like it!</p>
              <p>
                I'm not sure if you get the theme but it's actually from the Nier:Automata game. I used it cause well
                one of the last convos was you being suddenly obssessed over A2 and 2B and I really wanted to use the UI
                for something ever since I played that game.
              </p>
              <p>
                <br />
                <br />
                Do check out the other pages aswell. I tried to use transitions to change colors according to their
                themes. I was originally gonna add some artists too but you know hard to assign a color to a music
                artist
              </p>
              <div className="game-instructions">
                <h3> Balloon Game Instructions:</h3>
                <ul>
                  <li>Click balloons to pop them and gain points (+1 each)</li>
                  <li>If balloons escape off the top, you lose points (-1 each)</li>
                  <li>Pop 20 balloons for something lol</li>
                </ul>
              </div>
              <button onClick={createBalloon}>Click it lol</button>
            </div>
          </main>
        </div>
      </div>

      {/* Floating Balloons */}
      <div className="balloons-container">
        {balloons.map((balloon) => (
          <div
            key={balloon.id}
            className="floating-balloon"
            style={{
              left: `${balloon.x}px`,
              top: `${balloon.y}px`,
              backgroundColor: balloon.color,
              width: `${balloon.size}px`,
              height: `${balloon.size}px`,
            }}
            onClick={() => popBalloon(balloon.id)}
          />
        ))}
      </div>
    </>
  )
}
