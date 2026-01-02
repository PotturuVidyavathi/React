import Sun from "./Images/Sun.jpg";
import NatureAudio from "./Images/forest sounds.mp3";
import NatureVideo from "./Images/trees.mp4"
export default function Public(){
    return(
        <>
            <h1>Public Folder</h1>
            <img src="/MotuPatlu.jpg" alt="MotuPatlu" /> 
            <audio controls>
                <source src="drums.mp3"/>
            </audio>
            <video src="drums.mp4" controls style={{height:"220px",width:"300px"}}></video>
        </>
    )
}

export function Source(){
    return(
        <>
            <h1>ES6 import</h1>
            <img src={Sun} alt="Sun" />
            <audio src={NatureAudio} controls></audio>
            <video src={NatureVideo} controls style={{height:"220px",width:"300px"}}></video>
        </>
    )
}