import Link from "next/link";

export default function GalatianParticleAccelerator() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Galatian Particle Accelerator</h1>
                <div className="flex justify-start">
                    <img
                        src="/images/buildings/terraforming/gpa.png"
                        alt="Galatian Particle Accelerator"
                        className="h-auto border"
                        style={{ borderColor: 'rgb(5, 250, 250)' }}
                    />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">This particle accelerator is used by the Galatian Academy to conduct physics research. Tri-Tachyon operated a more advanced accelerator on Crom Cruach until it was destroyed during the post-Collapse civil war.</span></div>
                <div style={{ color: 'rgb(200, 10, 20)' }}>Cannot be constructed by the player. This structure only exists as a pre-built fixture on Ancyra (the Galatian Academy&apos;s home).</div>
                <div>Enabled by default: N/A</div>
                <div>Build cost: <span style={{ color: 'rgb(255, 210, 0)' }}>900,000¢</span> <span className="italic opacity-60">(never paid — cannot be built)</span></div>
                <div>Build time: <span style={{ color: 'rgb(255, 210, 0)' }}>360</span> days</div>
                <div>Monthly upkeep: <span style={{ color: 'rgb(255, 210, 0)' }}>6,000¢</span> * (colony size - 2)</div>
                <div>Supply: <span className="italic opacity-60">(none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Demand:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/Commodity">
                                <img src="/images/commodities/domain_artifacts.png" alt="Domain-era artifacts" className="h-10 w-10" />
                            </Link>
                            <span>3 <span className="italic opacity-60">(only demanded when Domain-tech content and Domain Archaeology are enabled)</span></span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Effects: <span className="italic opacity-60">(none)</span></div>
                </div>
                <div className="flex flex-col gap-1">
                    <div>AI core effects:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <img src="/images/commodities/ai_core_alpha.png" alt="AI Core Alpha" className="h-10 w-10" />
                            <span className="italic opacity-60">(cannot install)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/images/commodities/ai_core_beta.png" alt="AI Core Beta" className="h-10 w-10" />
                            <span className="italic opacity-60">(cannot install)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/images/commodities/ai_core_gamma.png" alt="AI Core Gamma" className="h-10 w-10" />
                            <span className="italic opacity-60">(cannot install)</span>
                        </div>
                    </div>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Industry#Upgrading" style={{ color: 'rgb(5, 250, 250)' }}>Improvement bonus</Link>: <span className="italic opacity-60">(cannot be improved)</span></div>
                <div><Link href="https://starsector.wiki.gg/wiki/Colony#Luddic_Path_cells" style={{ color: 'rgb(5, 250, 250)' }}>Pather interest</Link>: <span style={{ color: 'rgb(255, 210, 0)' }}>2</span> <span className="italic opacity-60">(only on player-owned colonies)</span></div>
            </section>
        </div>
    );
}
