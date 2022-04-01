/* ------------------ RESOURCES -------------------*/
import { useState } from 'react'

/* ------------------ COMPONENTS -------------------*/
import Link from 'next/link'

/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

export default function Signup() {
  const [filledInput, setFilledInput] = useState(false)

  return (
    <div className={`${styles.body}`}>
      <div className={`${styles.container} position-absolute top-50 start-50 translate-middle`}>
        <div className={`${styles.main_container}`} >
          <h1 className={`${styles.welcome_message} `} >Welcome to CodeLeap network!</h1>
          <form className={`${styles.form}`}>
            <label htmlFor="name" className={`${styles.name_label} d-block`}>Please enter your username</label>
            <input type="text" id='name' placeholder='John doe' className={`${styles.input_name} border border-secondary`} onKeyUp={(e) => {
              console.log(e.target.value)
              e.target.value === '' ? setFilledInput(false) : setFilledInput(true)
            } } />
            <div className={`d-flex flex-row-reverse`} >
              <button className={`${styles.submit} ${filledInput ? "" : styles.disabled_submit_button }`}> 
                <Link href={ filledInput ? '/home' : ''}>
                  <a className={styles.enter_button_link} >Enter </a> 
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}