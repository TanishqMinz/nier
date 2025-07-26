"use client"

import Link from "next/link"
import { useEffect } from "react"
import "../theme.css"

export default function BachiraPage() {
  useEffect(() => {
    // Set Bachira theme colors
    document.documentElement.style.setProperty("--bg-color", "#ffff00")
    document.documentElement.style.setProperty("--text-color", "#000000")
    document.documentElement.style.setProperty("--bg-color-rgb", "255, 255, 0")
    document.documentElement.style.setProperty("--text-color-rgb", "0, 0, 0")
    document.documentElement.style.setProperty(
      "--theme-image",
      "url('/placeholder.svg?height=200&width=300&text=Bachira+Theme')",
    )

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

  const videos = [
    {
      id: 1,
      title: "Bachira Skills",
      embedId: "q6v0ATy1Vuw",
    },
    {
      id: 2,
      title: "Blue Lock Moments",
      embedId: "XFQJstsChbM",
    },
    {
      id: 3,
      title: "Monster Dribbling",
      embedId: "Qdne2ayzeyM",
    },
  ]

  return (
    <>
      <div className="page-transition bachira-transition"></div>

      <div className="topbar">
        <nav className="topbar-nav">
          <Link href="/">
            <button>
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
            <button className="active">
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

      <div className="page-content">
        <div className="pattern">
          <div className="pattern-inner"></div>
        </div>

        <div className="container">
          <header>
            <h1>
              <span>Bachira</span> Videos
            </h1>
          </header>

          <main>
            <div className="content">
              <p>Bachira cause blue lock goated and your hair inspo</p>
              <p>You should read the manga sometime</p>
              <p>maybe when you join college?</p>

              <div className="bachira-video-grid">
                {videos.map((video) => (
                  <div key={video.id} className="bachira-video-card">
                    <div className="bachira-video-container">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.embedId}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
