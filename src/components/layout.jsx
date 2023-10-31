import { useNavigate, Outlet } from 'react-router-dom';
import { header } from '@/router/headerMenu'
import './layout.scss'
const Layouts = () => {
    const navigate = useNavigate()
    const handleClick = (path) => {
        console.log(path)
        navigate(path, {state: {na: 'sss'}})
    }
    return (
        <div className='layout'>
            <header className='header'>
                { header.map((item, index) => { return <div className='item' key={index} onClick={() => { handleClick(item.path) }}>{item.name}</div> }) }
            </header> 
            <main>
                <Outlet/>
            </main>
        </div>
    )
}
export default Layouts;