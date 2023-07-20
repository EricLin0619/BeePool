import ProposalCard from "./card/proposalCard"
import SelectBar from "./selectBar"

export default function Proposals() {
  return (
    <div className="mt-10">
      <p className="font-mono text-black font-bold text-3xl ml-5 mt-3">VOTING</p>
      <div className="divider ml-5 mr-auto w-1/2 mt-0 mb-4"></div> 
      <SelectBar/>
      <div className="mb-10 grid grid-cols-4 justify-items-center">
        <ProposalCard/>
        <ProposalCard/>
        <ProposalCard/>
        <ProposalCard/>
      </div>
    </div>
  )
}
