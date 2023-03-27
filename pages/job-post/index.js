import Input from '../../components/Input'

const options = ['Category', 'Category 2', 'Category 3']

const index = () => {
  return (
    <>
      <div className="bg-white rounded-[10px] customShadow py-6 px-10 w-[690px] mx-auto">
        <Input type='text' name='Job ID' />
        <Input type='text' name='Job Category'>
          <select id="categories" className="block w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:outline-2 focus:outline-[#C179BA] focus:ring-[#C179BA] py-2 px-3 ">
            <option selected>Choose Job Category</option>
            {options.map(i =>
              <option key={i} value={i.toLowerCase().trim().replace(" ", "")}>{i}</option>
            )}
          </select>
        </Input>
        <Input type='text' name='Job Name/Title' />
        <Input type='text' name='Emirates Name' />
        <Input type='textarea' name='Job Description' />
      </div>
    </>
  )
}
export default index