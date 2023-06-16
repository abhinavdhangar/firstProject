import React from "react";
import { Disclosure } from "@headlessui/react";
export default function App({ courseContent }) {
  return (
    <div className="mt-[55px]">
      <div className="w-full max-w-[44rem] p-2 mx-auto bg-white rounded-2xl">
        {courseContent.map((chapterContent, index) => (
          <Disclosure key={index} as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2  font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span className="md:text-xl ">
                    {chapterContent.ChapterNumber}. {chapterContent.ChapterName}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className=" md:text-xl px-4 pt-4 pb-2 text-sm text-gray-500">
                  {chapterContent.chapterContent.map((videos, index) => (
                    <div key={index}>
                      {videos.isFree ? (
                        <div className="text-blue-500">{videos.title}</div>
                      ) : (
                        <div>{videos.title}</div>
                      )}
                    </div>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
