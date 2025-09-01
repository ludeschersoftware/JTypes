A generic collection of TypeScript type definitions and zero-runtime helpers. Start with 2D geometry primitives—`Vector2`, `Size`, `Box`—and extend with any domain-specific types your projects need. Includes utility types to make your type modeling more expressive and flexible.

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
import { Vector2, Size, Box, Loose, Optional } from '@ludeschersoftware/types'

const origin: Vector2 = { x: 0, y: 0 }
const canvasSize: Size = { width: 800, height: 600 }

const viewport: Box = { ...origin, ...canvasSize }

type PartialCanvas = Loose<Size> // width and height can be null or undefined
```

---

## Core Types

### Geometry Primitives

- **Vector2**  
  `{ x: number; y: number }`  

- **Size**  
  `{ width: number; height: number }`  

- **Box**  
  Extends both `Vector2` and `Size` for axis-aligned rectangles  

### Utility Types

- **Loose<T>**  
  Makes all properties of `T` optional and allows `null` or `undefined`:  
  ```ts
  { [K in keyof T]?: T[K] | null | undefined }
  ```

- **Optional<T>**  
  Makes all properties of `T` optional:  
  ```ts
  { [K in keyof T]?: T[K] }
  ```

- **Nullable<T>**  
  Makes all properties of `T` nullable:  
  ```ts
  { [K in keyof T]: T[K] | null }
  ```

- **Undefinable<T>**  
  Makes all properties of `T` potentially undefined:  
  ```ts
  { [K in keyof T]: T[K] | undefined }
  ```

These helpers are ideal for modeling partial forms, optional configuration objects, or API responses with flexible schemas.

---

## 🧼 License

MIT © Johannes Ludescher

---

## 💬 Feedback

Got ideas or improvements? Feel free to open an issue or submit a PR. Contributions are welcome!