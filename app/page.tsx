import HeroHome from '@/components/home/HeroHome'
import IntroWelcome from '@/components/home/IntroWelcome'
import DivisionsPanels from '@/components/home/DivisionPanels'
import TankerJourney from '@/components/home/Tankerjourney'
import FlightRoute from '@/components/home/FlightRoute'
import ClosingCTA from '@/components/home/ClosingCTA'









export default function page() {
  return (
    <div>      
      <HeroHome />
      <IntroWelcome />
      <DivisionsPanels />
      <TankerJourney /> 
      <FlightRoute /> 
      <ClosingCTA />

     
   
  
    </div>
  )
}
