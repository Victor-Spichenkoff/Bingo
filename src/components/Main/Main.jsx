import LuckyNumbers from "../game/LuckyNumbers";
import PlayerCard from "../game/PlayerCard";
import CuurentLuckyNumber from "../game/CurrentLuckyNumber";
import AllBot from "../game/AllBot";

export default props => 
    <main>
        <LuckyNumbers />
        <AllBot />  
        <CuurentLuckyNumber />
        <PlayerCard />
    </main>