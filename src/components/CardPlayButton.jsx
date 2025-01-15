import { Pause, Play } from "./Player"
import { usePlayerStore } from "@/store/playerStore"

export function CardPlayButton({id}) {
    const { currentMusic, setCurrentMusic, isPlaying, setIsPlaying } = usePlayerStore(state => state);
    const handleClick = () =>{
        if(isPlayingPlaylist){
            setIsPlaying(false)
            return
        }
        fetch(`/api/get-info-playlist.json?id=${id}`)
            .then(res => res.json())
            .then(data => {
                const {songs, playlist} = data
                setIsPlaying(true)
                setCurrentMusic({songs, playlist, song: songs[0]})
        })
    }


    const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === id
    

    return (
        <button onClick={handleClick} className="card-play-button rounded-full bg-green-500 flex items-center justify-center p-[12px] hover:bg-green-400 hover:size-[43px]  fill-black size-10">
            {isPlayingPlaylist ? <Pause /> : <Play />}
        </button>
    )
}
