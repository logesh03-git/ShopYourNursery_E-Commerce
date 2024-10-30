import ContactForm from './ContactForm.tsx'
import ContactPlant from '../../assets/contact/contactplant.png'
import Location from '../../assets/contact/location.png'
import FaceBook from '../../assets/contact/facebook.png'
import Vector from '../../assets/contact/vector.png'
import Twitter from '../../assets/contact/twitter.png'
import YouTube from '../../assets/contact/youtube.png'
import { NavLink } from "react-router-dom";

const Contact = () => {
    return(
        <div>


            <div className='flex items-end mt-[104px] mb-[77px]'>
              <div>
                  <h1 className='w-[888px] text-[#2e4d1a] mb-6 text-5xl font-normal font-Philosopher leading-loose'>Reach Out to Us</h1>
                  <ContactForm />
              </div>
              <div className='h-[654px] w-[409px] relative'>
                <img className='absolute bottom-[0px] left-[25%] w-[409px] h-[409px]' src={ContactPlant} />
              </div>
            </div>

            <div className='flex  mt-[161px] gap-8 justify-start items-start'>
                <div className='flex justify-start flex-col gap-8 border border-black'>
                   <h1 className='w-[51rem] text-[#2e4d1a] text-5xl font-normal font-Philosopher leading-loose'>Find a Nursery Near You</h1>
                   <img className='w-[30rem] rounded-[15px] border border-black ' src="https://s3-alpha-sig.figma.com/img/80e0/a779/384b8025d6760654091a5b46e5fa2f4c?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LHYYD-1pQ6DzhB2sc40lvH4nmReLX01BSNT56rppLYl-W~RTxCe5MfIKYP6nP3QJbyGkhxwIveLvi-WHs1pw5Bwn7LS7fWUpfRr4kHUd9Is7JRgMcKA07dCmeJBGEzI8LTpV-iGRPqhvl2HTuWGaqgGQJYjtikosS~FyeasVnfY9HOqeggma-hiZTPuqiZi-KCWUV0eH42prlwzqCuFb0oKYX2nSqhmUucP~jCuobMtrzBhmbM-mXNEux1Lns6TMnm3nQSQcGr1V97CUjhaNuAZrw~ZUlpfvlaK4j6Qm8k9NqPeIPjr5Fqhf-vXU-am0KKIhMXd8k2m1NqSlQWhIrw__" />
                </div>
                <div className='flex flex-col justify-center items-center mt-[9rem] gap-[42px]' >
                    <div className='w-[565px] h-[100px] flex-col justify-start items-start gap-3 inline-flex'>
                        <label className=' self-stretch text-black text-[16.82px] font-normal font-Poppins'>Enter Zip-code </label>
                        <input className='pl-[27px] pr-[340px] pt-[18px] pb-[17px] bg-neutral-100 rounded-[10px] border border-[#bcbcbc] justify-start items-center inline-flex' placeholder='eg: 45453' type='text' />
                    </div>
                    <div className='w-[555px] h-[143.01px] flex-col justify-start items-start gap-[13px] inline-flex'>
                       <div className='h-[58px] flex-col justify-start items-start gap-[9px] flex'>
                           <p className='self-stretch text-black text-base font-normal font-Poppins'>EcoEden Nurseries</p>
                           <p className='self-stretch text-black text-[16.82px] font-light font-Poppins'>6391 Elgin St. Celina, Delaware 10299</p>
                       </div>
                       <hr className='h-[0px] w-[555px] border border-[#afafaf]'/>
                       <div className='h-[58px] flex-col justify-start items-start gap-[9px] flex'>
                           <p className='self-stretch text-black text-base font-normal font-Poppins'>BotanicalBliss Nursery</p>
                           <p className='self-stretch text-black text-[16.82px] font-light font-Poppins'>3517 W. Gray St. Utica, Pennsylvania 57867</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='flex justify-start items-center  mb-[241px] gap-[83px] '>
             
                <div className='w-[663px] h-[289px] flex-col justify-start items-start gap-[50px] inline-flex'>
                    <h1 className="self-stretch text-[#2e4d1a] text-[32px] font-normal font-['Philosopher'] leading-loose">Prefer a Direct Contact?</h1>
                    <div className='h-[207px] flex-col justify-start items-start gap-[21px] flex'>
                        <p className="self-stretch"><span className="text-black text-2xl font-semibold font-['Poppins']">General Inquiries</span><span className="text-black text-2xl font-normal font-['Poppins']">: contact@shopyournursery.com</span></p>
                        <p className="self-stretch"><span className="text-black text-2xl font-semibold font-['Poppins']">Vendor Partnerships</span><span className="text-black text-2xl font-normal font-['Poppins']">: vendort@shopyournursery.com</span></p>
                        <p className="self-stretch"><span className="text-black text-2xl font-semibold font-['Poppins']">Orders and Shipping</span><span className="text-black text-2xl font-normal font-['Poppins']">: orders@shopyournursery.com</span></p>
                        <p className="self-stretch"><span className="text-black text-2xl font-semibold font-['Poppins']">Phone Support</span><span className="text-black text-2xl font-normal font-['Poppins']">: +1 800 123 4567</span></p>
                    </div>
                </div>
                <div className="w-[602px] h-[215px] mt-[6.5rem] flex flex-col justify-start items-center relative bg-neutral-100 rounded-[15px]">
                    <h1 className="w-[201px] left-[201px] top-[42px] absolute text-black text-2xl font-semibold font-['Poppins'] leading-loose">Connect with Us</h1>
                    <div className="h-[50px] left-[94px] top-[125px] flex gap-[80px] absolute">
                    <NavLink to=""><img src={FaceBook}/></NavLink>
                    <NavLink to=""><img src={Vector}/></NavLink>
                    <NavLink to=""><img src={Twitter}/></NavLink>
                    <NavLink to=""><img src={YouTube}/></NavLink>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact