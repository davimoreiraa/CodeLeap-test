/* ------------------ RESOURCES -------------------*/
import useIsFilled from '../../hooks/useIsFilled'

/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

export default function Signup() {

  return (
    <div className={`${styles.body}`}>
      <div className={`${styles.container} position-absolute top-50 start-50 translate-middle`}>
        <div className={`${styles.main_container}`} >
          <h1 className={`${styles.welcome_message} `} >Welcome to CodeLeap network!</h1>
          <form className={`${styles.form}`} onSubmit={e => e.preventDefault() }>
            <label htmlFor="name" className={`${styles.name_label} d-block`}>Please enter your username</label>
            <input type="text" id='name' placeholder='John doe' className={`${styles.input_name} border border-secondary`} onKeyUp={(e) =>  useIsFilled(e.target.value)    } />
            <div className={`d-flex flex-row-reverse`} >
              
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}