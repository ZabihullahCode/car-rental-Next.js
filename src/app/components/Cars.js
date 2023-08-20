
// components
import Brands from "./Brands";
import CarsSlider from "./CarsSlider";

export default function Cars() {
  return (
    <section className='h-screen flex items-center' id='cars'>
     <div className='container mx-auto'>
     <Brands />
     <CarsSlider />
     </div>
    </section>
  )
}
