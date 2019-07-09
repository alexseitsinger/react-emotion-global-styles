# React Emotion Global Styles

## Description

A collection of global styles.

## Installation

```
npm i @alexseitsinger/react-emotion-global-styles --save
```

## Usage

```javascript
import { 
  Normalize, Sanitize, Optimize 
} from "@alexseitsinger/react-emotion-global-styles"

function App() {
  return (
    <React.Fragment>
      <Normalize />
      <Sanitize />
      <Optimize />
      <div>
        This is some content
      </div>
    </React.Fragment>
  )
}
```
