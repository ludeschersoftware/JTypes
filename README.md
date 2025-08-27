A generic collection of TypeScript type definitions and zero-runtime helpers. Start with 2D geometry primitives—Vector2, Size, Box—and extend with any domain-specific types your projects need.

---

## Installation

Add the package as a development dependency:

```bash
npm install --save-dev @ludeschersoftware/types
```

Or with Yarn:

```bash
yarn add --dev @ludeschersoftware/types
```

---

## Usage

Keep your types modular and explicit. Import only what you need:

```ts
import { Vector2, Size, Box } from '@ludeschersoftware/types'

const origin: Vector2 = { x: 0, y: 0 }
const canvasSize: Size = { width: 800, height: 600 }

const viewport: Box = { ...origin, ...canvasSize }
```

## Core Types

- **Vector2**  
  `{ x: number; y: number }`  

- **Size**  
  `{ width: number; height: number }`  

- **Box**  
  Extends both `Vector2` and `Size` for axis-aligned rectangles  

---

## 🧼 License

MIT © Johannes Ludescher

---

## 💬 Feedback

Got ideas or improvements? Feel free to open an issue or submit a PR. Contributions are welcome!