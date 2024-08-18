import React, { useState } from "react";
import MyChannelEmptyPlaylist from "../Playlist/MyChannelEmptyPlaylist";
function MyChannelPlaylists() {
  const [playlist, setPlaylist] = useState("");

  return !playlist ? (
    <MyChannelEmptyPlaylist />
  ) : (
    <div className="grid gap-4 pt-2 sm:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))]">
      <div className="w-full">
        <div className="relative mb-2 w-full pt-[56%]">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="React Mastery"
              className="h-full w-full"
            />
            <div className="absolute inset-x-0 bottom-0">
              <div className="relative border-t bg-white/30 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                <div className="relative z-[1]">
                  <p className="flex justify-between">
                    <span className="inline-block">Playlist</span>
                    <span className="inline-block">12 videos</span>
                  </p>
                  <p className="text-sm text-gray-200">100K Views · 2 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h6 className="mb-1 font-semibold">React Mastery</h6>
        <p className="flex text-sm text-gray-200">
          Master the art of building dynamic user interfaces with React.
        </p>
      </div>
      <div className="w-full">
        <div className="relative mb-2 w-full pt-[56%]">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/2519817/pexels-photo-2519817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="JavaScript Fundamentals"
              className="h-full w-full"
            />
            <div className="absolute inset-x-0 bottom-0">
              <div className="relative border-t bg-white/30 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                <div className="relative z-[1]">
                  <p className="flex justify-between">
                    <span className="inline-block">Playlist</span>
                    <span className="inline-block">1 videos</span>
                  </p>
                  <p className="text-sm text-gray-200">120K Views · 3 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h6 className="mb-1 font-semibold">JavaScript Fundamentals</h6>
        <p className="flex text-sm text-gray-200">
          Learn the core concepts and fundamentals of JavaScript programming language.
        </p>
      </div>
      <div className="w-full">
        <div className="relative mb-2 w-full pt-[56%]">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/1739849/pexels-photo-1739849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="TypeScript Essentials"
              className="h-full w-full"
            />
            <div className="absolute inset-x-0 bottom-0">
              <div className="relative border-t bg-white/30 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                <div className="relative z-[1]">
                  <p className="flex justify-between">
                    <span className="inline-block">Playlist</span>
                    <span className="inline-block">2 videos</span>
                  </p>
                  <p className="text-sm text-gray-200">90K Views · 4 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h6 className="mb-1 font-semibold">TypeScript Essentials</h6>
        <p className="flex text-sm text-gray-200">
          Dive into TypeScript for enhanced type safety and scalable JavaScript applications.
        </p>
      </div>
      <div className="w-full">
        <div className="relative mb-2 w-full pt-[56%]">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/1144256/pexels-photo-1144256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="React State Management"
              className="h-full w-full"
            />
            <div className="absolute inset-x-0 bottom-0">
              <div className="relative border-t bg-white/30 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                <div className="relative z-[1]">
                  <p className="flex justify-between">
                    <span className="inline-block">Playlist</span>
                    <span className="inline-block">1 videos</span>
                  </p>
                  <p className="text-sm text-gray-200">80K Views · 5 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h6 className="mb-1 font-semibold">React State Management</h6>
        <p className="flex text-sm text-gray-200">
          Explore various state management techniques in React applications.
        </p>
      </div>
      <div className="w-full">
        <div className="relative mb-2 w-full pt-[56%]">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/1144260/pexels-photo-1144260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Advanced JavaScript Techniques"
              className="h-full w-full"
            />
            <div className="absolute inset-x-0 bottom-0">
              <div className="relative border-t bg-white/30 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                <div className="relative z-[1]">
                  <p className="flex justify-between">
                    <span className="inline-block">Playlist</span>
                    <span className="inline-block">2 videos</span>
                  </p>
                  <p className="text-sm text-gray-200">110K Views · 6 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h6 className="mb-1 font-semibold">Advanced JavaScript Techniques</h6>
        <p className="flex text-sm text-gray-200">
          Delve into advanced JavaScript concepts and techniques for professional-level programming.
        </p>
      </div>
    </div>
  );
}

export default MyChannelPlaylists;
