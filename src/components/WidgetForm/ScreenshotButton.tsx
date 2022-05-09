import html2canvas from "html2canvas";
import { Camera } from "phosphor-react";

export function ScreenshotButton(){
    async function handleTakeScreenshot(){
       const canvas =  await html2canvas(document.querySelector('html')!);
    }
    return(
      <button type="button" onClick={handleTakeScreenshot} className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors">
        <Camera className="w-6 h-6" />    
      </button>
    );
}