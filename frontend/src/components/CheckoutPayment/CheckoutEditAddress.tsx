import Back from '../../assets/checkoutpayment/Back.png'
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const CheckoutEditAddress = ({data,title,onUpdateData}) => {

    const navigate = useNavigate()

    const[EditAddress,setEditAddress] = useState({
        name:'',
        contact:'',
        apartment:'',
        street:'',
        city:'',
        state:'',
        country:'',
        zipcode:'',
        selectaddress:false,
    })

    useEffect(()=>{
        if(data){
            setEditAddress({...data,selectaddress:false})
        }
    },[data]);

    const handleEditAddress =(e)=>{
        const {name,value} =e.target;
        
        setEditAddress({...EditAddress,[name]: value})
    }

    const handleCheckboxChange =(e)=>{
        setEditAddress({...EditAddress,selectaddress: e.target.checked })
    }

    const handleSubmit = ()=>{
        onUpdateData(EditAddress)

        setEditAddress({
        name:'',
        contact:'',
        apartment:'',
        street:'',
        city:'',
        state:'',
        country:'',
        zipcode:'',
        selectaddress:false,
    })
    }
    
  return (
   <div className="flex flex-col mt-[70px] gap-4">
    <div className="w-[843px] h-[409px] flex flex-col justify-start items-start gap-4 bg-neutral-100 pr-[39px] pl-[43px] py-[35px] rounded-[15px]">
        <h1 className="text-start text-black text-xl font-medium font-['Poppins']">{title}</h1>
        <div className="flex justify-start items-center gap-3">
            <div className="flex flex-col">
                <label className="text-black text-base font-normal font-['Poppins']">Full name </label>
                <input className="h-10 w-[366px] p-[9px] bg-white" name='name' type='text' value={EditAddress.name} onChange={handleEditAddress} />
            </div>
            <div className="flex flex-col">
                <label className="text-black text-base font-normal font-['Poppins']">Contact Number </label>
                <input className="h-10 w-[366px] p-[9px] bg-white" name='contact' type='tel' value={EditAddress.contact} onChange={handleEditAddress}/>
            </div>
            
        </div>
        <div className="flex justify-start items-center gap-[30px]">
            <div className="flex flex-col">
                <label className="text-black text-base font-normal font-['Poppins']">Apartment </label>
                <input className="h-10 w-[228px] p-[5px] bg-white" name='apartment' type='text' value={EditAddress.apartment} onChange={handleEditAddress}/>
            </div>
            <div className="flex flex-col">
                <label className="text-black text-base font-normal font-['Poppins']">Street </label>
                <input className="h-10 w-[228px] p-[5px] bg-white" name='street' type='text' value={EditAddress.street} onChange={handleEditAddress}/>
            </div>
            <div className="flex flex-col">
                <label className="text-black text-base font-normal font-['Poppins']">City </label>
                <input className="h-10 w-[228px] p-[5px] bg-white" name='city' type='text' value={EditAddress.city} onChange={handleEditAddress}/>
            </div>
        </div>
        <div className="flex justify-start items-center gap-[30px]">
            <div className="flex flex-col">
                <label className="text-black text-base font-normal font-['Poppins']">State </label>
                <input className="h-10 w-[228px] p-[5px] bg-white" name='state' type='text' value={EditAddress.state} onChange={handleEditAddress}/>
            </div>
            <div className="flex flex-col">
                <label className="text-black text-base font-normal font-['Poppins']">Country</label>
                <input className="h-10 w-[228px] p-[5px] bg-white" name='country' type='text' value={EditAddress.country} onChange={handleEditAddress}/>
            </div>
            <div className="flex flex-col">
                <label className="text-black text-base font-normal font-['Poppins']">Zip Code</label>
                <input className="h-10 w-[228px] p-[5px] bg-white" name='zipcode' type='text' value={EditAddress.zipcode} onChange={handleEditAddress}/>
            </div>
        </div>
        
    </div>
        <div className='flex items-center justify-between'>
            <div className="flex items-center gap-1">
              <input className="w-[17px] h-[15px] relative rounded border border-black" type='checkbox' name='selectaddress' checked={EditAddress.selectaddress} onChange={handleCheckboxChange} />
              <label className="text-[#8b8b8b] text-base font-medium font-['Poppins'] leading-normal tracking-wide">Select this address for shipping</label>
            </div>
            <div>
              <button onClick={handleSubmit} className='w-20 h-[25px] px-[5px] py-2 bg-white rounded-md shadow border border-[#8ebc71] justify-between items-center inline-flex text-[#0d0d0d] text-[10px] font-normal font-Poppins leading-[8.09px] tracking-tight'>Save Address</button>
            </div>
        </div>
        <div className="flex items-center justify-between m-10" >
          <div onClick={()=>{navigate(-1)}} className="w-[247px] h-6 justify-start items-center gap-7 inline-flex">
            <img className="w-5 h-5" src={Back}/>
            <a className="text-center text-black text-xl font-normal font-['Poppins'] underline leading-normal tracking-wide">Back</a>
          </div>
          <div>
            <button className="w-[343.68px] h-[42.94px] px-[42.96px] py-[7.47px] bg-[#a5a5a5] rounded-[28.02px] justify-center items-center gap-[9.34px] inline-flex text-[#f2f2f2] text-lg font-medium font-['Poppins'] hover:bg-[#7aa262]">Proceed to Checkout</button>
          </div>
        </div>
   </div>
  )
}

export default CheckoutEditAddress