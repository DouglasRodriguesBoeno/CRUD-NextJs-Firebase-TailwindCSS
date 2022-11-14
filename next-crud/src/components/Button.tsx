interface buttonProps {
    color?: 'green' | 'blue' | 'gray' | 'red'
    className?: string
    children: any
    onClick?: () => void
}

export default (props: buttonProps) => {
    const color = props.color ?? 'green'

    return (
        <button onClick={props.onClick} className={`
        bg-gradient-to-r from-${color}-400 to-${color}-500
        text-white px-4 py-2 rounded-md ${props.className}
      `}>
            {props.children}
        </button>
    )
}