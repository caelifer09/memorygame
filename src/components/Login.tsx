import React from 'react'

//types
import type {User} from '@/types'

interface Props {
    setUser:  (user: User) => void
}

const Login = ({ setUser }: Props): React.JSX.Element => {
    const [name, setName] = React.useState<string>("");
    const [error, setError] = React.useState<string | null>(null);

    const handlerClick = () => {
        if (name.trim().length < 1 || name.trim().length > 8) {
            setError("name must be between 1 and 8 characters")
            return setTimeout(() => {
                setError(null)
            }, 5000);
        }
        const user:User = {
          name
        }
        return setUser(user)
    }

  return (
    <div className='mobile-mode gap-6'>
      <h1 className='text-4xl text-center sm:text-5xl md:text-7xl lg:text-9xl text-white'>MEMORIZE GAME</h1>
      <div className="mobile-mode bg-[--primary-color] rad w-[503px] m-auto rounded-[52px] items-center justify-center gap-6">
        <p className="title">WHAT’S YOUR NAME?</p>
        <input
        name="name"
        type='text'
        onChange={(e) => setName(e.currentTarget.value)}
        value={name}
        className='p-2 w-[343px] h-[53px] rounded-lg bg-[--primary-color] border-none focus:outline-none focus:ring-2 focus:ring-indigo-500'
        placeholder='enter your name...' 
        />
        <button
        className='w-[235px] h-[76px] button'
        onClick={() => handlerClick()}
        >
        play
        </button>
        {error && <p className='text-red-400 p-2 m-2 text-xl'>{error}</p>}
  </div>
    </div>
  )
}

export default Login