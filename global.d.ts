import 'react'

declare module 'remark-html' {
    const html: any
    export default html
}

declare module 'react' {
    interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
        alt: string;
    }
}