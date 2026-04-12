import Link from "next/link";

export default function HarmonicDamper() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Harmonic Damper</h1>
                <div className="flex justify-start">
                    <img
                        src="/images/buildings/terraforming/harmonic_damper.png"
                        alt="Harmonic Damper"
                        className="h-auto border"
                        style={{ borderColor: 'rgb(5, 250, 250)' }}
                    />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">Essentially a gigantic phase coil mounted on a planet instead of a warship. Selective phasing of small portions of the planetary surface suppresses vibrations from tectonic activity. The military applications of this device are readily apparent, but the superhuman reflexes of an AI core will be required to use it to the fullest extent.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(200, 10, 20)' }}>No</span> <span className="italic opacity-60">(use LunaLib settings to enable)</span></div>
                <div>Build cost: <span style={{ color: 'rgb(255, 210, 0)' }}>300,000¢</span></div>
                <div>Build time: <span style={{ color: 'rgb(255, 210, 0)' }}>60</span> days</div>
                <div>Monthly upkeep: <span style={{ color: 'rgb(255, 210, 0)' }}>2,000¢</span> * (colony size - 2)</div>
                <div>Supply: <span className="italic opacity-60">(none)</span></div>
                <div>Demand: <span className="italic opacity-60">(none)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Effects:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>tectonic activity</Link>.</li>
                        <li>Suppresses <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>extreme tectonic activity</Link>.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div>AI core effects:</div>
                    <div className="flex flex-col gap-2 pl-4">
                        <div className="flex items-center gap-2">
                            <img src="/images/commodities/ai_core_alpha.png" alt="AI Core Alpha" className="h-10 w-10" />
                            <span>Increases <Link href="https://starsector.wiki.gg/wiki/Colony#Ground_defenses" style={{ color: 'rgb(5, 250, 250)' }}>ground defenses</Link> by <span style={{ color: 'rgb(255, 210, 0)' }}>x2.0</span>.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/images/commodities/ai_core_beta.png" alt="AI Core Beta" className="h-10 w-10" />
                            <span>Increases <Link href="https://starsector.wiki.gg/wiki/Colony#Ground_defenses" style={{ color: 'rgb(5, 250, 250)' }}>ground defenses</Link> by <span style={{ color: 'rgb(255, 210, 0)' }}>x1.5</span>.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/images/commodities/ai_core_gamma.png" alt="AI Core Gamma" className="h-10 w-10" />
                            <span>Increases <Link href="https://starsector.wiki.gg/wiki/Colony#Ground_defenses" style={{ color: 'rgb(5, 250, 250)' }}>ground defenses</Link> by <span style={{ color: 'rgb(255, 210, 0)' }}>x1.25</span>.</span>
                        </div>
                    </div>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Industry#Upgrading" style={{ color: 'rgb(5, 250, 250)' }}>Improvement bonus</Link>: Increases <Link href="https://starsector.wiki.gg/wiki/Colony#Ground_defenses" style={{ color: 'rgb(5, 250, 250)' }}>ground defenses</Link> by <span style={{ color: 'rgb(255, 210, 0)' }}>x1.25</span>.</div>
                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Cannot be constructed on stations.</li>
                        <li>AI cores installed in this building do not reduce upkeep or demand, unlike most other industries and structures. Their only effect is the <Link href="https://starsector.wiki.gg/wiki/Colony#Ground_defenses" style={{ color: 'rgb(5, 250, 250)' }}>ground defense</Link> multiplier listed above.</li>
                        <li>An operational Harmonic Damper on a colony allows <Link href="/docs/domed-cities" style={{ color: 'rgb(5, 250, 250)' }}>Domed Cities</Link> to be constructed even in the presence of <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>Extreme Tectonic Activity</Link>.</li>
                    </ul>
                </div>
                <div><Link href="https://starsector.wiki.gg/wiki/Colony#Luddic_Path_cells" style={{ color: 'rgb(5, 250, 250)' }}>Pather interest</Link>: <span style={{ color: 'rgb(255, 210, 0)' }}>2</span></div>
            </section>
        </div>
    );
}
