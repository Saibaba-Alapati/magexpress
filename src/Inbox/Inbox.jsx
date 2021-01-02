import React from 'react';

function Inbox (){
    return(
        <div className="Inbox flex flex-row w-full h-screen">
            <div className="Side-Nav bg-gray-900 w-1/12 h-full">
            </div>
            <div className="Channels-Nav bg-gray-800 w-1/12 h-full">
            </div>
            <div className="Message-Area bg-gray-600 w-full h-full">
                <div className="Header-Detail">

                </div>
                <div className="Message-Display">

                </div>
                <div className="Message-Input-Editor">

                </div>
            </div>
    </div>
    );
}

export default Inbox;