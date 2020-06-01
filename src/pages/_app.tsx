import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import 'normalize.css'
import 'milligram'
import '../styles/main.sass'
import { author, description, name } from '../../package.json'

const color = '#f4f5f6'
const title =
  name
    .split('.')[0]
    .charAt(0)
    .toUpperCase() +
  name
    .split('.')[0]
    .substr(1)
    .toLowerCase()

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimal-ui"
          />
          <meta name="msapplication-TileColor" content={color} />
          <meta name="msapplication-TileImage" content="logo192.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content={color} />
          <meta name="apple-mobile-web-app-title" content={title} />
          <meta name="application-name" content={title} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="theme-color" content={color} />
          <meta name="robots" content="index,follow" />
          <meta name="author" content={author} />
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="thumbnail.png" />
          <meta property="og:locale" content="en" />
          <meta property="og:site_name" content={title} />
          <meta property="og:title" content={title} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="/" />
          <meta
            property="article:published_time"
            content={new Date().toISOString()}
          />
          <meta property="article:author" content={author} />
          <meta property="article:section" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:domain" content={title} />
          <meta name="twitter:url" content="/" />
          <meta name="twitter:site" content="/" />
          <meta name="twitter:creator" content={author} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image:src" content="thumbnail.png" />
          <link rel="shortcut icon" href="favicon.png" />
          <link rel="apple-touch-icon" href="logo192.png" />
          <link rel="manifest" href="manifest.json" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css"
          />
          <title>
            {title} - {description}
          </title>
        </Head>

        <main className="wrapper">
          <nav className="navigation">
            <section className="container">
              <a className="navigation-title" title="">
                <svg className="img" version="1.1" viewBox="0 0 463 669">
                  <g transform="translate(0.000000,669.000000) scale(0.100000,-0.100000)">
                    <path d="M2303 6677c-11-13-58-89-393-627-128-206-247-397-265-425-18-27-85-135-150-240-65-104-281-451-480-770-358-575-604-970-641-1032-10-18-45-74-76-126-47-78-106-194-107-212-1-3-11-26-24-53-60-118-132-406-157-623-19-158-8-491 20-649 82-462 291-872 619-1213 192-199 387-340 646-467 335-165 638-235 1020-235 382 0 685 70 1020 235 259 127 454 268 646 467 328 341 537 751 619 1213 28 158 39 491 20 649-25 217-97 505-157 623-13 27-23 50-23 53 0 16-57 127-107 210-32 52-67 110-77 128-37 62-283 457-641 1032-199 319-415 666-480 770-65 105-132 213-150 240-18 28-137 219-265 425-354 570-393 630-400 635-4 3-12-1-17-8zm138-904c118-191 654-1050 1214-1948 148-236 271-440 273-452 2-13 8-23 11-23 14 0 72-99 125-212 92-195 146-384 171-598 116-974-526-1884-1488-2110-868-205-1779 234-2173 1046-253 522-257 1124-10 1659 45 97 108 210 126 225 4 3 9 13 13 22 3 9 126 209 273 445 734 1176 1102 1766 1213 1946 67 108 124 197 126 197 2 0 59-89 126-197zM1080 3228c-75-17-114-67-190-243-91-212-128-368-137-580-34-772 497-1451 1254-1605 77-15 112-18 143-11 155 35 212 213 106 329-32 36-62 48-181 75-223 50-392 140-552 291-115 109-178 192-242 316-101 197-136 355-128 580 3 111 10 167 30 241 30 113 80 237 107 267 11 12 20 26 20 32 0 6 8 22 17 36 26 41 27 99 3 147-54 105-142 149-250 125z"></path>
                  </g>
                </svg>
                &nbsp;
                <h1 className="title">Milligram</h1>
              </a>
              <ul className="navigation-list float-right">
                <li className="navigation-item">
                  <a
                    className="navigation-link"
                    href="#popover-grid"
                    data-popover="data-popover"
                  >
                    Docs
                  </a>
                  <div className="popover" id="popover-grid">
                    <ul className="popover-list">
                      <li className="popover-item">
                        <a
                          className="popover-link"
                          href="#getting-started"
                          title="Getting Started"
                        >
                          Getting Started
                        </a>
                      </li>
                      <li className="popover-item">
                        <a
                          className="popover-link"
                          href="#typography"
                          title="Typography"
                        >
                          Typography
                        </a>
                      </li>
                      <li className="popover-item">
                        <a
                          className="popover-link"
                          href="#blockquotes"
                          title="Blockquotes"
                        >
                          Blockquotes
                        </a>
                      </li>
                      <li className="popover-item">
                        <a
                          className="popover-link"
                          href="#buttons"
                          title="Buttons"
                        >
                          Buttons
                        </a>
                      </li>
                      <li className="popover-item">
                        <a className="popover-link" href="#lists" title="Lists">
                          Lists
                        </a>
                      </li>
                      <li className="popover-item">
                        <a className="popover-link" href="#forms" title="Forms">
                          Forms
                        </a>
                      </li>
                      <li className="popover-item">
                        <a
                          className="popover-link"
                          href="#tables"
                          title="Tables"
                        >
                          Tables
                        </a>
                      </li>
                      <li className="popover-item">
                        <a className="popover-link" href="#grids" title="Grids">
                          Grids
                        </a>
                      </li>
                      <li className="popover-item">
                        <a className="popover-link" href="#code" title="Code">
                          Code
                        </a>
                      </li>
                      <li className="popover-item">
                        <a
                          className="popover-link"
                          href="#utilities"
                          title="Utilities"
                        >
                          Utilities
                        </a>
                      </li>
                      <li className="popover-item">
                        <a className="popover-link" href="#tips" title="Tips">
                          Tips
                        </a>
                      </li>
                      <li className="popover-item">
                        <a
                          className="popover-link"
                          href="#browser-support"
                          title="Browser Support"
                        >
                          Browser Support
                        </a>
                      </li>
                      <li className="popover-item">
                        <a
                          className="popover-link"
                          href="#showcase"
                          title="Showcase"
                        >
                          Showcase
                        </a>
                      </li>
                      <li className="popover-item">
                        <a
                          className="popover-link"
                          href="#examples"
                          title="Examples"
                        >
                          Examples
                        </a>
                      </li>
                      <li className="popover-item">
                        <a
                          className="popover-link"
                          href="#contributing"
                          title="Contributing"
                        >
                          Contributing
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="navigation-item">
                  <a
                    className="navigation-link"
                    href="#popover-support"
                    data-popover="data-popover"
                  >
                    Support
                  </a>
                  <div className="popover" id="popover-support">
                    <ul className="popover-list">
                      <li className="popover-item">
                        <a
                          className="popover-link"
                          href="https://github.com/milligram/milligram"
                          rel="noopener"
                          target="_blank"
                          title="On Github"
                        >
                          On Github
                        </a>
                      </li>
                      <li className="popover-item">
                        <a
                          className="popover-link"
                          href="https://twitter.com/cjpatoilo"
                          rel="noopener"
                          target="_blank"
                          title="On Twitter"
                        >
                          On Twitter
                        </a>
                      </li>
                      <li className="popover-item">
                        <a
                          className="popover-link"
                          href="https://codepen.io/collection/DOjjOY/"
                          rel="noopener"
                          target="_blank"
                          title="On Codepen"
                        >
                          On Codepen
                        </a>
                      </li>
                      <li className="popover-item">
                        <a
                          className="popover-link"
                          href="https://gitter.im/milligram/milligram"
                          rel="noopener"
                          target="_blank"
                          title="On Community"
                        >
                          On Community
                        </a>
                      </li>
                      <li className="popover-item">
                        <a
                          className="popover-link"
                          href="https://github.com/milligram/milligram/issues/new"
                          rel="noopener"
                          target="_blank"
                          title="Need help?"
                        >
                          Need help?
                        </a>
                      </li>
                      <li className="popover-item">
                        <a
                          className="popover-link"
                          href="https://medium.com/@cjpatoilo"
                          rel="noopener"
                          target="_blank"
                          title="What's New"
                        >
                          What's New
                        </a>
                      </li>
                      <li className="popover-item">
                        <a
                          className="popover-link"
                          href="https://github.com/milligram/milligram#license"
                          rel="noopener"
                          target="_blank"
                          title="License"
                        >
                          License
                        </a>
                      </li>
                      <li className="popover-item">
                        <a
                          className="popover-link"
                          href="https://github.com/milligram/milligram/releases"
                          rel="noopener"
                          target="_blank"
                          title="Versions"
                        >
                          Versions
                        </a>
                      </li>
                      <li className="popover-item">
                        <a
                          className="popover-link"
                          href="https://opencollective.com/milligram"
                          rel="noopener"
                          target="_blank"
                          title="Support Us"
                        >
                          Support Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <a
                href="https://github.com/milligram/milligram"
                rel="noopener"
                target="_blank"
                title="Milligram on Github"
              >
                <svg className="octocat" viewBox="0 0 250 250">
                  <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                  <path
                    className="octocat-arm"
                    d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                  ></path>
                  <path
                    className="octocat-body"
                    d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                  ></path>
                </svg>
              </a>
            </section>
          </nav>

          <Component {...pageProps} />

          <section className="container" id="examples">
            <h3 className="title">Examples</h3>
            <p>You can view more examples of using Milligram.</p>
            <ul>
              <li>
                <a href="getting-started.html" title="Getting Started">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="typography.html" title="Typography">
                  Typography
                </a>
              </li>
              <li>
                <a href="blockquotes.html" title="Blockquotes">
                  Blockquotes
                </a>
              </li>
              <li>
                <a href="buttons.html" title="Buttons">
                  Buttons
                </a>
              </li>
              <li>
                <a href="lists.html" title="Lists">
                  Lists
                </a>
              </li>
              <li>
                <a href="forms.html" title="Forms">
                  Forms
                </a>
              </li>
              <li>
                <a href="tables.html" title="Tables">
                  Tables
                </a>
              </li>
              <li>
                <a href="grids.html" title="Grids">
                  Grids
                </a>
              </li>
              <li>
                <a href="code.html" title="Code">
                  Code
                </a>
              </li>
              <li>
                <a href="utilities.html" title="Utilities">
                  Utilities
                </a>
              </li>
              <li>
                <a href="tips.html" title="Tips">
                  Tips
                </a>
              </li>
              <li>
                <a href="browser-support.html" title="Browser Support">
                  Browser Support
                </a>
              </li>
              <li>
                <a href="showcase.html" title="Showcase">
                  Showcase
                </a>
              </li>
            </ul>
          </section>

          <section className="container" id="contributing">
            <h3 className="title">Contributing</h3>
            <p>
              Want to contribute? Follow these
              <a
                href="https://github.com/milligram/milligram/blob/master/.github/contributing.md"
                title="Contributing"
              >
                {' '}
                recommendations
              </a>
              .
            </p>
          </section>

          <section className="container" id="subscribe">
            <div className="row row-center">
              <div className="column">
                <h3 className="title">Subscribe to our newsletter</h3>
                <p>
                  The latest news and resources sent straight to your inbox.
                </p>
              </div>
              <div className="column subscribe-column">
                <form
                  className="row row-center"
                  action="https://airform.io/cjpatoilo@gmail.com"
                  method="post"
                >
                  <input
                    className="subscribe-input"
                    type="email"
                    id="email"
                    maxLength={80}
                    name="email"
                    placeholder="Email address"
                    required
                  />
                  <button className="subscribe-button">Subscribe</button>
                </form>
              </div>
            </div>
          </section>

          <footer className="footer">
            <section className="container">
              <p className="copyright">
                Designed with ♥ by
                <a
                  href="https://cjpatoilo.com"
                  rel="noopener"
                  target="_blank"
                  title="undefined's website"
                >
                  {' '}
                  CJ Patoilo
                </a>
                . Licensed under the
                <a
                  href="https://github.com/milligram/milligram#license"
                  rel="noopener"
                  target="_blank"
                  title="MIT License"
                >
                  {' '}
                  MIT License
                </a>
                .
              </p>
              <nav className="nav">
                <a
                  className="link"
                  href="https://twitter.com/cjpatoilo"
                  rel="noopener"
                  target="_blank"
                  title="undefined on Twitter"
                >
                  <svg className="icon" viewBox="0 0 512 512">
                    <g>
                      <path d="M512,100c0,1,0,2,0,3c-0.286,0.144-0.678,0.213-0.843,0.444c-12.988,18.134-28.416,33.907-45.899,47.727c-1.117,0.883-2.077,2.606-2.191,4.012c-0.803,9.932-1.033,19.92-2.083,29.822c-1.466,13.833-2.476,27.829-5.44,41.37c-14.968,68.364-47.628,126.547-101.357,172.138c-38.719,32.854-83.248,53.526-133.219,62.461c-8.297,1.483-16.643,2.691-24.966,4.027c-21.667,0-43.333,0-65,0c-6.005-0.986-12-2.043-18.017-2.947c-38.1-5.724-73.019-20.017-106.071-39.338c-1.137-0.664-2.119-1.592-3.174-2.396c0.036-0.494,0.072-0.988,0.108-1.482c55.033,4.465,105.085-8.256,149.475-42.204c-45.885-6.43-78.15-29.625-94.769-73.517c5.615,0,10.368,0.022,15.12-0.006c4.832-0.029,9.677,0.091,14.492-0.223c4.535-0.295,9.04-1.07,13.558-1.634c-59.936-17.467-83.246-74.124-78.912-104.888c13.575,6.847,27.734,11.166,43.121,11.612c-20.952-16.59-35.308-37.341-40.662-63.445c-5.325-25.967-2.189-50.979,11.493-75.753c57.54,65.903,128.3,104.011,215.511,109.404c0-14.21-1.604-27.562,0.309-40.389c5.197-34.848,24.9-60.248,55.821-76.352C318.775,56.04,330.755,53.726,342,50c8.667,0,17.333,0,26,0c0.753,0.291,1.497,0.808,2.261,0.839c10.134,0.412,19.371,4.007,28.571,7.834c10.89,4.53,20.224,11.34,28.906,19.186c3.154,2.85,6.411,4.546,11.24,3.473c17.612-3.914,33.97-11.042,50.23-18.523c3.07-1.413,6.197-2.702,10.545-4.59c-8.316,23.453-22.797,40.565-40.623,55.441C477.73,112.015,494.891,106.107,512,100z"></path>
                    </g>
                  </svg>
                </a>
                <a
                  className="link"
                  href="https://github.com/cjpatoilo"
                  rel="noopener"
                  target="_blank"
                  title="undefined on Github"
                >
                  <svg className="icon" viewBox="0 0 512 512">
                    <g>
                      <path d="M109,33c1.667,0,3.333,0,5,0c0.858,0.338,1.688,0.821,2.578,0.993c9.22,1.778,18.936,2.236,27.569,5.534c14.421,5.51,28.124,12.886,42.202,19.317c2.099,0.959,4.652,1.66,6.897,1.448c17.485-1.653,34.912-4.113,52.427-5.184c11.058-0.676,22.262,0.256,33.351,1.117c9.9,0.769,19.71,2.641,29.601,3.597c4.24,0.41,8.364,2.348,12.935-0.69c21.736-14.445,45.523-23.332,71.793-24.663c1.361-0.069,3.713,1.54,4.079,2.807c1.591,5.516,3.041,11.141,3.76,16.826c1.531,12.107,4.122,24.377,3.329,36.386c-0.625,9.459,0.544,16.535,6.219,24.341c12.723,17.5,20.408,37.49,23.187,58.995c1.33,10.292,1.601,20.815,1.284,31.201c-0.376,12.316-1.901,24.596-2.951,37.167c0.338,0.036,1.465,0.25,2.595,0.266c15.816,0.237,31.634,0.383,47.449,0.689c8.153,0.158,16.313,0.436,24.44,1.054c1.251,0.095,2.34,2.323,3.503,3.564c-1.282,1.126-2.501,3.128-3.858,3.227c-5.639,0.409-11.319,0.278-16.984,0.285c-18.996,0.021-37.992,0.012-56.988,0.025c-2.427,0.002-5.137-0.354-5.302,3.649c0.909,0.237,1.666,0.575,2.438,0.614c14.272,0.715,28.59,0.917,42.803,2.244c10.187,0.951,20.257,3.283,30.315,5.314c1.363,0.275,2.355,2.384,3.519,3.644c-1.646,0.961-3.358,2.836-4.927,2.724c-6.597-0.47-13.183-1.34-19.715-2.416c-18.284-3.012-36.68-4.061-55.186-3.753c-2.809,0.047-4.359,0.898-5.809,3.508c-8.302,14.941-20.161,26.575-34.122,36.306c-16.457,11.471-35.061,17.423-54.285,21.939c-4.655,1.094-9.312,2.183-14.252,3.341c10.623,13.66,15.411,26.753,15.565,43.847c0.238,26.492,0.129,52.987,0.255,79.48c0.038,8.056,1.544,15.557,8.611,20.85c1.347,1.009,1.945,3.017,2.888,4.564c-0.277,0.441-0.554,0.883-0.831,1.324c-5.849-0.788-11.722-1.427-17.541-2.394c-14.611-2.429-28.554-8.686-27.837-30.227c0.753-22.612-0.417-45.288-0.795-67.936c-0.024-1.45-0.469-2.894-0.718-4.34c-1.355,1.315-1.711,2.539-1.708,3.762c0.091,28.979,0.031,57.961,0.57,86.932c0.072,3.841,2.661,8.057,5.135,11.298c1.992,2.61,1.829,3.792-0.486,5.427c-1.333,0-2.667,0-4,0c-5.8-0.99-11.667-1.692-17.384-3.034c-10.209-2.397-17.504-11.956-17.605-22.228c-0.265-26.803-0.581-53.607-0.969-80.408c-0.021-1.444-0.892-2.876-1.367-4.314c-0.565,0.115-1.129,0.229-1.694,0.344c0,1.741,0.001,3.483,0,5.224c-0.008,25.654,0.012,51.308-0.039,76.961c-0.022,10.904-2.372,20.592-14.658,23.864c-5.047,1.344-10.283,1.995-15.45,2.858c-2.256,0.377-4.555,0.496-6.835,0.733c-1,0-2,0-3,0c-2.247-1.482-2.846-3.036-0.577-5.141c4.878-4.523,5.891-10.21,5.604-16.691c-0.427-9.644-0.087-19.321-0.087-28.984c0-17.945,0.001-35.889-0.04-53.834c-0.002-0.993-0.38-1.985-0.583-2.978c-0.575-0.028-1.15-0.055-1.725-0.083c-0.597,4.946-1.62,9.884-1.71,14.839c-0.241,13.324,0.004,26.656-0.111,39.984c-0.085,9.813-0.349,19.627-0.693,29.434c-0.23,6.557-2.705,11.917-8.928,14.996c-3.112,1.54-6.068,3.473-9.299,4.685c-7.458,2.797-15.17,3.642-23.825,2.363c0.907-1.601,1.217-2.811,1.996-3.417c5.6-4.355,7.742-10.341,7.835-17.079c0.26-18.967,0.318-37.937,0.427-56.905c0.001-0.261-0.366-0.524-1.386-1.892c-9.618,0-20.066-0.101-30.511,0.024c-15.64,0.188-28.65-5.576-39.443-16.779c-9.263-9.615-15.158-21.456-22.02-32.674c-7.435-12.154-14.453-24.681-27.538-32.053c-1.176-0.662-1.579-2.696-2.806-4.944c6.744,0.764,12.28,1.214,17.747,2.09c2.547,0.408,5.303,1.152,7.375,2.591c8.143,5.654,16.232,11.416,24.006,17.561c13.169,10.409,24.265,24.328,43.559,23.589c9.913-0.379,19.853-0.067,30.057-0.067c2.016-13.247,9.261-23.677,18.936-33.082c-2.593-0.663-4.319-1.287-6.097-1.53c-16.388-2.237-32.313-6.396-47.542-12.723c-23.651-9.826-43.201-24.931-57.266-46.675c-0.676-1.046-2.211-2.194-3.339-2.187c-10.482,0.065-21.013-0.188-31.43,0.755c-12.879,1.165-25.65,3.488-38.499,5.055c-2.545,0.31-5.387-0.098-7.81-0.963c-2.753-0.984-2.819-3.17-0.399-4.86c1.18-0.824,2.712-1.301,4.153-1.567c22.086-4.076,44.27-7.14,66.826-6.267c1.618,0.063,3.253-0.3,4.88-0.464c0.046-0.645,0.093-1.291,0.139-1.936c-2.711-0.65-5.418-1.844-8.134-1.863c-22.156-0.154-44.315-0.053-66.472-0.136c-2.621-0.01-5.274-0.51-7.84-1.098c-0.907-0.208-2.326-1.473-2.234-2.051c0.181-1.125,1.068-2.731,2.01-3.026c2.506-0.783,5.19-1.294,7.816-1.352c21.475-0.471,42.953-0.816,64.431-1.192c1.741-0.03,3.482-0.004,4.273-0.004c-1.743-13.256-3.274-25.841-5.079-38.387c-2.117-14.711,0.115-29.126,3.077-43.4c3.819-18.405,12.758-34.358,24.964-48.556c0.69-0.803,1.265-2.101,1.177-3.105c-0.273-3.102-1.227-6.164-1.322-9.259c-0.393-12.88-1.298-25.808-0.582-38.638C104.49,51.686,107.24,42.371,109,33z"></path>
                    </g>
                  </svg>
                </a>
              </nav>
            </section>
          </footer>
        </main>

        <script
          src="https://browser.sentry-cdn.com/5.5.0/bundle.min.js"
          integrity="sha384-/kLYKYxlMDI1l+lhDHECQrq1Z4fnk/A32MWVF6rRnuE2WiOuAmg3wr3McNOG3Szi"
          crossOrigin="anonymous"
        ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js"></script>
        <script
          async
          defer
          src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"
        ></script>
        <script async defer src="scripts/apm.js"></script>
        <script async defer src="scripts/archor.js"></script>
        <script async defer src="scripts/clipboard.js"></script>
        <script async defer src="scripts/ga.js"></script>
        <script async defer src="scripts/popover.js"></script>
        <script async defer src="scripts/prettify.js"></script>
        <script async defer src="scripts/sw.js"></script>
        <script async defer src="scripts/version.js"></script>
      </>
    )
  }
}
