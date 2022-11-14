import React from 'react'

interface entryProps {
    type?: 'text' | 'number'
    text: string
    value: any
    readOnly?: boolean
    className?: string
    modifyValue?: (value: any) => void
}

export default (props: entryProps) => {
    return (
        <div className={`
            flex flex-col ${props.className}
        `}>
            <label className={`
                text-black mb-2
            `}>
                {props.text}
            </label>
            <input type={props.type ?? 'text'}
                value={props.value} readOnly={props.readOnly}
                onChange={e => props.modifyValue?.(e.target.value)}
                className={` border
                    border-purple-500 rounded-lg bg-gray-200 text-black 
                    focus:outline-none px-4 py-2 ${props.readOnly ? '' : 'focus:bg-white'}
                `} />
        </div>
    )
}