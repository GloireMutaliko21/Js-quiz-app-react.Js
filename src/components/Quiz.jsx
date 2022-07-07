import React from "react";

function Quiz({ isBegin, setIsBegin }) {
    if (isBegin) {
        return null
    }
    return (
        <div>
            
            <input type="submit" value="Accueil" onClick={() => {
                setIsBegin(!isBegin);
            }} />
        </div>
    )

}

export default Quiz;