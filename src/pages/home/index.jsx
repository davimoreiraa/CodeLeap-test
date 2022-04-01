/* ------------------ ICONS -------------------*/
import { MdDeleteForever } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';

/* ------------------ RESOURCES -------------------*/
import { useState } from 'react'

/* ------------------ COMPONENTS -------------------*/
import Delete from '../../components/Delete'
import Edit from '../../components/Edit'

/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

export default function Home() {
  const [delete_box, setDeleteBox] = useState(false)
  const [edit_box, setEditBox] = useState(false)

  function toggleDeleteContainer() {
    setDeleteBox(!delete_box)
  }

  function toggleEditContainer() {
    setEditBox(!edit_box)
  }

  return (
    <div className={`${styles.home_body} d-flex justify-content-center`} >
      <main className={`${styles.main_home} ${delete_box ? styles.background_opacity : '' } ${edit_box ? styles.background_opacity : '' } col-6 `} >
        <div className={`${styles.header} d-flex align-items-center`} >
          <h2 className={`${styles.title} align-middle`}>CodeLeap Network</h2>
        </div>
        <div className={`${styles.creat_container} border border-secondary col-11`} >
          <h3 className={`${styles.container_message}`}>What’s on your mind?</h3>
          <label className={`${styles.post_label}`} >Title</label>
          <input type="text" className={`${styles.title_input} d-block border border-secondary rounded`} placeholder='Hello world'/>
          <label className={`${styles.post_label}`} >Content</label>
          <textarea type="text" className={`${styles.content_input} d-block border border-secondary rounded`} placeholder='Content here' rows='3' />
          <div className={`${styles.creat_button_container} d-flex flex-row-reverse`} >
          <button className={styles.creat_button} >
            Creat
          </button>
          </div>
        </div>
        <div className={`${styles.post_feed} col-11`} >
          <div className={`${styles.header} d-flex justify-content-between align-items-center`} >
            <h3 className={`${styles.title} align-middle`}>My First Post at CodeLeap Network!</h3>
            <div className={`${styles.options_icon}`} >
              <button className={`${styles.options_btn}`} onClick={toggleDeleteContainer} >
                <MdDeleteForever className={styles.icon} />
              </button>
              <button className={`${styles.options_btn}`} onClick={toggleEditContainer}> 
                <FaRegEdit className={styles.icon} />
              </button>
            </div>
          </div>
          <div className={`${styles.feeds_container} border border-secondary`} >
            <div className={`${styles.post_infos} d-flex justify-content-between align-items-center`} >
              <p className={`${styles.creator_username}`} >@Vitor</p>
              <p>25 minutes ago</p>
            </div>
            <div className={`${styles.post_content}`} >
            Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit. <br />
            <br/>
            Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
            </div>
          </div>
        </div>
        <div className={`${styles.post_feed} col-11`} >
          <div className={`${styles.header} d-flex justify-content-between align-items-center`} >
            <h3 className={`${styles.title} align-middle`}>Another Post Here</h3>
          </div>
          <div className={`${styles.feeds_container} border border-secondary`} >
            <div className={`${styles.post_infos} d-flex justify-content-between align-items-center`} >
              <p className={`${styles.creator_username}`}>@Someone else</p>
              <p>2 days ago</p>
            </div>
            <div className={`${styles.post_content}`} >
            Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit. <br />
            <br/>
            Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
            </div>
          </div>
        </div>
      </main>
      <Delete toggleDeleteContainer={toggleDeleteContainer} delete_box={delete_box}/>
      <Edit toggleEditContainer={toggleEditContainer} edit_box={edit_box}/>
    </div>
  )
}