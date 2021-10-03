import React from 'react'

const followbut = ({handleclick,follow}) => {
    
    return (
        <div>
            <button className="follow" onClick={(e)=>handleclick(e)}>{follow ? "following" :"follow"}</button>
        </div>
    )
}

export default followbut
