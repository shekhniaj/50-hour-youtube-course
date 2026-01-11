
const Button = ({onClick, title}) => {
  return (
    <button onClick={onClick} className='btns'>{title}</button>
  )
}

export default Button