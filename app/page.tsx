'use client';

import '@/app/ui/global.css';
import { useRef, useEffect } from 'react';
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  const isShrekMusicPlayingRef = useRef(false);
  const shrekAudioRef = useRef<HTMLAudioElement | null>(null);
  const doTheRoarAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    shrekAudioRef.current = new Audio('/shrek-music.mp3');
    doTheRoarAudioRef.current = new Audio('/do-the-roar.mp3');
  }, []);

  // Function to handle toggling play/pause of the Shrek music
  const handleToggleShrekMusic = () => {
    const audio = shrekAudioRef.current!;
    if (audio) {
      if (isShrekMusicPlayingRef.current) {
        audio.pause();
      } else {
        audio.play();
      }
      isShrekMusicPlayingRef.current = !isShrekMusicPlayingRef.current;
    }
  };

  // Function to play the "do the roar" audio
  const handleDoTheRoar = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    // Check if the click occurred on the Shrek image or its children
    console.log(target);

    if (target.classList.contains('shrek-image')) {
      return;
    }
    const audio = doTheRoarAudioRef.current!;
    if (audio) {
      audio.play();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDoTheRoar);
    // Remove event listener when component unmounts to avoid memory leaks
    return () => {
      document.removeEventListener('click', handleDoTheRoar);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-green-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to my swamp.</strong>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-green-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <div
            className="shrek-image-container"
            onClick={handleToggleShrekMusic}
            style={{ cursor: 'pointer' }}
          >
            <Image
              src="/shrek.jpg"
              width={500}
              height={500}
              alt="Screenshot of Shrek"
              className="shrek-image"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
