export interface Vector2 {
    x: number;
    y: number;
}

export interface Size {
    width: number;
    height: number;
}

export interface Box extends Vector2, Size { }

export type Loose<T> = {
    [K in keyof T]?: T[K] | null | undefined;
};

export type Optional<T> = {
    [K in keyof T]?: T[K];
};

export type Nullable<T> = {
    [K in keyof T]: T[K] | null;
};

export type Undefinable<T> = {
    [K in keyof T]: T[K] | undefined;
};