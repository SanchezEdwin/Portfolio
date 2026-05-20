import tabSoundPath from './assets/tab-sound.webm';

export const playTabSound = () => {
  try {
    const audio = new Audio(tabSoundPath);
    audio.volume = 0.6;
    audio.play().catch(() => {
      // Ignore errors caused by autoplay restrictions if user hasn't interacted yet
    });
  } catch (error) {
    console.error('Error playing sound:', error);
  }
};
