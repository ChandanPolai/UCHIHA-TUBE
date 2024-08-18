import React, { useState } from "react";
import MyChannelEmptySubscribed from "../Subscription/MyChannelEmptySubscribed";
function MyChannelSubscribed() {
  const [subscribed, setSubscribed] = useState("");

  return !subscribed ? (
    <MyChannelEmptySubscribed />
  ) : (
    <div className="flex flex-col gap-y-4 py-4">
      <div className="relative mb-2 rounded-lg bg-white py-2 pl-8 pr-3 text-black">
        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            ></path>
          </svg>
        </span>
        <input className="w-full bg-transparent outline-none" placeholder="Search" />
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Code Master"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">Code Master</h6>
            <p className="text-sm text-gray-300">20K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white">
            <span className="group-focus/btn:hidden">Subscribed</span>
            <span className="hidden group-focus/btn:inline">Subscribe</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="React Ninja"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">React Ninja</h6>
            <p className="text-sm text-gray-300">40K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]">
            <span className="group-focus/btn:hidden">Subscribe</span>
            <span className="hidden group-focus/btn:inline">Subscribed</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/3532549/pexels-photo-3532549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Async Masters"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">Async Masters</h6>
            <p className="text-sm text-gray-300">60K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white">
            <span className="group-focus/btn:hidden">Subscribed</span>
            <span className="hidden group-focus/btn:inline">Subscribe</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/2522659/pexels-photo-2522659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Code Crafters"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">Code Crafters</h6>
            <p className="text-sm text-gray-300">80K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]">
            <span className="group-focus/btn:hidden">Subscribe</span>
            <span className="hidden group-focus/btn:inline">Subscribed</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/2519823/pexels-photo-2519823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Tailwind Pro"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">Tailwind Pro</h6>
            <p className="text-sm text-gray-300">100K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white">
            <span className="group-focus/btn:hidden">Subscribed</span>
            <span className="hidden group-focus/btn:inline">Subscribe</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/2519812/pexels-photo-2519812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Express Learner"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">Express Learner</h6>
            <p className="text-sm text-gray-300">120K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]">
            <span className="group-focus/btn:hidden">Subscribe</span>
            <span className="hidden group-focus/btn:inline">Subscribed</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Redux Master"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">Redux Master</h6>
            <p className="text-sm text-gray-300">140K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white">
            <span className="group-focus/btn:hidden">Subscribed</span>
            <span className="hidden group-focus/btn:inline">Subscribe</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/1739942/pexels-photo-1739942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="API Builder"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">API Builder</h6>
            <p className="text-sm text-gray-300">160K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]">
            <span className="group-focus/btn:hidden">Subscribe</span>
            <span className="hidden group-focus/btn:inline">Subscribed</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/1739856/pexels-photo-1739856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="React Native Dev"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">React Native Dev</h6>
            <p className="text-sm text-gray-300">180K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white">
            <span className="group-focus/btn:hidden">Subscribed</span>
            <span className="hidden group-focus/btn:inline">Subscribe</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/1144257/pexels-photo-1144257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Hook Master"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">Hook Master</h6>
            <p className="text-sm text-gray-300">200K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]">
            <span className="group-focus/btn:hidden">Subscribe</span>
            <span className="hidden group-focus/btn:inline">Subscribed</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/1144261/pexels-photo-1144261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="CSS Wizard"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">CSS Wizard</h6>
            <p className="text-sm text-gray-300">220K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white">
            <span className="group-focus/btn:hidden">Subscribed</span>
            <span className="hidden group-focus/btn:inline">Subscribe</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/1144268/pexels-photo-1144268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Pythonista"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">Pythonista</h6>
            <p className="text-sm text-gray-300">240K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]">
            <span className="group-focus/btn:hidden">Subscribe</span>
            <span className="hidden group-focus/btn:inline">Subscribed</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/1144269/pexels-photo-1144269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Django Master"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">Django Master</h6>
            <p className="text-sm text-gray-300">260K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white">
            <span className="group-focus/btn:hidden">Subscribed</span>
            <span className="hidden group-focus/btn:inline">Subscribe</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/1144275/pexels-photo-1144275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="ML Geek"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">ML Geek</h6>
            <p className="text-sm text-gray-300">280K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]">
            <span className="group-focus/btn:hidden">Subscribe</span>
            <span className="hidden group-focus/btn:inline">Subscribed</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/1144277/pexels-photo-1144277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="ReactD3"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">ReactD3</h6>
            <p className="text-sm text-gray-300">300K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white">
            <span className="group-focus/btn:hidden">Subscribed</span>
            <span className="hidden group-focus/btn:inline">Subscribe</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/1144270/pexels-photo-1144270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Passport Pro"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">Passport Pro</h6>
            <p className="text-sm text-gray-300">320K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]">
            <span className="group-focus/btn:hidden">Subscribe</span>
            <span className="hidden group-focus/btn:inline">Subscribed</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/1144235/pexels-photo-1144235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Django Rest API"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">Django Rest API</h6>
            <p className="text-sm text-gray-300">340K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white">
            <span className="group-focus/btn:hidden">Subscribed</span>
            <span className="hidden group-focus/btn:inline">Subscribe</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/1144232/pexels-photo-1144232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="JS Ninja"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">JS Ninja</h6>
            <p className="text-sm text-gray-300">360K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]">
            <span className="group-focus/btn:hidden">Subscribe</span>
            <span className="hidden group-focus/btn:inline">Subscribed</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Tableau Master"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">Tableau Master</h6>
            <p className="text-sm text-gray-300">380K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white">
            <span className="group-focus/btn:hidden">Subscribed</span>
            <span className="hidden group-focus/btn:inline">Subscribe</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Socket.IO Expert"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">Socket.IO Expert</h6>
            <p className="text-sm text-gray-300">400K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]">
            <span className="group-focus/btn:hidden">Subscribe</span>
            <span className="hidden group-focus/btn:inline">Subscribed</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="GraphQL Pro"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">GraphQL Pro</h6>
            <p className="text-sm text-gray-300">420K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white">
            <span className="group-focus/btn:hidden">Subscribed</span>
            <span className="hidden group-focus/btn:inline">Subscribe</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/1115822/pexels-photo-1115822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="MERN Stack"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">MERN Stack</h6>
            <p className="text-sm text-gray-300">440K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]">
            <span className="group-focus/btn:hidden">Subscribe</span>
            <span className="hidden group-focus/btn:inline">Subscribed</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="CSS Animations"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">CSS Animations</h6>
            <p className="text-sm text-gray-300">460K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white">
            <span className="group-focus/btn:hidden">Subscribed</span>
            <span className="hidden group-focus/btn:inline">Subscribe</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="ML Image"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">ML Image</h6>
            <p className="text-sm text-gray-300">480K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]">
            <span className="group-focus/btn:hidden">Subscribe</span>
            <span className="hidden group-focus/btn:inline">Subscribed</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="React Patterns"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <h6 className="font-semibold">React Patterns</h6>
            <p className="text-sm text-gray-300">500K Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white">
            <span className="group-focus/btn:hidden">Subscribed</span>
            <span className="hidden group-focus/btn:inline">Subscribe</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyChannelSubscribed;
