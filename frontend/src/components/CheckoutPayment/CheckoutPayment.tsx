import CreditCard from '../../assets/checkoutpayment/credit.png'
import UPI from '../../assets/checkoutpayment/upi.png'
import Rectangle from '../../assets/checkoutpayment/rectangle.svg'
import Paypal from '../../assets/checkoutpayment/paypal.png'
import Gpay from '../../assets/checkoutpayment/googlepay.png'
import PhonePay from '../../assets/checkoutpayment/phonepay.png'
import ActiveBtn from '../../assets/checkoutpayment/activeradiobtn.svg'
import InActiveBtn from '../../assets/checkoutpayment/inactiveradiobtn.svg';
import Back from '../../assets/checkoutpayment/Back.png';
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const CheckoutPayment = () => {

  const navigate = useNavigate()

  const [SelectPay, setSelectPay] = useState('gpay');

  return (
    <div className="mt-[70px]" >
       <div className="inline-flex items-start bg-[#F5F5F5] w-[52.63rem] h-[29.26rem] pl-[35px] pr-[48px] pt-[42px] pb-[51px] gap-[33px]">
        <div className='flex flex-col justify-center items-center gap-10 '>
            <div className="flex flex-col justify-end items-center w-24 h-24 px-[19px] pt-[15px] pb-[14px] gap-[14px] self-stretch bg-[#FFF]">
              <img className='w-[58px] h-[46px]' src={CreditCard}/>
              <p className="text-[8px] font-Poppins font-medium">Credit Card</p>
            </div>
            <div className="flex ">
              <img className=' w-1 h-24' src={Rectangle}/>  
              <div className="flex flex-col justify-end items-center w-24 h-24 px-[19px] pt-[15px] pb-[14px] gap-[14px] self-stretch bg-[#FFF]"> 
               <img className='w-[70px] h-[39px] shrink-0' src={UPI}/>
               <p className="text-[8px] font-Poppins font-medium" >UPI Payment</p>
              </div> 
            </div>
            <div className="flex flex-col justify-end items-center w-24 h-24 px-[27px] pt-[15px] pb-[16px] gap-[14px] self-stretch bg-[#FFF]">
              <img className='w-[43px] h-[43px]' src={Paypal}/>
              <p className="text-[8px] font-Poppins font-medium">Paypal</p>
            </div>
        </div>
        
        <div className="flex flex-col justify-start items-start px-[29px] py-[42px] bg-[#fff] gap-8 w-[631px] h-[374px]">
            <h1 className="text-[24px] text-left font-Poppins not-italic leading-normal font-medium">Payment Method</h1>
            <div className="flex gap-[30px] ">
              <div className="inline-flex items-center gap-[20px]"> { SelectPay === 'gpay'? <img src={ActiveBtn}/>: <img src={InActiveBtn} onClick={()=> setSelectPay('gpay')}/> } <div className=' flex justify-center items-center gap-[12px]'> <div className='bg-[#F5F5F5] flex justify-center items-center rounded-[14px] w-[50px] h-[50px]'> <img className=' w-[30px] h-[30px]' src={Gpay}/> </div> <h4 className='font-Inter text-[16px] font-normal leading-normal'>Google pay</h4></div> </div>
              <div className="inline-flex items-center gap-[20px]"> { SelectPay === 'phonepay'? <img src={ActiveBtn}/>: <img src={InActiveBtn} onClick={()=> setSelectPay('phonepay')}/> } <div className=' flex justify-center items-center gap-[12px]'> <div className='bg-[#F5F5F5] flex justify-center items-center rounded-[14px] w-[50px] h-[50px]'> <img className=' w-[30px] h-[30px]' src={PhonePay}/> </div> <h4 className='font-Inter text-[16px] font-normal leading-normal'>Phone pay</h4></div> </div>
            </div>
            <div className="flex flex-col">
              <label className='font-Poppins font-normal leading-normal text-[16px] text-[#000] h-[35px] self-stretch'>Enter your UPI ID </label>
              <input className="h-[46px] w-[573px] pl-3.5 pr-[427px] pt-3 pb-[13px] bg-neutral-100 justify-start items-center inline-flex text-center text-[#8b8b8b] text-sm font-normal font-['Poppins']"  placeholder='eg:123456789@upi' />
            </div>
            <div className="flex items-center gap-1">
              <input className="w-[17px] h-[15px] relative rounded border border-black" type='checkbox'/>
              <label className="text-[#8b8b8b] text-base font-medium font-['Poppins'] leading-normal tracking-wide">Save this UPI ID for faster checkout</label>
            </div>
        </div>
      </div> 
      <div className="flex items-center justify-between m-10" >
        <div onClick={()=>{navigate(-1)}} className="w-[247px] h-6 justify-start items-center gap-7 inline-flex">
          <img className="w-5 h-5" src={Back}/>
          <a className="text-center text-black text-xl font-normal font-['Poppins'] underline leading-normal tracking-wide">Back</a>
        </div>
        <div>
          <button className="w-[343.68px] h-[42.94px] px-[42.96px] py-[7.47px] bg-[#a5a5a5] rounded-[28.02px] justify-center items-center gap-[9.34px] inline-flex text-[#f2f2f2] text-lg font-medium font-['Poppins'] hover:bg-[#7aa262]">Confirm</button>
        </div>
      </div> 
        
    </div>
  )
}

export default CheckoutPayment
