import { useState } from "react";

import bugImageUrl  from '../../assets/bug.svg';
import ideaImageUrl  from '../../assets/idea.svg';
import thoughtImageUrl  from '../../assets/thought.svg';

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";


export const feedbackTypes = {
    BUG: {
      title: 'Problema',
      image: {
        source: bugImageUrl,
        alt: 'imagem de um inseto'
      }
    },
    IDEA: {
      title: 'Ideia',
      image: {
        source: ideaImageUrl,
        alt: 'imagem de uma lâmpada'
      }
    },
    OTHER: {
      title: 'Outro',
      image: {
        source: thoughtImageUrl,
        alt: 'imagem de um balão de pensamento'
      }
    },
};

export type FeedbackType = keyof typeof feedbackTypes;


export function WidgetForm(){
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent,  setFeebackSent] = useState(false);

  function handleRestarFeedback(){
    setFeebackSent(false);
    setFeedbackType(null);
  }

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
         {feedbackSent ? (
           <FeedbackSucessStep onFeedbackRestartRequested={handleRestarFeedback} />
           ): (
            <>
                { !feedbackType ? (
                  <FeedbackTypeStep  onFeedbackTypeChanged={setFeedbackType} />
                ) : (
                  <FeedbackContentStep  
                    feedbackType={feedbackType} 
                    onFeedbackRestartRequested={handleRestarFeedback}
                    onFeedbackSent={() => setFeebackSent(true)}
                    />
                  )}
              </> 
          ) }

          <footer className="text-xs text-neutral-400">
              Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br/">Rocketseat</a>
          </footer>
        </div>
    )
}