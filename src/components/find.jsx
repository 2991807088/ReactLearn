import { useContext } from "react"
import theme  from '@/context/theme'
const Find = () => {
    const thesme = useContext(theme)
    return (
        <>
            <span>find</span>
            <span>{thesme}</span>
        </>
    )
}
export default Find