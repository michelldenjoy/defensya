"use client";

import ClosingCTA from "./ClosingCTA";
import TankerJourney from "./Tankerjourney";
import IntroWelcome from "./IntroWelcome";
import FlightRoute from "./FlightRoute";




export default function Hometwo() {
  return (
    <main className="w-full bg-white dark:bg-defensya-navy text-gray-900 dark:text-white">






      <IntroWelcome />

      <TankerJourney />

      <FlightRoute />

      <ClosingCTA />


    </main>
  );
}
