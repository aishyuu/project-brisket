import React from "react";

export default function InfoModal() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <button
        className="m-6 bg-blue-400 text-white active:bg-blue-500 font-bold rounded-2xl uppercase text-sm px-6 py-3 shadow hover:bg-blue-500 hover:shadow-xl outline-non focus:outline-none mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        New to Fighting Games?
      </button>
      {showModal ? (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-40">
          <div className=" flex overflow-auto fixed inset-0 z-3 outline-none focus:outline-none">
            <div className="relative w-auto my-6 m-auto max-w-3xl">
              {/* Modal Content */}
              <div className="border-0 rounded-lg shadow-lg relative w-full bg-white outline-none focus:outline-none">
                {/* Header */}
                <div className="p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-bold">
                    What are all these numbers about?
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-bold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
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
                      If this is your first time seeing these numbers, welcome
                      to the FGC, I'm glad you're using this as a resource to
                      get better at the game, I really appreciate it!
                    </p>
                    <br />
                    <p>
                      The number annotation system is the fighting game
                      community's way of depicting moves. The system is based
                      off the number pad you would find on a computer keyboard.
                    </p>
                    <br />
                    <img
                      src="images/number_notation.jpg"
                      className="w-fit mx-auto"
                      alt="number notation demonstration"
                    />
                    <br />
                    <p>Each number corresponds to a different direction.</p>
                    <br />
                    <ul className="list-none">
                      <li>1 = Pressing down and back</li>
                      <li>2 = Pressing down</li>
                      <li>5 = Neutral</li>
                    </ul>
                    <br />
                    <p>
                      On top of this, Guilty Gear Strive has action buttons that
                      are unique to the game.
                    </p>
                    <img
                      src="images/ggst_button_layout.png"
                      className="w-fit mx-auto"
                      alt="Guilty Gear Strive button layout"
                    />
                    <br />
                    <p className="italic">
                      Note: You don't have to use a fight stick specifically,
                      just pick the controller that's most comfy
                    </p>
                    <br />
                    <ul className="list-none font-bold text-center">
                      <li>P = Punch</li>
                      <li>K = Kick</li>
                      <li>S = Slash</li>
                      <li>HS = Heavy Slash</li>
                      <li>D = Dust</li>
                      <li>Running Man = Dash</li>
                    </ul>
                    <br />
                    <p>
                      Special moves involve the user inputing a specific set of
                      moves followed by a button.
                    </p>
                    <br />
                    <p>
                      Example: Bridgets special move "Starship" is a 623P input.
                      So you put the stick to position 6 then 2 then 3 and then
                      press Punch in quick succession.
                    </p>
                  </div>
                </div>
                {/* Footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
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
