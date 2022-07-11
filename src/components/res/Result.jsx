import React from "react";

function Result({ isEnd, setIsEnd, setIsBegin, score, isBegin }) {
    if (isEnd) {
        return null
    }

    return (
        <div>
            {score}/15

            <input type="submit" onClick={
                () => {
                    // setIsBegin(!isBegin);
                    setIsEnd(!isEnd)
                }
            } />
        </div>
    )
}

export default Result