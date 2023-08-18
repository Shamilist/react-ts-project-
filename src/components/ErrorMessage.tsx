import React from "react";

interface ErrorMessageProp {
    error: string
}

export function ErrorMessage({ error }: ErrorMessageProp) {

    return (
        <p className='text-center text-red-600'>{ error }</p>
    )
}