interface TitleProps {
    children: React.ReactNode
    iconAfter?: React.ReactNode
    iconBefore?: React.ReactNode
}
export function Title({ children, iconAfter, iconBefore } : TitleProps){
    return(
        <h1 className="text-lg font-bold mb-1 w-full text-stone-200 flex justify-between" >
            {iconAfter}
            {children}
            {iconBefore}
        </h1>
    )
}
export function SubTitle({ children } : TitleProps){
    return(
        <h2 className="text-sm font-medium text-stone-500 mb-1 w-full flex justify-between">
            {children}
        </h2>
    )
}