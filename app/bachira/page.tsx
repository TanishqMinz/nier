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
    { id: 1, iframedata:`<iframe src= "https://www.youtube.com/embed/q6v0ATy1Vuw" title="YouTube video player" frameborder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` },
    { id: 2, iframedata:`<iframe src="https://www.youtube.com/embed/XFQJstsChbM" title="YouTube video player" frameborder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` },
    { id: 3, iframedata:`<iframe src="https://www.youtube.com/embed/Qdne2ayzeyM" title="YouTube video player" frameborder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`  }
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
              <p>
                Bachira cause blue lock goated and your hair inspo 
              </p>
              <p>
                You should read the manga sometime
              </p>
              <p>
                maybe when you join college?
              </p>

              <div className="video-grid">
                {videos.map((video) => (
                  <div key={video.id} className="video-card">
                    <div dangerouslySetInnerHTML={{ __html: video.iframedata }}></div>
                  </div>
                ))}
              </div>
              <br/>
              <p>I'm not sure why the right side of each card is empty like that lol</p>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
