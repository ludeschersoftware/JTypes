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
import { Vector2, Size, Box, Loose, Optional, RequiredProps, ExcludeProps } from '@ludeschersoftware/types'

const origin: Vector2 = { x: 0, y: 0 }
const canvasSize: Size = { width: 800, height: 600 }

const viewport: Box = { ...origin, ...canvasSize }

type PartialCanvas = Loose<Size> // width and height can be null or undefined
type StrictCanvas = RequiredProps<Size> // width and height must be defined

// Exclude certain props
type PublicCanvas = ExcludeProps<Size, "height"> // only width remains
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

* **`ExcludeProps<T, K>`**
  Excludes one or more keys from a type. `K` can be a single key or an array of keys.

  ```ts
  type ExcludeProps<T, K extends keyof T | (keyof T)[]> =
    Omit<T, K extends (keyof T)[] ? K[number] : K>
  ```

---

## 🔍 Utility Type Comparison

Here’s how the utility types transform a sample `User` type:

```ts
type User = {
  id?: number | null;
  name?: string;
  email?: string | undefined;
  password?: string;
};
```

| Utility Type                                   | Resulting Shape                                                                                                                                         |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`Loose<User>`**                              | `{ id?: number \| null \| undefined; name?: string \| null \| undefined; email?: string \| null \| undefined; password?: string \| null \| undefined }` |
| **`Optional<User>`**                           | `{ id?: number \| null; name?: string; email?: string \| undefined; password?: string }`                                                                |
| **`Nullable<User>`**                           | `{ id: number \| null; name: string \| null; email: string \| null; password: string \| null }`                                                         |
| **`Undefinable<User>`**                        | `{ id: number \| null \| undefined; name: string \| undefined; email: string \| undefined; password: string \| undefined }`                             |
| **`RequiredProps<User>`**                      | `{ id: number \| null; name: string; email: string \| undefined; password: string }`                                                                    |
| **`NonNullableProps<User>`**                   | `{ id: number; name: string; email: string; password: string }`                                                                                         |
| **`ExcludeProps<User, "password">`**           | `{ id?: number \| null; name?: string; email?: string \| undefined }`                                                                                   |
| **`ExcludeProps<User, ["password","email"]>`** | `{ id?: number \| null; name?: string }`                                                                                                                |

This table shows exactly how each helper changes the “strictness” or shape of your types.

---

## 🧼 License

MIT © Johannes Ludescher

---

## 💬 Feedback

Got ideas or improvements? Feel free to open an issue or submit a PR. Contributions are welcome!