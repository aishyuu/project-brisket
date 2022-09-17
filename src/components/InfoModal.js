import React from 'react';

export default function InfoModal() {
    const [showModal, setShowModal] = React.useState(false);

    return(
        <div>
            <button 
                className="bg-blue-400 text-white active:bg-blue-500 font-bold rounded-2xl uppercase text-sm px-6 py-3 shadow hover:bg-blue-500 hover:shadow-xl outline-non focus:outline-none mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                What are these numbers?
            </button>
            {showModal ? (
                <div className="fixed inset-0 z-40 bg-black bg-opacity-40">
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-1 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/* Modal Content */}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/* Header */}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-bold">
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
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        If this is your first time seeing these numbers, welcome to the FGC, I'm glad you're using this as a resource to get better at the game, I really appreciate this!
                                    </p>
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
    )
}