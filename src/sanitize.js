import React from "react"
import { Global, css } from "@emotion/core"

export function SanitizeStyles() {
  return (
    <Global
      styles={css`
        *,
        ::before,
        ::after {
            background-repeat: no-repeat;
            box-sizing: inherit;
        }
        ::before,
        ::after {
            text-decoration: inherit;
            vertical-align: inherit;
        }
        html {
            box-sizing: border-box;
            cursor: default;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }
        article,
        aside,
        footer,
        header,
        nav,
        section {
            display: block;
        }
        body {
            margin: 0;
        }
        h1 {
            font-size: 2em;
            margin: .67em 0;
        }
        figcaption,
        figure,
        main {
            display: block;
        }
        figure {
            margin: 1em 40px;
        }
        hr {
            box-sizing: content-box;
            height: 0;
            overflow: visible;
        }
        nav ol,
        nav ul {
            list-style: none;
        }
        pre {
            font-family: monospace, monospace;
            font-size: 1em;
        }
        a {
            background-color: transparent;
            -webkit-text-decoration-skip: objects;
        }
        abbr[title] {
            border-bottom: none;
            text-decoration: underline;
            text-decoration: underline dotted;
        }
        b,
        strong {
            font-weight: inherit;
        }
        b,
        strong {
            font-weight: bolder;
        }
        code,
        kbd,
        samp {
            font-family: monospace, monospace;
            font-size: 1em;
        }
        dfn {
            font-style: italic;
        }
        mark {
            background-color: #ffff00;
            color: #000000;
        }
        small {
            font-size: 80%;
        }
        sub,
        sup {
            font-size: 75%;
            line-height: 0;
            position: relative;
            vertical-align: baseline;
        }
        sub {
            bottom: -.25em;
        }
        sup {
            top: -.5em;
        }
        ::-moz-selection {
            background-color: #b3d4fc;
            color: #000000;
            text-shadow: none;
        }
        ::selection {
            background-color: #b3d4fc;
            color: #000000;
            text-shadow: none;
        }
        audio,
        canvas,
        iframe,
        img,
        svg,
        video {
            vertical-align: middle;
        }
        audio,
        video {
            display: inline-block;
        }
        audio:not(controls) {
            display: none;
            height: 0;
        }
        img {
            border-style: none;
        }
        svg {
            fill: currentColor;
        }
        svg:not(:root) {
            overflow: hidden;
        }
        table {
            border-collapse: collapse;
        }
        button,
        input,
        optgroup,
        select,
        textarea {
            margin: 0;
        }
        button,
        input,
        select,
        textarea {
            background-color: transparent;
            color: inherit;
            font-size: inherit;
            line-height: inherit;
        }
        button,
        input {
            overflow: visible;
        }
        button,
        select {
            text-transform: none;
        }
        button,
        html [type="button"],
        [type="reset"],
        [type="submit"] {
            -webkit-appearance: button;
        }
        button::-moz-focus-inner,
        [type="button"]::-moz-focus-inner,
        [type="reset"]::-moz-focus-inner,
        [type="submit"]::-moz-focus-inner {
            border-style: none;
            padding: 0;
        }
        button:-moz-focusring,
        [type="button"]:-moz-focusring,
        [type="reset"]:-moz-focusring,
        [type="submit"]:-moz-focusring {
            outline: 1px dotted ButtonText;
        }
        legend {
            box-sizing: border-box;
            color: inherit;
            display: table;
            max-width: 100%;
            padding: 0;
            white-space: normal;
        }
        progress {
            display: inline-block;
            vertical-align: baseline;
        }
        textarea {
            overflow: auto;
            resize: vertical;
        }
        [type="checkbox"],
        [type="radio"] {
            box-sizing: border-box;
            padding: 0;
        }
        [type="number"]::-webkit-inner-spin-button,
        [type="number"]::-webkit-outer-spin-button {
            height: auto;
        }
        [type="search"] {
            -webkit-appearance: textfield;
            outline-offset: -2px;
        }
        [type="search"]::-webkit-search-cancel-button,
        [type="search"]::-webkit-search-decoration {
            -webkit-appearance: none;
        }
        ::-webkit-file-upload-button {
            -webkit-appearance: button;
            font: inherit;
        }
        details,
        menu {
            display: block;
        }
        summary {
            display: list-item;
        }
        canvas {
            display: inline-block;
        }
        template {
            display: none;
        }
        a,
        area,
        button,
        input,
        label,
        select,
        summary,
        textarea,
        [tabindex] {
            -ms-touch-action: manipulation;
            touch-action: manipulation;
        }
        [hidden] {
            display: none;
        }
        [aria-busy="true"] {
            cursor: progress;
        }
        [aria-controls] {
            cursor: pointer;
        }
        [aria-hidden="false"][hidden]:not(:focus) {
            clip: rect(0, 0, 0, 0);
            display: inherit;
            position: absolute;
        }
        [aria-disabled] {
            cursor: default;
        }
      `}
    />
  )
}
