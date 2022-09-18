import React from "react";

export default function FrameDataModal() {
  const [showFrameModal, setShowFrameModal] = React.useState(false);
  return (
    <div>
      <button
        className="m-6 bg-pink-400 text-white active:bg-pink-500 font-bold rounded-2xl uppercase text-sm px-6 py-3 shadow hover:bg-pink-500 hover:shadow-xl outline-non focus:outline-none mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowFrameModal(true)}
      >
        Frame Data Dictionary
      </button>
      {showFrameModal ? (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-40">
          <div className=" flex overflow-auto fixed inset-0 z-3 outline-none focus:outline-none">
            <div className="relative w-auto my-6 m-auto max-w-3xl">
              {/* Modal Content */}
              <div className="border-0 rounded-lg shadow-lg relative w-full bg-white outline-none focus:outline-none">
                {/* Header */}
                <div className="p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-bold">
                    All the frame data terms you need to know!
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-bold outline-none focus:outline-none"
                    onClick={() => setShowFrameModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/* Body */}
                <div className="relative p-6 flex-auto overflow-y-auto">
                  <div className="my-4 text-slate-500 text-lg leading-relaxed">
                    <p>
                      Now there are a whole lot of numbers here and terms you might not understand.
                      That's what this is here to solve!
                    </p>
                    <br />
                    <p>
                        If you don't know what a frame is, it is 1/60th of a second (because the game runs at 60 frames per second, or "fps"). 60fps is the standard for all modern fighting games right now.
                    </p>
                    <br />
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th>Term</th>
                                <th>Definition</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Guard</td>
                                <td className="pl-6">What kind of block (standing or crouching) actually blocks the move. Some moves can be blocked by both forms (noted by "All")</td>
                            </tr>
                            <br />
                            <tr>
                                <td>Startup</td>
                                <td className="pl-6">How long the move takes from the button press to when the hitbox comes out and does damage</td>
                            </tr>
                            <br />
                            <tr>
                                <td>Active</td>
                                <td className="pl-6">How long the move does damage for</td>
                            </tr>
                            <br />
                            <tr>
                                <td>Recovery</td>
                                <td className="pl-6">How long it takes from after active frames are over to when the player can move again</td>
                            </tr>
                            <br />
                            <tr>
                                <td>On Block</td>
                                <td className="pl-6">The frame advantage/disadvantage you have when hitting a move on block. So a move that's -6 on block means if your opponent can move 6 frames before you can. The opposite is true for + frames</td>
                            </tr>
                            <br />
                            <tr>
                                <td>OTG Ratio</td>
                                <td className="pl-6">The percentage of damage the move does if it hits your opponent in the air</td>
                            </tr>
                            <br />
                            <tr>
                                <td>Chip Ratio</td>
                                <td className="pl-6">The percentage of damage the move does if it hits on block</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
                </div>
                {/* Footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowFrameModal(false)}
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
