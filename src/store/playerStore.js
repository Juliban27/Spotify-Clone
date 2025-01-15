import {create} from "zustand";

export const usePlayerStore = create((set) => ({

    isPlaying: false,
    volume:100,
    setVolum: (volume) => set({volume}),
    currentMusic: {playlist:null, song:null, songs:[]},
    setIsPlaying: (isPlaying) => set({isPlaying}),
    setCurrentMusic: (currentMusic) => set({currentMusic}),
    })
)