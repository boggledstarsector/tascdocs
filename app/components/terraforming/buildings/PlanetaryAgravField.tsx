import Link from "next/link";

export default function PlanetaryAgravField() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Planetary Agrav Field</h1>
                <div className="flex justify-start">
                    <img
                        src="/images/buildings/terraforming/planetary_agrav_field.png"
                        alt="Planetary Agrav Field"
                        className="h-auto border"
                        style={{ borderColor: 'rgb(5, 250, 250)' }}
                    />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">The agrav field generators used on starships work on the surface of planets - the problem is building a large enough network of generators to envelop the entire colony. This is only economically feasible when the bulk of the populace is housed within the confines of a few domed cities.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(200, 10, 20)' }}>No</span><span className="italic opacity-60"> (use <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings to enable)</span></div>
                <div>Build cost: <span style={{ color: 'rgb(255, 210, 0)' }}>300,000¢</span></div>
                <div>Build time: <span style={{ color: 'rgb(255, 210, 0)' }}>60</span> days</div>
                <div>Monthly upkeep: <span style={{ color: 'rgb(255, 210, 0)' }}>2,000¢</span> * (colony size - 2)</div>
                <div>Supply: <span className="italic opacity-60">(none)</span></div>
                <div>Demand: <span className="italic opacity-60">(none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Effects:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>high gravity</Link>.</li>
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>low gravity</Link>.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div><Link href="https://starsector.wiki.gg/wiki/AI_core" style={{ color: 'rgb(5, 250, 250)' }}>AI core</Link> effects:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Alpha_core" className="shrink-0"><img src="/images/commodities/ai_core_alpha.png" alt="AI Core Alpha" className="h-10 w-10 shrink-0" /></Link>
                            <span className="italic opacity-60">(cannot install)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Beta_core" className="shrink-0"><img src="/images/commodities/ai_core_beta.png" alt="AI Core Beta" className="h-10 w-10 shrink-0" /></Link>
                            <span className="italic opacity-60">(cannot install)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="https://starsector.wiki.gg/wiki/AI_core#Gamma_core" className="shrink-0"><img src="/images/commodities/ai_core_gamma.png" alt="AI Core Gamma" className="h-10 w-10 shrink-0" /></Link>
                            <span className="italic opacity-60">(cannot install)</span>
                        </div>
                    </div>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Industry#Upgrading" style={{ color: 'rgb(5, 250, 250)' }}>Improvement bonus</Link>: <span className="italic opacity-60"> (none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Can only be constructed on colonies with <Link href="/docs/domed-cities" style={{ color: 'rgb(5, 250, 250)' }}>Domed Cities</Link>.</li>
                    </ul>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Colony#Luddic_Path_cells" style={{ color: 'rgb(5, 250, 250)' }}>Pather interest</Link>: <span style={{ color: 'rgb(255, 210, 0)' }}>2</span></div>
            </section>
        </div>
    );
}
