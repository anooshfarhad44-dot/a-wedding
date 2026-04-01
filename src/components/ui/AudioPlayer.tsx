"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Music, Music2, Volume2, VolumeX } from "lucide-react";

interface AudioPlayerProps {
  isOpen: boolean;
}

export default function AudioPlayer({ isOpen }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  const invitationAudioRef = useRef<HTMLAudioElement>(null);
  const mainAudioRef = useRef<HTMLAudioElement>(null);

  // Invitation music - soft, elegant
  const invitationMusic = "/audio/paulyudin-wedding-music-valentines-day-182505.mp3";
  
  // Main site music - celebratory, romantic
  const mainMusic = "/audio/prettyjohn1-wedding-487335.mp3";

  useEffect(() => {
    // Load audio files
    const loadAudio = async () => {
      try {
        if (invitationAudioRef.current) {
          invitationAudioRef.current.volume = 0.3;
          invitationAudioRef.current.loop = true;
        }
        if (mainAudioRef.current) {
          mainAudioRef.current.volume = 0.4;
          mainAudioRef.current.loop = true;
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading audio:", error);
        setIsLoading(false);
      }
    };

    loadAudio();

    // Add global click listener for user interaction - auto start music
    const handleFirstInteraction = async () => {
      if (!hasInteracted && !musicStarted) {
        setHasInteracted(true);
        setMusicStarted(true);
        
        // Start playing music immediately after first interaction
        const currentAudio = isOpen ? mainAudioRef.current : invitationAudioRef.current;
        if (currentAudio && !isMuted) {
          try {
            // Ensure audio is loaded and ready
            if (currentAudio.readyState === 0) {
              await new Promise(resolve => {
                currentAudio.addEventListener('canplay', resolve, { once: true });
              });
            }
            await currentAudio.play();
            setIsPlaying(true);
            console.log("Music started successfully");
          } catch (error) {
            console.log("Auto-play failed:", error);
            // Try again with user gesture
            try {
              await currentAudio.play();
              setIsPlaying(true);
            } catch (retryError) {
              console.log("Retry failed:", retryError);
            }
          }
        }
        
        // Remove listeners after first interaction
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('keydown', handleFirstInteraction);
        document.removeEventListener('touchstart', handleFirstInteraction);
        document.removeEventListener('scroll', handleFirstInteraction);
        document.removeEventListener('mousemove', handleFirstInteraction);
      }
    };

    // Add more event listeners to catch user interaction sooner
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);
    document.addEventListener('scroll', handleFirstInteraction);
    document.addEventListener('mousemove', handleFirstInteraction, { once: true }); // Only once for mousemove

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
      document.removeEventListener('mousemove', handleFirstInteraction);
    };
  }, [isOpen, isMuted, hasInteracted, musicStarted]);

  useEffect(() => {
    // Handle audio switching based on site state
    if (isLoading || !hasInteracted) return;

    const currentAudio = isOpen ? mainAudioRef.current : invitationAudioRef.current;
    const otherAudio = isOpen ? invitationAudioRef.current : mainAudioRef.current;

    if (!currentAudio || !otherAudio) return;

    // Stop other audio
    otherAudio.pause();
    otherAudio.currentTime = 0;

    // Play current audio if not muted
    if (!isMuted) {
      currentAudio.play().catch(error => {
        console.log("Audio play failed:", error);
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  }, [isOpen, isMuted, isLoading, hasInteracted]);

  const togglePlayPause = async () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      setMusicStarted(true);
    }

    const currentAudio = isOpen ? mainAudioRef.current : invitationAudioRef.current;
    const otherAudio = isOpen ? invitationAudioRef.current : mainAudioRef.current;
    
    if (!currentAudio || !otherAudio) return;

    if (isPlaying) {
      currentAudio.pause();
      setIsPlaying(false);
    } else {
      // Stop other audio first
      otherAudio.pause();
      otherAudio.currentTime = 0;
      
      // Play current audio
      try {
        await currentAudio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Audio play failed:", error);
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    const invitationAudio = invitationAudioRef.current;
    const mainAudio = mainAudioRef.current;
    
    if (!invitationAudio || !mainAudio) return;

    if (isMuted) {
      invitationAudio.muted = false;
      mainAudio.muted = false;
      setIsMuted(false);
      
      if (!isPlaying && hasInteracted) {
        const currentAudio = isOpen ? mainAudio : invitationAudio;
        currentAudio.play().catch(console.error);
        setIsPlaying(true);
      }
    } else {
      invitationAudio.muted = true;
      mainAudio.muted = true;
      setIsMuted(true);
      setIsPlaying(false);
    }
  };

  return (
    <>
      {/* Hidden audio elements */}
      <audio ref={invitationAudioRef} preload="auto">
        <source src={invitationMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
      <audio ref={mainAudioRef} preload="auto">
        <source src={mainMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* No visible player - music plays silently in background */}
    </>
  );
}
