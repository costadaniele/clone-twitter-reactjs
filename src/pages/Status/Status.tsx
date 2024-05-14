import { FormEvent, useState, KeyboardEvent } from "react";
import { Header } from "../../components/Header/Header";
import { Tweet } from "../../components/Tweet/Tweet";
import './Status.css'
import { PaperPlaneRight } from "phosphor-react";


export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswer] = useState([
    'Concordo...',
    'Faz sentido'
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswer([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswer([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <main className='status'>
      <Header title='Tweet' />
      <Tweet content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime inventore odit nobis officia eveniet nihil dolore nulla odio enim earum laboriosam expedita blanditiis incidunt molestiae vitae excepturi, veniam nam vero!" />

      {/* <div className="separator" /> */}

      <form onSubmit={createNewAnswer} className='answer-tweet-form'>
        <label htmlFor='tweet'>
          <img src='https://github.com/costadaniele.png' alt='Daniele Costa' />
          <textarea
            id='tweet'
            placeholder="Tweet you answer"
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
          />
        </label>

        <button type='submit'>
          <PaperPlaneRight />
          <span>
            Answer
          </span>
        </button>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />;
      })}

    </main>
  )
}