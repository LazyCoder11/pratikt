"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);

  const tracks = [
    "/audio/useful.mp3", // second song
    "/audio/creative.mp3", // first song
    "/audio/useful.mp3", // second song
    "/audio/creative.mp3", // first song
    "/audio/useful.mp3", // second song
    "/audio/creative.mp3", // first song
    "/audio/useful.mp3", // second song
    "/audio/creative.mp3", // first song
    "/audio/useful.mp3", // second song
    "/audio/creative.mp3", // first song
    "/audio/useful.mp3", // second song
    "/audio/creative.mp3", // first song
  ];

  useEffect(() => {
    const audio = audioRef.current;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        togglePlay();
      }
    };

    const handleEnded = () => {
      if (trackIndex < tracks.length - 1) {
        setTrackIndex(trackIndex + 1); // go to next track
      } else {
        // Optional: loop back to first track if you want
        // setTrackIndex(0)
        setIsPlaying(false); // or just stop playing
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    audio?.addEventListener("ended", handleEnded);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      audio?.removeEventListener("ended", handleEnded);
    };
  });

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.src = tracks[trackIndex];
      if (isPlaying) {
        audio.play().catch((e) => console.error("Play failed", e));
      }
    }
  });

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((e) => console.error("Play failed", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} loop={false} />

      {/* Control Bar */}
      <div
        onClick={togglePlay}
        className="fixed bottom-5 navbar right-5 flex items-center justify-center z-10 p-2 rounded-full text-center text-sm md:text-base"
      >
        {isPlaying ? (
          // <Image src="/images/waves.svg" alt="Waves" width={32} height={32} />
          <div className="relative w-8 h-8">
            {/* Music Waves SVG */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                fill="none"
                fillRule="evenodd"
                stroke="#f2f2f2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6.5 8.5v4" className="wave wave-1"></path>
                <path d="m8.5 6.5v9" className="wave wave-2"></path>
                <path d="m10.5 9.5v2" className="wave wave-3"></path>
                <path d="m12.5 7.5v6.814" className="wave wave-4"></path>
                <path d="m14.5 4.5v12" className="wave wave-5"></path>
              </g>
            </svg>
          </div>
        ) : (
          <div className="relative w-8 h-8">
            {/* Music Waves SVG */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 21 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                fill="none"
                fillRule="evenodd"
                stroke="#f2f2f2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6.5 8.5v4" className=""></path>
                <path d="m8.5 6.5v9" className=""></path>
                <path d="m10.5 9.5v2" className=""></path>
                <path d="m12.5 7.5v6.814" className=""></path>
                <path d="m14.5 4.5v12" className=""></path>
              </g>
            </svg>
          </div>
        )}
      </div>
    </>
  );
}
