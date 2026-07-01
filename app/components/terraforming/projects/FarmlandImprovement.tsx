import Link from "next/link";

export default function FarmlandImprovement() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Farmland Improvement</h1>
                <div className="flex flex-row flex-wrap items-center gap-6">
                    <div className="flex flex-col items-center gap-1">
                        <img src="/images/resources/farmland_poor.png" alt="Poor farmland" className="h-10 w-10 shrink-0" />
                        <div className="text-sm">Poor</div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <img src="/images/resources/farmland_adequate.png" alt="Adequate farmland" className="h-10 w-10 shrink-0" />
                        <div className="text-sm">Adequate</div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <img src="/images/resources/farmland_rich.png" alt="Rich farmland" className="h-10 w-10 shrink-0" />
                        <div className="text-sm">Rich</div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <img src="/images/resources/farmland_bountiful.png" alt="Bountiful farmland" className="h-10 w-10 shrink-0" />
                        <div className="text-sm">Bountiful</div>
                    </div>
                </div>
                <div>Duration: <span style={{ color: 'rgb(255, 210, 0)' }}>200</span> days <span className="italic opacity-60">(configurable via <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings)</span></div>

                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type supports <Link href="https://starsector.wiki.gg/wiki/Market_condition#Farmland" style={{ color: 'rgb(5, 250, 250)' }}>farmland</Link></li>
                        <li>Farmland can be improved further</li>
                        <li>Adequate water for the target tier:
                            <ul className="list-inside pl-4 mt-0 mb-1" style={{ listStyleType: 'circle' }}>
                                <li>To reach poor, adequate, or rich: water level must be <span style={{ color: 'rgb(255, 210, 0)' }}>medium</span> or higher</li>
                                <li>To reach bountiful: water level must be <span style={{ color: 'rgb(255, 210, 0)' }}>high</span></li>
                            </ul>
                            <span className="italic opacity-60">(not required if <Link href="/docs/ismaras-sling" style={{ color: 'inherit' }}>Ismara&apos;s Sling</Link> and <Link href="/docs/asteroid-processing" style={{ color: 'inherit' }}>Asteroid Processing</Link> are disabled via <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings)</span>
                        </li>
                        <li>Atmospheric density is normal</li>
                        <li>Atmosphere is not <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>toxic</Link> or <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>irradiated</Link></li>
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
                        <li>Planets with <span style={{ color: 'rgb(255, 210, 0)' }}>low</span> or <span style={{ color: 'rgb(255, 210, 0)' }}>medium</span> base water will need an <Link href="/docs/ismaras-sling" style={{ color: 'rgb(5, 250, 250)' }}>Ismara&apos;s Sling</Link> or <Link href="/docs/asteroid-processing" style={{ color: 'rgb(5, 250, 250)' }}>Asteroid Processing</Link> facility in the same system to meet the water requirement.</li>
                        <li>Frozen and water worlds cannot have farmland. On water worlds, consider <Link href="/docs/hydroponics" style={{ color: 'rgb(5, 250, 250)' }}>Hydroponics</Link> for food production.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
