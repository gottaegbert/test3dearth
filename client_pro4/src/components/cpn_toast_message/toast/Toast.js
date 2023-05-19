import { useCallback ,useEffect} from 'react'
import styles from './Toast.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Toast = ({ toastlist, position, setList }) => {

  const deleteToast = useCallback(id => {
    const toastListItem = toastlist.filter(e => e.id !== id);
    setList(toastListItem);
  }, [toastlist, setList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if(toastlist.length) {
        deleteToast(toastlist[0].id);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    }
  }, [toastlist, deleteToast]);

  return (
    <div className={`${styles.container} ${styles[position]}`}>
      {
        toastlist.map((toast, i) => (
          <div
            key={i}
            className={`${styles.notification} ${styles.toast} ${styles[position]}`}
            style={{ backgroundColor: toast.backgroundColor}}
          >
            <button onClick={() => deleteToast(toast.id)}>X</button>
            <div style={{display : 'flex', flexDirection : 'row'}}>
              <div style={{display : 'flex' , alignItems : 'center'}}>
                <i class="fa-solid fa-circle-check" style={{fontSize : '30px', margin : '0 15px'}}></i>
              </div>
              <div>
                <p className={styles.title}>{toast.title}</p>
                <p className={styles.description}>{toast.description}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Toast













