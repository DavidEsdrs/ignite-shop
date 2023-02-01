export interface ResponseEntity<T> {
    status: number;
    successful: boolean;
    message: string;
    body: T;
}