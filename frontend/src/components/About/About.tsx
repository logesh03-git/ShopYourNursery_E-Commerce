import aboutCover from '../../assets/about/aboutcover.png'
import AboutCart from './AboutCart'

const About = ()=>{


    return(
        <div>
            <div className='relative inline-block'>
                <img  className='w-[1512px] h-[721px]' src={aboutCover} />
                <div className='absolute top-[35%] left-[25%]'>
                 <h1 className='text-[#447128] text-6xl font-bold font-Philosopher leading-loose'>Bringing Nature Closer to You</h1>
                 <h6 className='text-black text-center text-2xl font-light font-Poppins leading-loose'>Connecting Plant Lovers with the Best Nurseries Across the USA</h6>
                </div>
            </div>
            <div className='m-10 mb-[100px] flex flex-col items-center justify-center'>
              <div className='w-[1332px] h-[200px] flex-col justify-start items-start gap-10 inline-flex'>
                <h1 className='text-[#2e4d1a] text-5xl font-normal font-Philosopher leading-loose'>Our Mission</h1>
                <p className='text-black text-xl font-normal font-Poppins leading-loose'>At Shop Your Nursery, we are passionate about making it easy for you to discover, purchase, and enjoy plants. Whether you're an experienced gardener, a home decor enthusiast, or new to the plant world, we connect you with local and independent nurseries offering a diverse selection of vibrant, healthy plants—from ornamental trees and shrubs to indoor houseplants and seasonal flowers. we help you find exactly what you need, all in one place.</p>
              </div>
              <AboutCart />
              <div className='w-[1118px] h-[249px] my-[224px] px-[61px] pt-[62px] pb-[62.06px] bg-[#ddf2d0] rounded-[25px] justify-center items-center inline-flex'>
                <div className='grow shrink basis-0 self-stretch flex-col justify-start items-center gap-8 inline-flex'>
                  <h1 className='self-stretch text-center text-black text-[32px] font-normal font-Philosopher leading-[50px]'>Explore Our Plant Collection and Find Your Perfect Green Companion!</h1>
                  <button className='w-[172px] px-[42.96px] py-[7.47px] bg-[#7aa262] rounded-[28.02px] justify-center items-center gap-[9.34px] inline-flex text-[#f2f2f2] text-lg font-medium font-Poppins '>Shop Now</button>
                </div>
              </div>
            </div>
        </div>
    )
}

export default About