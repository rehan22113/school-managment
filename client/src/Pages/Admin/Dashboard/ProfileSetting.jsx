import React,{useState} from 'react'

const ProfileSetting = () => {
    const HandleData = ()=>{

    }

    const HandleSubmit = ()=>{

    }

    const [shopData,setShopData] = useState({
        name:"",
        files:"",
        url:"",
        productsPerPage:0,
        street:"",
        postalCode:"",
        city:"",
        country:"",
        phone:0
        
    })

  return (
    <div className='container px-5 py-3'>
      <div className='border-b'>
      <h2 className='text-xl font-bold text-black'>
         Profile Setting
      </h2>
      </div>
      <form encType='multipart/form-data'>
      <div className='flex py-5'>
      <div className='px-10 py-5 w-1/5'>
        <h2 className='text-lg font-semibold text-black'>Add Profile picture </h2>
        {/* <FilePond
            imagePreviewMaxHeight={400}
            files={files}
            onupdatefiles={setFiles}
            allowMultiple={false}
            styleButtonRemoveItemPosition="left"
            maxFiles={1}
            server={false}
            name="files"
            labelIdle='Upload Primary Picture <span className="filepond--label-action">Browse</span>'
            /> */}
            <img src="https://dummyimage.com/200x200" />
        </div>
       
        <div className=' space-y-5 w-2/3'>
        <div className='flex space-x-2 px-10 items-center'>
        <div className=' w-1/12'>
  <label htmlFor="store_name" className="block mb-2 text-sm text-gray-900 font-semibold">Name</label>
        </div>
        <div className=' w-full'>
  <input type="text" id="store_name" onChange={HandleData} name='name' value={shopData.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="vendor" required />
        </div>
</div>
<div className='flex space-x-2 px-10 items-center'>
        <div className=' w-1/12'>
  <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 font-semibold">email </label>
  {/* <p className=' text-slate-400'> No any space or special character</p> */}
        </div>
        <div className=' w-full'>
  <input type="text" id="productPerPage" onChange={HandleData} name='url' value={shopData.url} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={0} placeholder="" required />
        </div>
</div>
<div className='flex space-x-2 px-10 items-center'>
        <div className=' w-1/12'>
  <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 font-semibold">Password</label>
        </div>
        <div className=' w-full'>
  <input type="number" id="productPerPage" onChange={HandleData} name='productsPerPage' value={shopData.productsPerPage} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={0} placeholder="" required />
        </div>
</div>
<div className='flex space-x-2 px-10 items-center'>
      <div className=' w-1/12'>
        <label htmlFor="streetAddress" className="block mb-2 text-sm  text-gray-900 font-semibold">Address</label>
      </div>
        <div className=' w-full space-y-2'>
  <input type="text" name='street' onChange={HandleData} id="streetAddress" value={shopData.street} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="street address" required />
  <input type="text" name='city' onChange={HandleData} id="city" value={shopData.city} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City" required />
  <input type="text" name='postalCode' onChange={HandleData} id="first_name" value={shopData.postCode} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Post/zip code" required />
  <input type="text" name='country' onChange={HandleData} id="country" value={shopData.country} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Country" required />
  <input type="text" name='state' onChange={HandleData} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="State" required />
        </div>

</div>
        <div className='flex space-x-2 px-10 items-center'>
        <div className=' w-1/12'>
  <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 font-semibold">Phone No.</label>
        </div>
        <div className=' w-full'>
  <input type="number" name='phone' onChange={HandleData} id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={0} placeholder="" required />
        </div>
</div>
</div>
</div>
<div className=' py-10 '>

    <button type='submit' onClick={HandleSubmit} className='p-2 px-5 bg-black text-white backdrop-blur border'>Save and Update</button>
</div>
</form>
    </div>
  )
}

export default ProfileSetting