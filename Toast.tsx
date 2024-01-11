import '/src/assets/css/toast.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faCheck, faCircleInfo, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const Icons : { [key:string]: JSX.Element } = {
    "success": <FontAwesomeIcon icon={faCheck} />,
    "error": <FontAwesomeIcon icon={faBan} />,
    "info": <FontAwesomeIcon icon={faCircleInfo} />,
    "warning": <FontAwesomeIcon icon={faTriangleExclamation} />,
}

export const Toast = (props: {type: "error" | "info" | "success" | "warning", message: string}) => {
    return (
        <>
            <div className={`toast toast--${props.type}`}>
                {Icons[props.type]}
                <div className='toast__content'>
                    <p>{props.message}</p>
                </div>
            </div>

        </>
    )
}
