import React,{useState} from 'react'

const AddToProduct = () => {
  const [name,setName]=useState('');
  const [price,setPrice]=useState(0);
  const [category,setCategory]=useState('');
  const [description,setDescription]=useState('');
  const [avatar,setAvatar]=useState('');
  const [developerEmail,setEmail]=useState('');
  let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1kc2hha2lyaHVzc2FpbjI5OEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vbXNoYWtpcjA4MiIsImlhdCI6MTY2NDAxODIyMiwiZXhwIjoxNjY0NDUwMjIyfQ.uT1CvQerUU6z7RHB0UJ98VwqbEl1lC2iv_bf887pw7A";

  const handelSubmit= async(e)=>{
    e.preventDefault();
    let obj={
      name,
      price:Number(price),
      category,
      description,
      avatar,
      developerEmail
    }
    const response = await fetch('https://upayments-studycase-api.herokuapp.com/api/products', {
      method: 'POST',
      headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${token}`, 
      },
      body: JSON.stringify(obj)
  })
    console.log(response)
  }
  return (
    <div className="library " >
      
        <form className='border-blue-800 border rounded-md w-4/12 h-auto m-auto  ' onSubmit={handelSubmit}>
            <h1> Add New Product</h1>
            <div className="p-4">
              <label className="p-2">Product Name</label>
              <input type="text" placeholder="Product Name" className="p-1 border rounded-md border-black-500" onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="p-4">
              <label className="p-2">Product Price</label>
              <input type="number" placeholder="Product Price" className="p-1 border rounded-md border-black-500"  onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <div className="p-4">
            <label>category </label>
            <select id="selectTegFilter" onChange={(e)=>setCategory(e.target.value)}>
              <option value="all">All</option>
              <option value="Clothing">Clothing</option>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Accessories">Accessories</option>
              <option value="Hobby">Hobby</option>
            </select>
            </div>
            <div className="p-4">
              <label className="p-2">Product Description</label>
              <input type="text" placeholder="Product Description" className="p-1 border rounded-md border-black-500" onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div className="p-4">
              <label className="p-2">Product Avatar</label>
              <input type="text" placeholder="Product Avatar" className="p-1 border rounded-md border-black-500" onChange={(e)=>setAvatar(e.target.value)}/>
            </div>
            <div className="p-4">
              <label className="p-2">Developer Email</label>
              <input type="text" placeholder="Developer Email" className="p-1 border rounded-md border-black-500" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <br></br>
            <input type="submit" value="Submit" className="border border-teal-500 w-20 text-center rounded-md cursor-pointer"/>
            <br></br>
            <br></br>
        </form>
    </div>

  )
}

export default AddToProduct