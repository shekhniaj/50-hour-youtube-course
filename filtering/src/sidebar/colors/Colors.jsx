import Input from '../../components/Input'
import './Colors.css'

export const Colors = ({handleColorFilter}) => {
  return (
    <div className='ml'>
      <h1 className='sidebar-title color-title'>Colors</h1>

      <Input
        handleChange={handleColorFilter}
        name={"colors"}
        value={'all'}
        title={"All"}
      />
      <Input
        handleChange={handleColorFilter}
        name={"colors"}
        value={'black'}
        title={"Black"}
      />
      <Input
        handleChange={handleColorFilter}
        name={"colors"}
        value={'blue'}
        title={"Blue"}
      />
      <Input
        handleChange={handleColorFilter}
        name={"colors"}
        value={'red'}
        title={"Red"}
      />
      <Input
        handleChange={handleColorFilter}
        name={"colors"}
        value={'green'}
        title={"Green"}
      />
      <Input
        handleChange={handleColorFilter}
        name={"colors"}
        value={'white'}
        title={"White"}
      />
    </div>
  )
}

export default Colors
