import React from 'react'

const Square = ({cor}) => (
    <div style={{
        backgroundColor: cor,
        height: '100px',
        width: '100px'
    }}></div>
)
// Square.defaultProps = {
//     cor: 'yellow'
// }
export default Square