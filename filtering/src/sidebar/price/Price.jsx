import Input from '../../components/Input'
import './Price.css'

const Price = ({handlePriceFilter}) => {
  return (
    <div className='ml'>
      <h1 className='sidebar-title price-title'>Price</h1>

      <Input
        handleChange={handlePriceFilter}
        name={"price"}
        value={"all"}
        title={"All"}
      />
      <Input
        handleChange={handlePriceFilter}
        name={"price"}
        value={50}
        title={"$0 - 50"}
      />
      <Input
        handleChange={handlePriceFilter}
        name={"price"}
        value={100}
        title={"$50 - 100"}
      />
      <Input
        handleChange={handlePriceFilter}
        name={"price"}
        value={150}
        title={"$100 - 150"}
      />
      <Input
        handleChange={handlePriceFilter}
        name={"price"}
        value={200}
        title={"Over $150"}
      />
    </div>
  )
}

export default Price