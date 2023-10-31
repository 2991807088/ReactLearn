

const Test = (props) => {
  return (
    <div>
      {props.name.map(item => {
        return(
          <div key={item}>{item}</div>
        )
      })}
      {props.title}
      <span onClick={() => {props.change('新的标题')}}>子组件改变</span>
    </div>
  )
}
export default Test;