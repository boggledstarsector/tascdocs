import Link from "next/link";

export default function FarmlandImprovement() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Farmland Improvement</h1>
                <div className="md:max-w-[750px]"><span className="italic">Improves a planet&apos;s farmland quality by one tier, increasing the amount of food the colony can produce. The improvement follows a progression from no farmland through poor, adequate, rich, and ultimately bountiful.</span></div>
                <div>Project type: <span style={{ color: 'rgb(5, 250, 250)' }}>Resource improvement</span></div>
                <div>Duration: <span style={{ color: 'rgb(255, 210, 0)' }}>200</span> days <span className="italic opacity-60">(default; configurable via LunaLib settings)</span></div>

                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type supports <Link href="https://starsector.wiki.gg/wiki/Farmland" style={{ color: 'rgb(5, 250, 250)' }}>farmland</Link> <span className="italic opacity-60">(desert, jungle, terran, or tundra)</span></li>
                        <li>Farmland can be improved further <span className="italic opacity-60">(current level is below bountiful)</span></li>
                        <li>Adequate water for the target tier:
                            <ul className="list-inside pl-4 mt-0 mb-1" style={{ listStyleType: 'circle' }}>
                                <li>To reach poor, adequate, or rich: water level must be <span style={{ color: 'rgb(255, 210, 0)' }}>medium</span> or higher</li>
                                <li>To reach bountiful: water level must be <span style={{ color: 'rgb(255, 210, 0)' }}>high</span></li>
                            </ul>
                        </li>
                        <li>Atmospheric density is normal <span className="italic opacity-60">(no thin, dense, or missing atmosphere)</span></li>
                        <li>Atmosphere is not <Link href="https://starsector.wiki.gg/wiki/Toxic_Atmosphere" style={{ color: 'rgb(5, 250, 250)' }}>toxic</Link> or <Link href="https://starsector.wiki.gg/wiki/Irradiated" style={{ color: 'rgb(5, 250, 250)' }}>irradiated</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Progression:</div>
                    <div className="pl-4">
                        <span className="italic opacity-60">(none)</span> → <span style={{ color: 'rgb(255, 210, 0)' }}>Poor</span> → <span style={{ color: 'rgb(255, 210, 0)' }}>Adequate</span> → <span style={{ color: 'rgb(255, 210, 0)' }}>Rich</span> → <span style={{ color: 'rgb(255, 210, 0)' }}>Bountiful</span>
                    </div>
                    <div className="md:max-w-[750px]">Each run of this project advances farmland by one tier. All planet types that support farmland can reach the maximum level of bountiful.</div>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>After a <Link href="/docs/terraforming" style={{ color: 'rgb(5, 250, 250)' }}>planet type change</Link>, farmland starts at <span style={{ color: 'rgb(255, 210, 0)' }}>adequate</span> for all farmland-supporting types. Two improvement projects are needed to reach bountiful.</li>
                        <li>Planets with <span style={{ color: 'rgb(255, 210, 0)' }}>low</span> base water (barren, toxic) will need an <Link href="/docs/ismaras-sling" style={{ color: 'rgb(5, 250, 250)' }}>Ismara&apos;s Sling</Link> or <Link href="/docs/asteroid-processing" style={{ color: 'rgb(5, 250, 250)' }}>Asteroid Processing</Link> facility in the same system to meet the water requirement.</li>
                        <li>Desert and tundra worlds naturally have <span style={{ color: 'rgb(255, 210, 0)' }}>medium</span> water, which is sufficient to reach rich farmland. Reaching bountiful still requires a water source to raise the level to high.</li>
                        <li>Frozen and water worlds cannot have farmland. On water worlds, consider <Link href="/docs/hydroponics" style={{ color: 'rgb(5, 250, 250)' }}>Hydroponics</Link> for food production.</li>
                        <li>Unlike planet type changes, farmland improvement does not require a <Link href="/docs/stellar-reflector-array" style={{ color: 'rgb(5, 250, 250)' }}>Stellar Reflector Array</Link>.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
