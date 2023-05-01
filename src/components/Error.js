import React from "react";

const Error = ({ messageStatus }) => {
    return (
        <div className="modal">
            {messageStatus === 'alreadyGuessed' && (
                <div>
                    <p>You already guessed that word!</p>
                </div>
            )}
            {messageStatus === 'invalidWord' && (
                <div>
                    <p>Sorry, that word is not in the list</p>
                </div>
            )}
            {messageStatus === 'notEnoughLetters' && (
                <div>
                    <p>Your guess must have five letters</p>
                </div>
            )}
        </div>
    )
}

export default Error;