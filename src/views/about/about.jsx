import React, { useState, useRef } from 'react'
import './about.scss'
const Panel = ({isActive, title, children, onShow}) => {
  return (
    <section className='panel'>
      <h2>{title}</h2>
      {
        isActive ? <>{children}</> : <button style={{ 'cursor': 'pointer'}} onClick={() => { onShow(!isActive) }}>显示</button>
      }
    </section>
  )
}
const About = () => {
  const model = useRef([1,2,3])
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="about">
      { model.current.map(item => { return <p key={item}>{item}</p> }) }
      <Panel onShow={(s) => {setIsActive(true)}} isActive={isActive} title='关于'>
       阿拉木图人口约200万，是哈萨克斯坦最大的城市。它在 1929 年到 1997 年间都是首都。
      </Panel>
      <Panel onShow={(s) => {setIsActive(false)}} isActive={!isActive} title='词源'>
      这个名字来自于 <span lang="kk-KZ">алма</span>，哈萨克语中“苹果”的意思，经常被翻译成“苹果之乡”。事实上，阿拉木图的周边地区被认为是苹果的发源地，<i lang="la">Malus sieversii</i> 被认为是现今苹果的祖先
      </Panel>
     </div>
  )
}
export default About