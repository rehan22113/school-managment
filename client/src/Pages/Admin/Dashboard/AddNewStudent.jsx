import React,{useState,useEffect,useRef} from 'react'


const AddNewStudent = () => {
 
    const HandleProduct = ()=>{

    }
  return (
    <>
    <div className='p-4'>
      <div className='py-5'>
        <h1 className='md:text-3xl text-xl font-semibold leading-loose mb-5'>Add New Student
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

        <h1 className='text-xl font-semibold'>Student Details</h1>
      </div>
        <div className='flex py-5'>
        <div className=' md:w-1/5 px-1'>
        <img src='https://dummyimage.com/200x200' /> 
        <span>Upload picture *jpg/png</span>
        </div>
        <div className='md:w-2/3'>
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
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Date & Place of Birth</label>
              <div className='flex space-x-1'>

              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="26/01/2000" required />
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="islamabad" required />
              </div>
            </div>
            <div className="mx-2 my-2 md:w-2/4">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Parent Name</label>
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
            </div>

   
        
        </div>
      </div>
      </div>

      <div className='border p-4 my-5'>
      <div className='border-b p-2'>

        <h1 className='text-xl font-semibold'>Parent Details</h1>
      </div>
        <div className='flex py-5'>
        <div className='w-full'>
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
            <div className="mx-2 my-2 md:w-2/4 ">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Payment type*</label>
              <div className='flex space-x-2'>

              <input type="radio" id="cash" name='payment' />
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Cash</label>

              <input type="radio" id="debit" name='payment' />
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Debit</label>
              </div>

            </div>
            </div>

   
        
        </div>
      </div>
      </div>
      
      <button className='p-2 px-5 bg-black text-white backdrop-blur border'>Publish</button>
    </div>
    </>
  )
}

export default AddNewStudent