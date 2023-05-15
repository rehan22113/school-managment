import React from 'react'

const AddNewTeacher = () => {
  const HandleProduct = ()=>{

  }
  return (
    <div className='p-4'>
    <div className='py-5'>
      <h1 className='md:text-3xl text-xl font-semibold leading-loose mb-5'>Add New Teacher
      </h1>
      
    </div>
    {/* <div className='border p-4'>
      <div className='flex flex-wrap'>
      
      <div className='flex flex-col w-3/4'> 
      <div className=' w-full flex space-x-4'>
  
      </div>
       <div className=''>  
      <img src='https://dummyimage.com/200x200' /> 
      <FilePond
              id="inputfield"
              className="flex flex-row"
              imagePreviewMaxHeight={300}
              files={files}
              onupdatefiles={setFiles}
              allowMultiple={true}
              styleButtonRemoveItemPosition="left"
              maxfiles={3}
              allowFileTypeValidation={true}
              acceptedFileTypes={['image/png', 'image/jpeg','image/jpg']}
              server={false}
              name="files"
              labelIdle='Drag & Drop your Primary and Secondry image or <span class="filepond--label-action">Browse</span>'
          />
          </div> 
      </div>
      </div>
    </div> */}
    {/* <div className='border h-20 my-5'>
      <h1>Video</h1>
    </div> */}
    <div className='border p-4 my-5'>
    <div className='border-b p-2'>

      <h1 className='text-xl font-semibold'>Personal Details</h1>
    </div>
      <div className='flex py-5'>
      <div className='md:w-full'>
      <div className='flex'>
          <div className="mx-2 my-2 md:w-2/4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
          </div>
          <div className="mx-2 my-2 md:w-2/4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
            <input type="text" id="lname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>

        </div>
       
        <div className='flex'>
          <div className="mx-2 my-2 md:w-2/4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
          </div>
          <div className="mx-2 my-2 md:w-2/4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Phone</label>
            <input type="text" id="lname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>

        </div>
        <div className='flex'>
          <div className="mx-2 my-2 md:w-2/4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
            <textarea rows={5} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>

          <div className=' md:w-1/5 px-1 py-2'>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Upload picture *jpg/png</label>
        <img src='https://dummyimage.com/150x150' className='border border-dashed border-black' /> 
        </div>
          
          </div>
          <div className='flex'>
          <div className="mx-2 my-2 md:w-2/4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Date of Birth</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="01/01/1999" required />
          </div>
          <div className="mx-2 my-2 md:w-2/4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Place of Birth</label>
            <input type="text" id="lname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>

        </div>

        
        

 
      
      </div>
    </div>
    </div>

    <div className='border p-4 my-5'>
    <div className='border-b p-2'>

      <h1 className='text-xl font-semibold'>Education</h1>
    </div>
      <div className='flex py-5'>
      <div className='w-full'>
      <div className='flex'>
          <div className="mx-2 my-2 md:w-2/4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">University</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
          </div>
          <div className="mx-2 my-2 md:w-2/4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Degree</label>
            <input type="text" id="lname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>

        </div>
        <div className='flex'>
        <div className="mx-2 my-2 md:w-2/4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Start & End Date *</label>
              <div className='flex space-x-1'>

              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="26/01/2000" required />
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="september,16" required />
              </div>
            </div>
              <div className="mx-2 my-2 md:w-2/4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">City</label>
            <input type="text" id="lname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          </div>
             
      </div>
    </div>
    </div>
    
    <button className='p-2 px-5 bg-black text-white backdrop-blur border'>Publish</button>
  </div>
  )
}

export default AddNewTeacher