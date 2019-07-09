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
  NormalizeStyles, SanitizeStyles, OptimizeStyles, FontAwesomeStyles 
} from "@alexseitsinger/react-emotion-global-styles"

function App() {
  return (
    <React.Fragment>
      <NormalizeStyles />
      <SanitizeStyles />
      <OptimizeStyles />
      <FontAwesomeStyles />
      <div>
        This is some content
      </div>
    </React.Fragment>
  )
}
```
