import React from 'react';

const ChatItem: React.FC<{ title: string; subTitle: string; date: string }> = ({
  title,
  subTitle,
  date,
}) => {
  return (
    <div className="p-4 border-b border-[#2a3942] hover:bg-[#2a3942] cursor-pointer flex items-center space-x-4 group">
      <div className="w-12 h-12 bg-gray-600 rounded-full overflow-hidden">
        <img
          src="https://via.placeholder.com/48"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="font-semibold">{title}</div>
        <div className="text-gray-400 text-sm">{subTitle}</div>
      </div>
      <div className="flex flex-col items-end space-y-1">
        <div className="text-[#00a884] text-xs">{date}</div>
        <div className="flex items-center space-x-2">
          <svg
            viewBox="0 0 16 18"
            height="18"
            width="16"
            preserveAspectRatio="xMidYMid meet"
            className=""
            version="1.1"
            x="0px"
            y="0px"
            enableBackground="new 0 0 16 18"
          >
            <title>muted</title>
            <path
              fill="currentColor"
              d="M11.52,9.206c0-1.4-0.778-2.567-1.944-3.111v1.711L11.52,9.75 C11.52,9.517,11.52,9.362,11.52,9.206z M13.465,9.206c0,0.7-0.156,1.4-0.389,2.022l1.167,1.167c0.544-0.933,0.778-2.1,0.778-3.267 c0-3.344-2.333-6.144-5.444-6.844v1.633C11.832,4.695,13.465,6.717,13.465,9.206z M2.032,2.206L1.02,3.217l3.656,3.656H1.02v4.667 h3.111l3.889,3.889v-5.211l3.344,3.344c-0.544,0.389-1.089,0.7-1.789,0.933v1.633c1.089-0.233,2.022-0.7,2.878-1.4l1.556,1.556 l1.011-1.011l-7-7L2.032,2.206z M8.02,2.984L6.387,4.617L8.02,6.25V2.984z"
            ></path>
          </svg>
          <div className="bg-[#00a884] text-gray-800 text-[12px] font-semibold leading-[12px] w-6 h-6 flex items-center justify-center border border-gray-800 border-solid rounded-full p-[3.9px] text-center select-none">
            3
          </div>
          <div className="hidden group-hover:block">
            <svg
              viewBox="0 0 30 30"
              width="20"
              height="20"
              preserveAspectRatio="xMidYMid meet"
              className="rotate-90"
              x="0px"
              y="0px"
            >
              <title>chevron</title>
              <path
                fill="currentColor"
                d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
