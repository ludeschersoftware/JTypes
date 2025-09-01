A generic collection of TypeScript type definitions and zero-runtime helpers. Start with 2D geometry primitives—`Vector2`, `Size`, `Box`—and extend with any domain-specific types your projects need. Includes utility types to make your type modeling more expressive and flexible.

---

## 📦 Installation

Add the package as a development dependency:

```bash
npm install --save-dev @ludeschersoftware/types
```

Or with Yarn:

```bash
yarn add --dev @ludeschersoftware/types
```

---

## 🔧 Usage

Keep your types modular and explicit. Import only what you need:

```ts
import { Vector2, Size, Box, Loose, Optional, RequiredProps } from '@ludeschersoftware/types'

const origin: Vector2 = { x: 0, y: 0 }
const canvasSize: Size = { width: 800, height: 600 }

const viewport: Box = { ...origin, ...canvasSize }

type PartialCanvas = Loose<Size> // width and height can be null or undefined
type StrictCanvas = RequiredProps<Size> // width and height must be defined
```

---

## 📐 Core Types

### Geometry Primitives

* **`Vector2`**
  A 2D vector with `x` and `y` coordinates.

  ```ts
  interface Vector2 {
    x: number;
    y: number;
  }
  ```

* **`Size`**
  A 2D size descriptor with `width` and `height`.

  ```ts
  interface Size {
    width: number;
    height: number;
  }
  ```

* **`Box`**
  Combines both `Vector2` and `Size` into an axis-aligned rectangle.

  ```ts
  interface Box extends Vector2, Size {}
  ```

---

## 🛠️ Utility Types

These helpers make it easier to adapt strict types to flexible scenarios like forms, API responses, or optional configuration.

* **`Loose<T>`**
  Makes all properties of `T` optional and allows `null` or `undefined`.

  ```ts
  type Loose<T> = { [K in keyof T]?: T[K] | null | undefined }
  ```

* **`Optional<T>`**
  Makes all properties of `T` optional.

  ```ts
  type Optional<T> = { [K in keyof T]?: T[K] }
  ```

* **`Nullable<T>`**
  Makes all properties of `T` explicitly nullable, but required.

  ```ts
  type Nullable<T> = { [K in keyof T]: T[K] | null }
  ```

* **`Undefinable<T>`**
  Makes all properties of `T` potentially `undefined`, but required.

  ```ts
  type Undefinable<T> = { [K in keyof T]: T[K] | undefined }
  ```

* **`RequiredProps<T>`**
  Forces all properties of `T` to be required.

  ```ts
  type RequiredProps<T> = { [K in keyof T]-?: T[K] }
  ```

* **`NonNullableProps<T>`**
  Forces all properties of `T` to be required and strips `null` and `undefined`.

  ```ts
  type NonNullableProps<T> = { [K in keyof T]-?: NonNullable<T[K]> }
  ```

---

## 🔍 Utility Type Comparison

Here’s how the utility types transform a sample `User` type:

```ts
type User = {
  id?: number | null;
  name?: string;
  email?: string | undefined;
};
```

| Utility Type                 | Resulting Shape                                                                                                 |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **`Loose<User>`**            | `{ id?: number \| null \| undefined; name?: string \| null \| undefined; email?: string \| null \| undefined }` |
| **`Optional<User>`**         | `{ id?: number \| null; name?: string; email?: string \| undefined }`                                           |
| **`Nullable<User>`**         | `{ id: number \| null; name: string \| null; email: string \| null }`                                           |
| **`Undefinable<User>`**      | `{ id: number \| null \| undefined; name: string \| undefined; email: string \| undefined }`                    |
| **`RequiredProps<User>`**    | `{ id: number \| null; name: string; email: string \| undefined }`                                              |
| **`NonNullableProps<User>`** | `{ id: number; name: string; email: string }`                                                                   |

This table makes it clear how each helper changes the “strictness” of your type modeling.

---

## 🧼 License

MIT © Johannes Ludescher

---

## 💬 Feedback

Got ideas or improvements? Feel free to open an issue or submit a PR. Contributions are welcome!