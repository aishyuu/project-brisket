import MoveModal from "./MoveModal";

export default function MoveDisplay(props) {
    let currentMoveURL="moves/" + props.moveInput + "_122.gif";
    return(
        <div className="bg-white rounded-xl w-fit p-2 ml-auto mr-auto mb-6 shadow-lg">
            {/* Header */}
            <h1 className="text-lg font-bold">{props.moveName}</h1>
            <p className="text-md">{props.moveInput}</p>
            {/* Body */}
            <div className="my-2">
                <p className="bg-green-200 block">Startup Frames: {props.moveStartupFrames}</p>
                <p className="bg-blue-200 block">Active Frames: {props.moveActiveFrames}</p>
                <p className="bg-pink-200 block">Recovery Frames: {props.moveRecoveryFrames}</p>
                <p className="bg-red-200 block">On Block: {props.moveOnBlockFrames}</p>
            </div>
            <MoveModal 
                moveURL={currentMoveURL}
                moveInput={props.moveInput}
                framesInVideo={props.moveNumOfFramesInVideo}
            />
            {/* Footer */}
            <div className="mt-3">
                <p className="p-1 border-2 border-gray-200">Damage: {props.moveDamage}</p>
                <p className="p-1 border-2 border-gray-200">Guard: {props.moveGuard}</p>
                <p className="p-1 border-2 border-gray-200">Chip Ratio: {props.moveChipRatio}</p>
                <p className="p-1 border-2 border-gray-200">OTG Ratio: {props.moveOTGRatio}</p>
            </div>
            
        </div>
    )
}