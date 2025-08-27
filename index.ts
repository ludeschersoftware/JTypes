export interface Vector2 {
    x: number;
    y: number;
}

export interface Size {
    width: number;
    height: number;
}

export interface Box extends Vector2, Size { }