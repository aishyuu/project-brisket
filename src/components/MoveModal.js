/*
This makes the gifs clickable, which opens a modal to see it up close
This will become an interactable piece where users can go frame by frame
Will be added when I develop a way to go frame by frame on a gif
*/
import React from "react";

export default function MoveModal(props) {
  let [currentFrame, setCurrentFrame] = React.useState(0)
  let framesURL = "frameByFrame/Bridget_" + props.moveInput + "/frame_" + currentFrame + ".png";
  let [showMoveModal, setShowMoveModal] = React.useState(false);
  return (
    <div>
      <button>
        <img
          src={props.moveURL}
          alt="Loading..."
          onClick={() => setShowMoveModal(true)}
        />
      </button>
      {showMoveModal ? (
        <div className="fixed inset-0 z-2 bg-black bg-opacity-40">
          <div className="flex inset-0 z-3 outline-none focus:outline-none">
            <div className="relative w-auto my-6 m-auto max-w-3xl">
              {/* Modal Content */}
              <div className="border-0 rounded-lg shadow-lg relative w-full bg-white outline-none focus:outline-none">
                {/* Body */}
                <div className="relative flex-auto overflow-y-auto">
                    <img 
                        src={framesURL}
                        alt="loading..."
                    />
                </div>
                <h1 className="w-fit mx-auto">
                  {currentFrame}
                </h1>
                {/* Footer */}
                <div className="flex w-fit m-auto border-solid border-slate-200 rounded-b">
                  <button 
                    className="text-blue-500 font-bold uppercase mr-5"
                    type="button"
                    onClick={() => {
                      if(currentFrame > 0) {
                        setCurrentFrame(currentFrame - 1)
                      } else {
                        setCurrentFrame(props.framesInVideo)
                      }
                    }}
                  >
                    Prev Frame
                  </button>
                  <button 
                    className="text-blue-500 font-bold uppercase"
                    type="button"
                    onClick={() => {
                      if(currentFrame < props.framesInVideo) {
                        setCurrentFrame(currentFrame + 1)
                      } else {
                        setCurrentFrame(0)
                      }
                    }}
                  >
                    Next Frame
                  </button>
                </div>
                <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setCurrentFrame(0);
                      setShowMoveModal(false);
                    }}
                  >
                    Close
                  </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
