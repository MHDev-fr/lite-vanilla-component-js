export const variants = {
    default : ({color : color, background : background}) => (
        {
            border : 'none',
            borderRadius : '8px',
            padding : '12px 15px',
            cursor:'pointer',
            color : color,
            background : background,
            display : 'flex',
            flexDirection : 'column'
        }
    ),
    outline : ({color : color, outline : outline}) => (
        {
            border : 'none',
            borderRadius : '8px',
            padding : '12px 15px',
            cursor:'pointer',
            color : color,
            outline : outline,
            background : 'none'
        }
    ),
    //to do
    // circle : {},
    // rounded : {},
}