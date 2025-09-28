import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<style>
@media (min-width: 992px) {
.footer-content {
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: var(--spacing-4xl);
  align-items: start;
}
.footer-brand {
  text-align: left;
}
.footer-cta {
  text-align: left;
}
.footer-legal {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.footer-copyright {
  margin-left: auto;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-brand">
                <h3 className="footer-brand-title">Mold 3000</h3>
                <p className="footer-brand-description">
                  {' '}
                  Silicone molds for plaster and candles
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="footer-nav">
                <h4 className="footer-nav-title">Navigation</h4>
                <nav className="footer-nav-links">
                  <a href="/">
                    <div className="footer-link">
                      <span>Homepage</span>
                    </div>
                  </a>
                  <a href="/catalog">
                    <div className="footer-link">
                      <span>Catalog</span>
                    </div>
                  </a>
                  <a href="/delivery">
                    <div className="footer-link">
                      <span>Delivery</span>
                    </div>
                  </a>
                  <a href="/contacts">
                    <div className="footer-link">
                      <span>Contacts</span>
                    </div>
                  </a>
                </nav>
              </div>
              <div className="footer-contact">
                <h4 className="footer-contact-title">Contact Us</h4>
                <div className="footer-contact-items">
                  <a href="https://wa.me/905370399890?text=Hello!%20I%20want%20to%20order%20a%20mold.">
                    <div className="footer-contact-item">
                      <div className="footer-contact-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
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
                      </div>
                      <div className="footer-contact-details">
                        <span className="footer-contact-label">WhatsApp</span>
                        <span className="footer-contact-value">
                          +90 537 039 9890
                        </span>
                      </div>
                    </div>
                  </a>
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                        ></path>
                      </svg>
                    </div>
                    <div className="footer-contact-details">
                      <span className="footer-contact-label">Location</span>
                      <span className="footer-contact-value">Türkiye</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-cta">
                <h4 className="footer-cta-title">Get in Touch</h4>
                <p className="footer-cta-description">
                  {' '}
                  Contact us via WhatsApp for orders and inquiries
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="https://wa.me/905370399890?text=Hello!%20I%20want%20to%20order%20a%20mold.">
                  <div className="footer-cta-button btn btn-primary">
                    <span>
                      {' '}
                      Write to WhatsApp
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-legal">
              <div className="footer-legal-links">
                <a href="/privacy-policy">
                  <div className="footer-legal-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Privacy Policy
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
                <a href="/terms">
                  <div className="footer-legal-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      Terms &amp; Conditions
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
              </div>
              <div className="footer-copyright">
                <p className="footer-copyright-text">
                  {' '}
                  © 2025 Mold 3000. All rights reserved.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
