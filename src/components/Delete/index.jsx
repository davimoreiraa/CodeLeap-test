/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

export default function Delete(props) {
  return (
    <div className={`${styles.delete_container} ${props.delete_box ? "" : styles.disable_delete_container} position-fixed col-4 rounded`}>
      <p className={`${styles.delete_message}`}>Are you sure you want to delete this item?</p>
      <div className={`d-block d-flex flex-row-reverse`} >
        <button className={`${styles.btn} border border-dark`} onClick={props.toggleDeleteContainer}>
          OK
        </button>
        <button className={`${styles.btn} border border-dark`} onClick={props.toggleDeleteContainer}>
          Cancel
        </button>
      </div>
    </div>
  )
}