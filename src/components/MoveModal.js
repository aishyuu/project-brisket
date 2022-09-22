/*
This makes the gifs clickable, which opens a modal to see it up close
This will become an interactable piece where users can go frame by frame
Will be added when I develop a way to go frame by frame on a gif
*/
import React from "react";

export default function MoveModal(props) {
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
          <div className="flex overflow-auto inset-0 z-3 outline-none focus:outline-none">
            <div className="relative w-auto my-6 m-auto max-w-3xl">
              {/* Modal Content */}
              <div className="border-0 rounded-lg shadow-lg relative w-full bg-white outline-none focus:outline-none">
                {/* Header */}
                <div className="border-solid border-slate-200 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-bold outline-none focus:outline-none"
                    onClick={() => setShowMoveModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/* Body */}
                <div className="relative flex-auto overflow-y-auto">
                    <img 
                        src={props.moveURL}
                        alt="loading..."
                    />
                </div>
                {/* Footer */}
                <div className="flex items-center justify-end border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowMoveModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
