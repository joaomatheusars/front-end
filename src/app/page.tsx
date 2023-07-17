import Image from 'next/image'
import Thumbnail from './components/Thumbnail'
import InforProduct from './components/InfoProduct'
import HighMotor from './components/HighMotor'
import MultipleAccessories from './components/MultipleAccessories'
import Gallery from './components/Gallery'
import Colors from './components/Colors'
import Testimonials from './components/Testimonials'

export default function Home() {
  return (
    <div>
      <Thumbnail />
      <InforProduct />
      <HighMotor />
      <MultipleAccessories />
      <Gallery />
      <Colors />
      <Testimonials />
    </div>
  )
}
