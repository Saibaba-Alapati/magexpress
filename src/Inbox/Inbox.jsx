import React from 'react';
import ShortMessageEditor from './MessageEditor';

function Inbox (){
    return(
        <div className="Inbox bg-gray-500 flex flex-row w-full h-screen">
            <div className="Side-Nav bg-newblack opacity-95 w-1/12 h-full">
            </div>
            <div className="Channels-Nav bg-black border-l border-gray-600 w-1/6 h-full">
            </div>
            <div className="Message-Area bg-gray-900 border-l border-r border-gray-600 flex flex-col w-full h-full">
                <div className="Header-Details bg-newblack opacity-80 border-b border-gray-600 w-full h-24">

                </div>
                <div className="Message-Display bg-newblack opacity-80 w-full h-full">
                </div>
                <div className="Ed bg-newblack opacity-80  h-1/6">
                    <ShortMessageEditor/>
                </div>

            </div>
            <div className="Stats bg-gray-900 flex flex-col w-1/5 h-full">
            <div className="Header bg-newblack opacity-80 border-b border-gray-600 w-full h-20">
            </div>
            <div className="Details bg-newblack opacity-80 w-full h-full">
            </div>
            </div>
    </div>
    );
}

export default Inbox;