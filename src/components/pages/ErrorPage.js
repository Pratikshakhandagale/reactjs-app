import React from 'react';

import { useNavigate } from "react-router-dom";

function WentsWrong() {
    const navigate = useNavigate();
    return (
        <div>
            <div class="card mt-4">
                <div class="card-body errCard">
                    <h4> Oop! Something went wrong...! <br />
                        <button onClick={() => navigate(-1)} className="btn btn-primary mt-3">     Try Again </button>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default WentsWrong;