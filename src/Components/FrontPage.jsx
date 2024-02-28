import Logo from '../assets/logo.png'
import trophy from '../assets/1.png'
import handshake from '../assets/2.png'
import appliances from '../assets/3.png'
const FrontPage = () => {
  return (
    <div className='bg-gradient-to-b from-white to-yellow-200'>
      <div className=''>
        <img src={Logo} className='w-full md:w-[300px] h-auto mx-auto' alt="Logo" />
      </div>
      <div className='Content flex flex-col md:flex-row'>
        <div className='image'>
          <img src={trophy} className="w-full md:w-[850px] h-auto mx-auto md:ml-8" alt="Trophy" />
        </div>
        <div className='mt-8 md:mt-12 md:ml-8'>
          <p className="text-base font-bold text-black-500">C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
          <div className='ml-12 mt-2'>
            <ul className='list-disc text-left list-outside text-wrap'>
              <li>C.R.I.&lsquo;s energy-efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
              <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy-efficient smart pumps with IoT-enabled control panel. </li>
            </ul>
            <img className='mt-4 w-full md:w-[1200px] h-auto mx-auto' src={handshake} alt="handshake" />
          </div>
          <p className='font-normal text-black-500'>Government of India has awarded the <span className='font-bold'>&quot;<span className='font-bold'>National Energy Conservation Award 2018</span>&quot;</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </div>
      <div>
        <p className='mt-4 text-center md:mt-8 md:ml-4 md:mr-4 font-medium'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
        <img className='w-full md:w-[1000px] xl:w-[1200px] h-auto mx-auto' src={appliances} alt="appliances" />
        <p className='md:ml-auto md:mr-auto font-normal mt-4 mb-4 sm:text-center text-center mx-auto'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
        <div className="mx-4 border-t-2 border-red-500"></div>
        <p className='font-bold text-base mx-auto md:mx-auto mb-4 text-center'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
      </div>
      <div className='Footer'>
        <p className='text-center sm:text-center flex flex-wrap justify-center text-sm'>
            CHEMICALS & PROCESS<span className="border-r border-red-500 mx-2"></span>
            POWER<span className="border-r border-red-500 mx-2"></span>
            WATER & WASTE WATER<span className="border-r border-red-500 mx-2"></span>
            OILS & GAS<span className="border-r border-red-500 mx-2"></span>
            PHARMA<span className="border-r border-red-500 mx-2"></span>
            SUGARS & DISTILLERIES<span className="border-r border-red-500 mx-2"></span>
            PAPER & PULP<span className="border-r border-red-500 mx-2"></span>
            MARINE & DEFENCE<span className="border-r border-red-500 mx-2"></span>
            METAL & MINING<span className="border-r border-red-500 mx-2"></span>
            FOOD & BEVERAGE<span className="border-r border-red-500 mx-2"></span>
            PETROCHEMICAL & REFINERIES<span className="border-r border-red-500 mx-2"></span>
            SOLAR<span className="border-r border-red-500 mx-2"></span>
            BUILDING<span className="border-r border-red-500 mx-2"></span>
            HVAC<span className="border-r border-red-500 mx-2"></span>
            FIRE<span className="border-r border-red-500 mx-2"></span>
            FIGHTING<span className="border-r border-red-500 mx-2"></span>
            AGRICULTURE & RESIDENTIAL
        </p>
        <div className='bg-red-600 text-white p-12 md:mx-4  h-auto md:h-[120px] flex flex-col md:flex-row justify-between mt-2'>
          <div className='flex flex-row mb-2 md:mb-0'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" /></svg>
            <p className='font-bold text-sm pt-2 pl-1'>Toll-free 1800-200-1234</p>
          </div>
          <div className='flex flex-row mb-2 md:mb-0'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" /></svg>
            <p className='font-bold text-sm pt-2 pl-1'>facebook.com/cripumps</p>
          </div>
          <div className='flex flex-row'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" /></svg>
            <p className='font-bold text-sm pt-2 pl-1'>www.crigroups.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrontPage;
