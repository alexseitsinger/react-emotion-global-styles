# React Emotion Global Styles

## Description

A collection of emotion global style components.

## Installation

```
npm i @alexseitsinger/react-emotion-global-styles --save
```

## Usage

```javascript
import { 
  Normalize, Sanitize, Optimize, FontAwesome 
} from "@alexseitsinger/react-emotion-global-styles"

function App() {
  return (
    <React.Fragment>
      <Normalize />
      <Sanitize />
      <Optimize />
      <FontAwesome />
      <div>
        This is some content
      </div>
    </React.Fragment>
  )
}
```
