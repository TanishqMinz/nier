"use client"

import Link from "next/link"
import { useEffect } from "react"
import "../theme.css"

export default function MikuPage() {
  useEffect(() => {
    // Set Miku theme colors
    document.documentElement.style.setProperty("--bg-color", "#86cecb")
    document.documentElement.style.setProperty("--text-color", "#373b3e")
    document.documentElement.style.setProperty("--bg-color-rgb", "134, 206, 203")
    document.documentElement.style.setProperty("--text-color-rgb", "55, 59, 62")
    document.documentElement.style.setProperty(
      "--theme-image",
      "url('/placeholder.svg?height=200&width=300&text=Miku+Theme')",
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

  const imageCards = [
    { id: 1, height: 250, title: "cool figure", src: "/ac529ef9822aa5e15d1779f9c65a82f1.jpg", description: "A digital artwork of Miku." },
    { id: 2, height: 180, title: "Fortnite battle pass", src: "/hatsune-miku-joins-fortnite.jpg", description: "Miku in neon lights." },
    { id: 3, height: 320, title: "Cute", src: "/hd-adorable-hatsune-miku-art-anuzjvsnrxg422dt.jpg", description: "Miku performing on stage." },
    { id: 4, height: 200, title: "Pokemon?", src: "/volttackle.jpg", description: "Character design sheet." },
    { id: 5, height: 280, title: "Basic but pretty much the original", src: "/R.40c3a4ed01204bd8094e6cb21a0813ac", description: "Scene from a music video." },
    { id: 6, height: 160, title: "Anime", src: "/R.e6bcd61f341e52b7fae1d73587880372", description: "Fan art illustration." },
  ]

  return (
    <>
      <div className="page-transition miku-transition"></div>

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
            <button className="active">
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

      <div className="page-content">
                  <div className="pattern">
            <div className="pattern-inner"></div>
          </div>
        <div className="container">
          <header>
            <h1>
              <span>Miku</span> Gallery
            </h1>
          </header>



          <main>
            <div className="content">
              <p>
                Well you know Miku is another one of your obsessions so you get the point
              </p>

              <div className="pinterest-grid">
                {imageCards.map((card) => (
                  <div key={card.id} className="pinterest-card">
                    <div className="card-image">
                      <img
                        src={card.src}
                      />
                      <div className="card-overlay">
                        <h3>{card.title}</h3>
                      </div>
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
