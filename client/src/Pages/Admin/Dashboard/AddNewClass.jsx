import React,{useState,useEffect,useRef} from 'react'


const AddNewClass = () => {
 
    const HandleProduct = ()=>{

    }
  return (
    <>
    <div className='p-4'>
      <div className='py-5'>
        <h1 className='md:text-3xl text-xl font-semibold leading-loose mb-5'>Add Class
        </h1>
        
      </div>
     
      <div className='border p-4 my-5'>
      <div className='border-b p-2'>

        <h1 className='text-xl font-semibold'>Class Details</h1>
      </div>
        <div className='flex py-5'>
       
        <div className='md:w-full'>
        <div className='flex flex-col'>
            <div className="mx-2 my-2 md:w-2/4 ">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Class Name *</label>
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1-12" required />
            </div>
            <div className="mx-2 my-2 md:w-2/4">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Class Teaher *</label>
              <input type="text" id="lname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

          </div>
          

         
          <div className='flex'>
            <div className="mx-2 my-2 md:w-2/4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Note</label>
              <textarea rows={5} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
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

export default AddNewClass