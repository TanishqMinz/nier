"use client"

import Link from "next/link"
import { useEffect } from "react"
import "../theme.css"

export default function SilentHillPage() {
  useEffect(() => {
    // Set Silent Hill theme colors
    document.documentElement.style.setProperty("--bg-color", "#8b0000")
    document.documentElement.style.setProperty("--text-color", "white")
    document.documentElement.style.setProperty("--bg-color-rgb", "139, 0, 0")
    document.documentElement.style.setProperty("--text-color-rgb", "255, 255, 255")
    document.documentElement.style.setProperty(
      "--theme-image",
      "url('/placeholder.svg?height=200&width=300&text=Silent+Hill+Theme')",
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

  return (
    <>
      <div className="page-transition silent-hill-transition"></div>

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
            <button>
              <span className="label" data-label="Bachira">
                Bachira
              </span>
            </button>
          </Link>
          <Link href="/silent-hill">
            <button className="active">
              <span className="label" data-label="Silent Hill">
                Silent Hill
              </span>
            </button>
          </Link>
        </nav>
      </div>

      {/* Content above video */}
      <div className="silent-hill-content">
        <div className="container">
          <header>
            <div className="silent-hill-text">
              <p>In my restless dreams, I see that town</p>
              <h1><span>SILENT HILL</span></h1>
              <p>I remembered you having this song once on somewhere?</p>
              <br />
              <p>
                I guess this works better but the text doesn't look as creepy anymore
              </p>
            </div>
          </header>
        </div>
      </div>

      {/* Background video */}
      <div className="background-video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/3nnJ014Kln4?si=ji4WXlyPi-HHH4V8&mute=0&loop=1&controls=1&showinfo=0&rel=0"
          title="Silent Hill Atmospheric Video"
          className="video-iframe"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </>
  )
}
