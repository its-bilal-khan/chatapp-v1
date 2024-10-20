import React from 'react';

const SidebarHeader: React.FC = () => {
  return (
    <div className="p-4 border-b border-[#2a3942]">
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold">Chats</div>
        <button className="bg-[#2a3942] p-2 rounded-full">
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            className=""
            version="1.1"
            x="0px"
            y="0px"
            enableBackground="new 0 0 24 24"
          >
            <title>menu</title>
            <path
              fill="currentColor"
              d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="mt-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#2a3942] p-2 pl-[70px] rounded-lg focus:outline-none text-white placeholder-gray-400"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              viewBox="0 0 24 24"
              height="20"
              width="20"
              preserveAspectRatio="xMidYMid meet"
              className=""
              version="1.1"
              x="0px"
              y="0px"
              enableBackground="new 0 0 24 24"
            >
              <title>search</title>
              <path
                fill="currentColor"
                d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-4 flex space-x-2">
        <button className="bg-[#00a884] text-white px-4 py-1 rounded-full text-sm">
          All
        </button>
        <button className="bg-[#2a3942] text-gray-400 px-4 py-1 rounded-full text-sm">
          Unread
        </button>
        <button className="bg-[#2a3942] text-gray-400 px-4 py-1 rounded-full text-sm">
          Groups
        </button>
      </div>
    </div>
  );
};

export default SidebarHeader;
