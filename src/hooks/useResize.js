import { useEffect } from "react"

export default function useResize(ref, callback) {

    let width = 0;
    let height = 0;

    const updateSize = () => {
        width = ref.current.offsetWidth;
        height = ref.current.offsetHeight;

        callback(width, height)
    }

    useEffect(() => {

        updateSize();

        window.addEventListener('load', updateSize)
        window.addEventListener('resize', updateSize)

        return () => {
            window.removeEventListener('load', updateSize)
            window.removeEventListener('resize', updateSize)
        }
    }, [])
}