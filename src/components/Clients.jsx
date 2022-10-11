import { clients } from '../constants'
import styles from '../style'


const Clients = () => {
  return (
 <section className={`${styles.flexCenter} my-4`}>
     <div className={`${styles.flexCenter} flex-wrap w-full`}>
         {clients.map((charity)  => (
          <div key={charity.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img src={charity.logo} alt='clients' className='cursor-pointer animate-bounce  fill-cyan-500 hover:fill-cyan-700
             sm:w-[192px] w-[100px] object-contain' fill="none"/>
          </div>
         ))}
     </div>
 </section>
  )
}

export default Clients