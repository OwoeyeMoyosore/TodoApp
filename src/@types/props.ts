type BaseProps ={
    id?: string | number,
    className?:string,
    // key? : string
}

interface ExampleProps{}

interface NewProps extends ExampleProps{}

export type CardDto = {
    name: string,
    description: string
}

export type CustomCardProps = BaseProps & Partial<CardDto> & {
    handleDelete? : (data?: any) => void;
    handleEdit? : (data?: any) => void
    type?: 'add' | "update"
};
