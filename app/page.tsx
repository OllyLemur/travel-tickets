'use client'

import Search from "@/components/searchBar/Search";
import WelcomeMessage from "@/components/welcomeMessage/WelcomeMessage";

export default function Home() {
  return (
    <div>
      <WelcomeMessage />
        <Search/>
    </div>
  );
}
