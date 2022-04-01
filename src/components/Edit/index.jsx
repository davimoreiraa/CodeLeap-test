/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

export default function Edit(props) {
  return (
    <div className={`${styles.edit_container} ${props.edit_box ? "" : styles.disable_edit_container} position-fixed top-50 start-50 translate-middle col-5 rounded`}>
      <p className={`${styles.edit_message}`}>Edit item</p>
      <label className={`${styles.edit_post_label}`} >Title</label>
      <input type="text" className={`${styles.title_input} d-block border border-secondary rounded`} placeholder='Hello world'/>
      <label className={`${styles.edit_post_label}`} >Content</label>
      <textarea type="text" className={`${styles.content_input} d-block border border-secondary rounded`} placeholder='Content here' rows='3' />
      <div className={`${styles.save_button_container} d-flex flex-row-reverse`} >
        <button className={styles.save_button} onClick={props.toggleEditContainer} >
          Save
        </button>
      </div>
    </div>
  )
}