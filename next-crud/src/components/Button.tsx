interface buttonProps {
    color?: 'green' | 'blue' | 'gray' | 'red'
    className?: string
    children: any
}

export default (props: buttonProps) => {
    const color = props.color ?? 'green'

    return (
        <button className={`
        bg-gradient-to-r from-${color}-400 to-${color}-500
        text-white px-4 py-2 rounded-md ${props.className}
      `}>
            {props.children}
        </button>
    )
}