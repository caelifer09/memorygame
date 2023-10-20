import React from 'react';
import Card from './Card';
import Swal from 'sweetalert2';
import Score from './Score';
import {useCards} from '@/hook/useCards'

//interface
import {Difficulty, type User} from '@/types'

interface Props {
    user: User
    setUser:  (user: User | null) => void
}

const Board = ({ user, setUser }: Props): React.JSX.Element => {
    const [difficulty, setDifficulty] = React.useState<Difficulty>(Difficulty.Easy);

    const {game, gameStart, cards, handleClickCard, loading, hostname} = useCards(user.name);

    React.useEffect(() => {
        gameStart(difficulty)
    },[difficulty])

    React.useEffect(() => {
        if (game.point === difficulty) {
            Swal.fire({
                title: 'Game win',
                text: `congrat!! ${user.name} you win, ${difficulty === 20 ? "what a beast" : "Try the next dificulty" }`,
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'ok'
              }).then((result) => {
                if (result.isConfirmed) {
                    gameStart(difficulty);
                }
              })
        }
    },[game.point])

    const handleDifficulty = (newDifficulty: Difficulty): void => {
        if (newDifficulty === difficulty) return;
        return setDifficulty(newDifficulty);
    }

    const logout = (): void => {
        localStorage.removeItem("user")
        gameStart(difficulty)
        return setUser(null)
    }

    if(loading) return <p>loading...</p>

  return (
    <div className='mobile-mode items-center p-2'>
        <Score 
        user={user}
        difficulty={difficulty}
        game={game}
        handleDifficulty={handleDifficulty}
        logout={logout}
        />
        <div className='mobile-mode gap-2 max-w-[200px] items-center sm:grid sm:max-w-[450px] sm:grid-cols-2 md:max-w-[650px] md:grid-cols-3 lg:max-w-none lg:grid-cols-5 md:m-2'>
            {cards && cards.map(card => (
            <Card key={card.id} card={card} callback={handleClickCard} />
            ))}
        </div>
        <p>{hostname}</p>
    </div>
  )
}

export default Board