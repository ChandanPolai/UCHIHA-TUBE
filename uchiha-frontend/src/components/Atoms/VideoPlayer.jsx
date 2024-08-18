// import React, { useRef, useEffect } from "react";
// import videojs from "video.js";
// import "video.js/dist/video-js.css";

// export const VideoPlayer = (props) => {
//   const videoRef = useRef(null);
//   const playerRef = useRef(null);
//   const { options, onReady } = props;

//   useEffect(() => {
//     // Make sure Video.js player is only initialized once
//     if (!playerRef.current) {
//       // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
//       const videoElement = document.createElement("video-js");

//       videoElement.classList.add("vjs-big-play-centered");
//       videoRef.current.appendChild(videoElement);

//       const player = (playerRef.current = videojs(videoElement, options, () => {
//         videojs.log("player is ready");
//         onReady && onReady(player);
//       }));

//       // You could update an existing player in the `else` block here
//       // on prop change, for example:
//     } else {
//       const player = playerRef.current;

//       player.autoplay(options.autoplay);
//       player.src(options.sources);
//     }
//   }, [options, videoRef]);

//   // Dispose the Video.js player when the functional component unmounts
//   useEffect(() => {
//     const player = playerRef.current;

//     return () => {
//       if (player && !player.isDisposed()) {
//         player.dispose();
//         playerRef.current = null;
//       }
//     };
//   }, [playerRef]);

//   return (
//     <div data-vjs-player className="size-full">
//       <div ref={videoRef} />
//     </div>
//   );
// };

// export default VideoPlayer;



import React, { useRef, useEffect } from "react";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import Hls from "hls.js";

import { MediaPlayer, MediaProvider, isHLSProvider } from "@vidstack/react";
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";

function VideoPlayer({ src, thumbnail, title, duration, autoPlay = true }) {
  const playerRef = useRef(null);

  function onProviderChange(provider, nativeEvent) {
    if (isHLSProvider(provider)) {
      provider.library = Hls;
    }
  }

  useEffect(() => {
    const player = playerRef.current;
    if (player && autoPlay) {
      const handleAutoplay = () => {
        player.play();
      };
      player.addEventListener("click", handleAutoplay);
      return () => {
        player.removeEventListener("click", handleAutoplay);
      };
    }
  }, [autoPlay]);

  return (
    <MediaPlayer
      ref={playerRef}
      title={title}
      src={src}
      autoPlay={autoPlay}
      playsInline
      load="eager"
      posterLoad="eager"
      crossOrigin
      storage={`video-player-settings-${title}`}
      onProviderChange={onProviderChange}
      duration={duration}
      streamType="unknown"
      poster={thumbnail} // Adding the poster attribute here
      className="w-full h-full"
    >
      <MediaProvider></MediaProvider>
      <PlyrLayout icons={plyrLayoutIcons} />
    </MediaPlayer>
  );
}

export default VideoPlayer;







