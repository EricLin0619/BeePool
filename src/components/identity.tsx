import PersonalDIDCard from "./card/personalDIDCard"
import Github from "./card/githubCard"
import DiscordCard from "./card/discordCard"
export default function Identity() {
  return (
    <div>
      <p className="font-mono text-black font-bold text-3xl ml-5 mt-10">IDENTITY</p>
      <div className="divider ml-5 mr-auto w-1/2 my-[0px]"></div> 
      <div className="flex items-center mt-2">
        <div>
          <p className="font-mono text-black text-xl ml-5 mt-3 mb-7">LINKED WALLET</p>
          <PersonalDIDCard />
        </div>
        <div className="ml-7">
          <div className="flex items-center">
            <span className="font-mono text-black text-xl ml-2 mb-4">CREDENTIALS</span>
            <button className="btn btn-outline h-1/2 p-1 btn-warning ml-4 mb-4">Get Credential</button>
          </div>
          <div className="flex items-center">
            <Github />
            <DiscordCard/>
          </div>
        </div>
      </div>
    </div>
  )
}
