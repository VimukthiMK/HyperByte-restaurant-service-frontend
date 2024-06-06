import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const ToastNotification = (message, type = 'info') => {
    const options = {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    }

    switch (type) {
        case 'success':
            toast.success(message, options)
            break
        case 'error':
            toast.error(message, options)
            break
        case 'warn':
            toast.warn(message, options)
            break
        case 'info':
        default:
            toast.info(message, options)
            break
    }
}

export default ToastNotification

