interface productProps {
    id: number;
    img: number;
    name: string;
    price: string;
    addedToCart?: boolean;
    quantity?: number;
}

interface ItoastProps {
    title?:string;
    description:string;
    type?: 'success' | 'error' | 'warn' | 'info';
}