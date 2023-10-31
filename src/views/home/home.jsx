import { useState, useEffect, useRef, createContext} from 'react'
import {useSearchParams, useLocation, useNavigate} from 'react-router-dom'
import theme from '@/context/theme'
import './home.scss'
import Test from '@/components/test'
import Find from '@/components/find'
const Home = () => {
  const mounted = useRef(true)
  const [title, setTitle] = useState("官网")
  const [count, setCount] = useState(0)
  // const [params, setParams] = useSearchParams()
  // const location = useLocation()
  // console.log('params', params, 'location', location)
  // useEffect(() =>{
  //   if(mounted.current) {
  //     mounted.current = false
  //     return
  //   }
  //   console.log('无第二个参数', count)
  // })
  // useEffect(() =>{
  //   console.log('null array', count)
  // }, [count])
  // useEffect(() =>{
  //   console.log('有第二个参数', count)
  // }, [title])
  const navigate = useNavigate()
  const onRouter = () => {
    navigate('/about/6', {state: {'age': 29}})
  }
  const add = (num1, num2, callback) => {
    let sum = num1 + num2
    callback(sum)
  }
  const [list, setList] = useState(['jiakng', 'love'])
  return (
    <div className='home'>
      <span onClick={() => { add(3, 3, (s) => {console.log('ssss', s)})}}>sss</span>
      {/* <button onClick={() => { setCount(count + 1) }}>改变</button>
      <button onClick={() => { setTitle('title') }}>改变title</button> */}
      <div className="container">
        <div className="left">
          <Test name={list} title={title}  change={(p) => {setTitle(p)}}/>
        </div>
        <div className="right">
          <theme.Provider value={list}>
            <Find/>
          </theme.Provider>
        </div>
        {/* <div style={{'clear': 'both'}}></div> */}
      </div>
    </div>
  )
}
export default Home