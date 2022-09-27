import React from 'react';
import Navbar from "../components/Navbar"
import InfoModal from "../components/InfoModal"
import FrameDataModal from "../components/FrameDataModal"
import MoveDisplay from '../components/MoveDisplay';
import FrameData from '../data/FrameData.json'

export default function Home() {
  const bridgetFrameData = FrameData;

    return(
      <div>
        <Navbar />
        <div className="overflow-x-auto bg-yellow-200">
          <div>
            <img src='gifs/taunt.gif' alt='bridget music taunt' className="block mx-auto" />
          </div>
          <div className="p-6 bg-white border-spacing-8 border-white border-2 rounded-lg w-fit mx-auto drop-shadow-lg">
            <h1 className="text-lg font-epilogue lg:text-3xl">
              The all in one place for Bridget Frame Data Visualization
            </h1>
          </div>
          <h1 className="italic w-2/3 mx-auto text-center mt-2 text-gray-400">
            Disclaimer: Hitboxes are currently not enabled 
            due to mods not being compatible to the latest version. 
            Will fix this as soon as the mods are compatible
          </h1>
          <h1 className="italic w-2/3 mx-auto text-center mt-2 text-gray-400">
            Current Data is from 1.2.2 of Guilty Gear Strive
          </h1>
          <div className="p-6 w-fit mx-auto flex mb-10">
            <InfoModal />
            <FrameDataModal />
          </div>
          <div className="grid bg-yellow-200 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
            {bridgetFrameData.map((move, i) => {
              return(
                <div key={i}>
                  <MoveDisplay
                    moveName={move.MoveName}
                    moveInput={move.MoveInput}
                    moveDamage={move.Damage}
                    moveGuard={move.Guard}
                    moveStartupFrames={move.StartupFrames}
                    moveActiveFrames={move.ActiveFrames}
                    moveRecoveryFrames={move.RecoveryFrames}
                    moveOnBlockFrames={move.OnBlock}
                    moveChipRatio={move.ChipRatio}
                    moveOTGRatio={move.OTGRatio}
                    moveNumOfFramesInVideo={move.NumOfFramesInVideo}
                  />
                </div>
                
              )
            })}
          </div>
        </div>
        
      </div>
    )
  }