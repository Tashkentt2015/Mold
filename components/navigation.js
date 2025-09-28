import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<style>
body.navigation-menu-open {
  overflow: hidden;
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="navigation-container4">
          <div className="navigation-container5">
            <Script
              html={`<script defer data-name="navigation">
(function(){
  const navigationToggle = document.getElementById("navigationToggle")
  const navigationMenu = document.getElementById("navigationMenu")
  const navigationOverlay = document.getElementById("navigationOverlay")
  const body = document.body

  function toggleMobileMenu() {
    const isActive = navigationToggle.classList.contains("active")

    if (isActive) {
      closeMobileMenu()
    } else {
      openMobileMenu()
    }
  }

  function openMobileMenu() {
    navigationToggle.classList.add("active")
    navigationMenu.classList.add("active")
    navigationOverlay.classList.add("active")
    body.classList.add("navigation-menu-open")
    navigationToggle.setAttribute("aria-expanded", "true")
  }

  function closeMobileMenu() {
    navigationToggle.classList.remove("active")
    navigationMenu.classList.remove("active")
    navigationOverlay.classList.remove("active")
    body.classList.remove("navigation-menu-open")
    navigationToggle.setAttribute("aria-expanded", "false")
  }

  // Toggle menu on button click
  navigationToggle.addEventListener("click", toggleMobileMenu)

  // Close menu when clicking on overlay
  navigationOverlay.addEventListener("click", closeMobileMenu)

  // Close menu when clicking on navigation links (mobile)
  navigationMenu.addEventListener("click", (e) => {
    if (e.target.classList.contains("navigation-link")) {
      closeMobileMenu()
    }
  })

  // Close menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navigationToggle.classList.contains("active")) {
      closeMobileMenu()
    }
  })

  // Close menu on window resize to desktop
  window.addEventListener("resize", () => {
    if (
      window.innerWidth > 991 &&
      navigationToggle.classList.contains("active")
    ) {
      closeMobileMenu()
    }
  })

  // Prevent scroll restoration issues
  window.addEventListener("beforeunload", () => {
    closeMobileMenu()
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <nav id="navigation" className="navigation">
          <div className="navigation-container">
            <a href="/">
              <div aria-label="Mold 3000 Homepage" className="navigation-logo">
                <span className="navigation-logo-text">Mold 3000</span>
              </div>
            </a>
            <ul id="navigationMenu" className="navigation-menu">
              <li className="navigation-item">
                <a href="/">
                  <div className="navigation-link">
                    <span>Main</span>
                  </div>
                </a>
              </li>
              <li className="navigation-item">
                <a href="/catalog">
                  <div className="navigation-link">
                    <span>Catalog</span>
                  </div>
                </a>
              </li>
              <li className="navigation-item">
                <a href="/delivery">
                  <div className="navigation-link">
                    <span>Delivery</span>
                  </div>
                </a>
              </li>
              <li className="navigation-item">
                <a href="/contacts">
                  <div className="navigation-link">
                    <span>Contacts</span>
                  </div>
                </a>
              </li>
            </ul>
            <a
              href="https://wa.me/905370399890?text=Hello!%20I%20want%20to%20order%20a%20mold."
              target="_blank"
              rel="noreferrer noopener"
            >
              <div
                target="_blank"
                rel="noopener noreferrer"
                className="navigation-whatsapp btn btn-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="navigation-whatsapp-icon"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719"
                  ></path>
                </svg>
                <span>WhatsApp</span>
              </div>
            </a>
            <button
              id="navigationToggle"
              aria-label="Toggle navigation menu"
              aria-expanded="false"
              aria-controls="navigationMenu"
              className="navigation-toggle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="navigation-navigation-toggle-icon1 navigation-toggle-menu"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 5h16M4 12h16M4 19h16"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="navigation-navigation-toggle-icon2"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 6L6 18M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div id="navigationOverlay" className="navigation-overlay"></div>
        </nav>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
          .navigation-container4 {
            display: none;
          }
          .navigation-container5 {
            display: contents;
          }
          .navigation-navigation-toggle-icon1 {
            color: var(--color-on-surface);
            width: 24px;
            height: 24px;
            transition: all var(--animation-duration-fast)
              var(--animation-curve-primary);
          }
          .navigation-navigation-toggle-icon2 {
            top: 50%;
            left: 50%;
            color: var(--color-on-surface);
            width: 24px;
            height: 24px;
            opacity: 0;
            position: absolute;
            transform: translate(-50%, -50%) rotate(90deg);
            transition: all var(--animation-duration-fast)
              var(--animation-curve-primary);
          }
        `}
      </style>
    </>
  )
}

export default Navigation
