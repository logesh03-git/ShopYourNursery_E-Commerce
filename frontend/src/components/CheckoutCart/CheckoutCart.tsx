import Checkmark from "../../assets/checkoutcart/checkmark.png";
import Edit from "../../assets/checkoutcart/edit.png";
import PlusIcon from "../../assets/checkoutcart/plusicon.png";
import {useState} from 'react';

const CheckoutCart = ({onButtonClick,data}) => {
    const [Selected,setSelected] = useState(null)




const handleSelect = (index)=>{
    setSelected(index);
}
  return (
    <div className="flex flex-row items-center gap-[38px]">
        {
            data.map((item,index)=>{
                return(
                    <div Key={index} onClick={()=>{handleSelect(index)}} className="flex flex-col px-[13.8px] py-[18.2px] gap-2 justify-center items-start bg-[#F5F5DC] w-[352.9px] h-[133.5px] rounded-[13px]">
                    <div className={` flex justify-center items-center gap-x-28 w-[319px] h-[23px] pl-1 pr-2 `}>
                        <h1 className="text-[#000000] font-Poppins text-[15px]">
                        {item.name}
                        </h1>
                     <div className={`flex justify-center items-center shadow rounded-lg p-1 ${Selected === index?'bg-[#88B06F] shadow':'bg-white'}  `}> 
                     <img className="w-[10px] h-[10px] mr-2" src={Checkmark} alt="check mark icon" />
                     <p className={`bg-[#] text-[8px] ${Selected === index?'text-[#FFFFFF]':'text-[#0E0E0E]'} `}>
                        Select for shipping
                     </p>
                     </div>
                     </div>
                    <p className="text-[#5F5F5F] text-[10px]">{item.apartment}, {item.street}, {item.city}, {item.state} {item.zipcode}, {item.country}.</p>
                    <p className="text-[#5F5F5F] text-[10px]">Contact: {item.contact}</p>
                    <div className="flex gap-32 justify-center items-center"> <p className="text-[#5F5F5F] text-[10px]">Email: {item.email}</p> <div className="flex justify-center items-center w-[76px]"> <img className="w-3 h-3" src={Edit} alt="editing icon" /><button onClick={()=>onButtonClick(item)} className="text-[10px] underline">Edit Address</button></div> </div>
                    </div>
                )
            })
        }
        <div>
            <img src={PlusIcon} />
        </div>
    </div>
  )
}

export default CheckoutCart;