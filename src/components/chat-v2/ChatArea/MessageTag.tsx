import React from 'react';

const MessageTag = ({
    message
}: { message: string }) => {
    return (
        <div className="mb-4 flex justify-center">
            <div className="bg-[#202c33] text-gray-400 text-xs font-semibold py-1 px-4 rounded-full">
                {message}
            </div>
        </div>
    );
};

export default MessageTag;
