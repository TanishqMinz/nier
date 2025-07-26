"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import "../theme.css"

export default function MikuPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [lightboxTitle, setLightboxTitle] = useState<string>("")

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
    {
      id: 1,
      title: "cool figure",
      src: "/ac529ef9822aa5e15d1779f9c65a82f1.jpg",
    },
    {
      id: 2,
      title: "Fortnite battle pass",
      src: "/hatsune-miku-joins-fortnite.jpg",
    },
    {
      id: 3,
      title: "Cute",
      src: "/hd-adorable-hatsune-miku-art-anuzjvsnrxg422dt.jpg",
    },
    { id: 4, title: "Pokemon?", src: "/volttackle.jpg"},
    {
      id: 5,
      title: "Basic but pretty much the original",
      src: "/R.40c3a4ed01204bd8094e6cb21a0813ac",
    },
    {
      id: 6,
      title: "Anime",
      src: "/R.e6bcd61f341e52b7fae1d73587880372",
    },
    {
      id: 7,
      title: "By yukomeow_ on insta",
      src: "/436175775_1155071859163975_9167521320672195422_n.jpg",
    },
    {
      id: 8,
      title: "Legendary song",
      src: "/SONG_PV027_illustration.png",
    },
  ]

  const openLightbox = (src: string, title: string) => {
    setLightboxImage(src)
    setLightboxTitle(title)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
    setLightboxTitle("")
  }

  const downloadImage = async (src: string, title: string) => {
    try {
      const response = await fetch(src)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `${title.replace(/[^a-z0-9]/gi, "_").toLowerCase()}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Download failed:", error)
    }
  }

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

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="miku-lightbox-close" onClick={closeLightbox}>
              ×
            </button>
            <img src={lightboxImage || "/placeholder.svg"} alt={lightboxTitle} className="lightbox-image" />
            <div className="lightbox-controls">
              <h3>{lightboxTitle}</h3>
              <button
                className="miku-lightbox-btn"
                data-label="DOWNLOAD"
                onClick={() => downloadImage(lightboxImage, lightboxTitle)}
              >
                Download
              </button>
            </div>
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
              <span>Miku</span> Gallery
            </h1>
          </header>

          <main>
            <div className="content">
              <p>Well you know Miku is another one of your obsessions so you get the point</p>

              <div className="pinterest-grid">
                {imageCards.map((card) => (
                  <div key={card.id} className="pinterest-card">
                    <div className="card-image">
                      <img
                        src={card.src || "/placeholder.svg"}
                        alt={card.title}
                        onClick={() => openLightbox(card.src, card.title)}
                        style={{ cursor: "pointer" }}
                      />
                      <div className="card-overlay">
                        <h3>{card.title}</h3>
                        <div className="card-actions">
                          <button
                            className="miku-card-btn"
                            data-label="VIEW"
                            onClick={() => openLightbox(card.src, card.title)}
                          >
                            View
                          </button>
                          <button
                            className="miku-card-btn"
                            data-label="SAVE"
                            onClick={() => downloadImage(card.src, card.title)}
                          >
                            Download
                          </button>
                        </div>
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
