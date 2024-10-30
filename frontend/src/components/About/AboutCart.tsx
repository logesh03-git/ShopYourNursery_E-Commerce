import Curated from '../../assets/about/curated.png'
import Grower from '../../assets/about/grower.png'
import Notionwide from '../../assets/about/notionwide.png'
import Personalised from '../../assets/about/personalised.png'



const AboutCart = ()=>{

    const data =[
        {
        title:'Curated Selection',
        content:'We handpick nurseries that meet our high standards for quality, sustainability, and customer service.',
        img: Curated
        },
        {
        title:'Curated Selection',
        content:'We handpick nurseries that meet our high standards for quality, sustainability, and customer service.',
        img: Grower
        },
        {
        title:'Curated Selection',
        content:'We handpick nurseries that meet our high standards for quality, sustainability, and customer service.',
        img: Notionwide
        },
        {
        title:'Curated Selection',
        content:'We handpick nurseries that meet our high standards for quality, sustainability, and customer service.',
        img: Personalised
        },
    ]

    return(
        <div className='flex flex-col ml-[40px] mt-[150px] gap-10'>
            <h1 className='text-[#2e4d1a] text-5xl font-normal font-Philosopher leading-loose'>What Makes Us Different?</h1>
            <div className='w-[1372px]  h-[768px] flex-col justify-start items-start gap-20 inline-flex'>
                {
                    data.map((item,index)=>(
                        <div Key={index} className=' self-stretch h-[132px] px-8 py-[26px] bg-neutral-100 rounded-[15px] justify-start items-center gap-[35px] inline-flex' >
                            <div className='w-20 h-20 p-5 bg-[#ddf2d0] rounded-[20px] justify-center items-center inline-flex'>
                                <img src={item.img} alt={`${item.title} icon`} />
                            </div>
                            <div className='w-[1193px] flex-col justify-start items-start gap-[17px] inline-flex'>
                                <h4 className='self-stretch text-black text-xl font-semibold font-Poppins leading-normal'>{item.title}</h4>
                                <p className='self-stretch text-black text-lg font-normal font-Poppins leading-[30px]'>{item.content}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AboutCart