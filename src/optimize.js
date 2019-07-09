import React from "react"
import { Global, css } from "@emotion/core"

export function Optimize() {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          border-radius: inherit;
        }
        body {
            overflow-y: scroll;
        }
        button {
            border: 0 none;
            padding: 0;
            cursor: pointer;
        }
        ul, ol {
            padding: 0;
            margin: 0;
            list-style-type: none;
        }
        a {
            text-decoration: none;
            color: inherit;
            cursor: pointer;
        }
        img {
            border: 0 none;
            max-width: 100%;
            height:  auto;
        }
        h1, h2, h3, h4, h5, h6 {
            margin: 0;
        }
        p {
            margin: 0;
        }
        input {
            border: 0 none;
        }
        input[type="file"] {
            cursor: pointer;
        }
        input[type="text"],
        input[type="email"],
        input[type="url"],
        input[type="password"],
        input[type="file"],
        textarea {
            width: 100%;
        }
        textarea {
            border: 0 none;
            resize: none;
        }
        hr {
            margin: 0 auto;
            border: 0 none;
            width: 100%;
        }
      `}
    />
  )
}
