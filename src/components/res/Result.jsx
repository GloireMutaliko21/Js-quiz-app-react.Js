import React from "react";

function Result({ isEnd, setIsEnd, setIsBegin, score, setScore }) {
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
                    setScore(0)
                }
            } />
        </div>
    )
}

export default Result