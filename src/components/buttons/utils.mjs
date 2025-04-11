export const variants = {
    default : ({...props}) => (
        {
            border : props.border ?? 'none',
            cursor : props.cursor ?? 'pointer',
            color : props.color ?? '#F4F4F4',
            background : props.background ?? '#0C0C0C',
            padding : props.padding ?? '.5rem 1rem',
            borderRadius : props.borderRadius ?? 'calc(-2px + .5rem)',
            margin : props.margin ?? '0',
            display : props.display ?? 'flex',
            flexDirection : props.flexDirection ?? 'center',
            alignItems : props.alignItems ?? 'center',
            gap : props.gap ?? '.5rem',
            fontSize : props.fontSize ?? '.875rem',
            fontWeight : props.fontWeight ?? '500',
            lineHeight : props.lineHeight ?? '1.25rem'
        }
    ),
    outline : ({...props}) => (
        {

        }
    ),
    //to do
    // circle : {},
    // rounded : {},
    // link : {},
    // disable : {},
}