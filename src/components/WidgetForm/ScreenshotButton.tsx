import html2canvas from "html2canvas";
import { Camera } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
   screenshot: string;
   onScreenshotTook: (screenshot: string) => void;
}

export function ScreenshotButton({screenshot, onScreenshotTook }: ScreenshotButtonProps){

    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

    async function handleTakeScreenshot(){
       setIsTakingScreenshot(true);

       const canvas =  await html2canvas(document.querySelector('html')!);
       const base64image = canvas.toDataURL('image/png');

       onScreenshotTook(base64image);

       setIsTakingScreenshot(false);
    }

    if(screenshot){
       return(
         <p>Foto</p>
       );
    }
      return(
        <button type="button" onClick={handleTakeScreenshot} className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors">
          { isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />  }   
        </button>
      );
    
}