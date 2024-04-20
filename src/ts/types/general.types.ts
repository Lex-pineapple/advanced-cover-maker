type BasicComponentProps = {
    className?: string;
};

export type DetailedComponentProps<T> = T & BasicComponentProps;
