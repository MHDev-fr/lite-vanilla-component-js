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
            outline : props.outline ?? '10px solid blue',
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
    circle : (...props) => (
        {
            border : props.border ?? 'none',
            cursor : props.cursor ?? 'pointer',
            color : props.color ?? '#F4F4F4',
            background : props.background ?? '#0C0C0C',
            paddingInline : props.padding ?? '.5rem',
            aspectRatio:1,
            borderRadius : '99999999999px',
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
    link : (...props) => (
        {
            
        }
    ),
    rounded : (...props) => (
        {
            
        }
    ),
    disable : (...props) => (
        {
            
        }
    ),
}

export const hovering = {
    default : (e) => {
        const props = {
            from : {scale : 1,},
            to : {scale : 1.05,},
            global : {easing : "ease-out",duration : 110,fill : 'forwards'}
        }
        const animation = (sequence) => {
            e.animate(
                [
                    {scale : props[sequence == 'from' ? 'to' : 'from'].scale},
                    {scale : props[sequence == 'from' ? 'from' : 'to'].scale}
                ],
                {
                    easing : props.global.easing,
                    duration : props.global.duration,
                    fill : props.global.fill
                })
        }
        const events = {
            from : ['mouseleave','blur'],
            to : ['mouseenter','focus'],
        }
        for(const key in events)
            for(const value of events[key])
                e.addEventListener(value, ()=> animation(key))
    }
}