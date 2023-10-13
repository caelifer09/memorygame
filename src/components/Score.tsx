import React from 'react'

//types
import {Difficulty, type User, type GameFlow} from '@/types'

interface Props {
    user: User
    difficulty: Difficulty
    game: GameFlow
    handleDifficulty: (newDifficulty: Difficulty) => void
    logout: () => void
}

const Score = ({ user, difficulty, game, handleDifficulty, logout }: Props): React.JSX.Element => {
  return (
    <div className='mobile-mode gap-2 justify-center m-2 md:flex-row items-center'>
        <div className='w-[300px] h-[200px] rounded-3xl bg-[--primary-color] lg:mb-[30px]'>
            <p className='title'>{user.name}`S MARKER</p>
            <div className='flex justify-center items-center'>
                <div className='text-right labels'>
                    <p>SUCCESS</p>
                    <p>FAULT</p>
                    <p>TURNS</p>
                </div>
                <div className='text-left labels score'>
                    <p>{game.point}</p>
                    <p>{game.fail}</p>
                    <p>{game.turn}</p>
                </div>
            </div>
        </div>
        <div className='mobile-mode items-center m-auto lg:flex-row lg:ml-[50px]'>
            <button
            className={`${difficulty === Difficulty.Easy ? 'button-selected' : 'button'}  difficulty-button`}
            onClick={() => handleDifficulty(Difficulty.Easy)}
            >EASY</button>
            <button
            className={`${difficulty === Difficulty.Medium ? 'button-selected' : 'button'}  difficulty-button`}
            onClick={() => handleDifficulty(Difficulty.Medium)}
            >MEDIUM</button>
            <button
            className={`${difficulty === Difficulty.Hard ? 'button-selected' : 'button'}  difficulty-button`}
            onClick={() => handleDifficulty(Difficulty.Hard)}
            >HARD</button>
        </div>
        <button 
        className='logout lg:m-auto lg:mt-0'
        onClick={() => logout()}>LOGOUT</button>
    </div>
  )
}

export default Score