import { FormEvent, useState, KeyboardEvent } from "react";
import { Header } from "../../components/Header/Header";
import { Tweet } from "../../components/Tweet/Tweet";
import './Timeline.css'

export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    "Olá",
    'Oi'
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

  return (
    <main className='timeline'>
      <Header title='Home' />

      <form onSubmit={createNewTweet} className='new-tweet-form'>
        <label htmlFor='tweet'>
          <img src='https://github.com/costadaniele.png' alt='Daniele Costa' />
          <textarea id='tweet'
            placeholder="What's a happening?"
            value={newTweet}
            onChange={(event) => {
              setNewTweet(event.target.value)
            }}
            onKeyDown={handleHotkeySubmit}
          />
        </label>

        <button type='submit'>Tweet</button>
      </form>

      <div className="separator" />

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />;
      })}

    </main>
  )
}