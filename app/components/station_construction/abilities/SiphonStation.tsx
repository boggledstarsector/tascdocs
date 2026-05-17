import Link from "next/link";

export default function SiphonStation() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Siphon Station</h1>
                <div className="md:max-w-[750px]"><span className="italic">An orbital station that can pull volatiles into space by manipulating the magnetosphere of a nearby gas giant. The amount of volatiles the station can harvest is proportional to how abundant they are on the gas giant itself.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(5, 115, 10)' }}>Yes</span></div>
                <div className="flex items-center gap-2">Ability icon: <img src="/images/abilities/construct_siphon_station.png" alt="Siphon Station Ability" className="h-10 w-10 shrink-0" /></div>
                <div className="flex flex-wrap items-center gap-2">Construction cost: <span style={{ color: 'rgb(255, 210, 0)' }}>500,000Â¢</span>,
                    <Link href="https://starsector.wiki.gg/wiki/Crew" className="shrink-0"><img src="/images/commodities/crew.png" alt="Crew" className="h-10 w-10 shrink-0" /></Link> <span style={{ color: 'rgb(255, 210, 0)' }}>1000</span>,
                    <Link href="https://starsector.wiki.gg/wiki/Heavy_Machinery" className="shrink-0"><img src="/images/commodities/heavymachinery.png" alt="Heavy machinery" className="h-10 w-10 shrink-0" /></Link> <span style={{ color: 'rgb(255, 210, 0)' }}>250</span>,
                    <Link href="https://starsector.wiki.gg/wiki/Metals" className="shrink-0"><img src="/images/commodities/metals.png" alt="Metals" className="h-10 w-10 shrink-0" /></Link> <span style={{ color: 'rgb(255, 210, 0)' }}>1000</span>,
                    <Link href="https://starsector.wiki.gg/wiki/Transplutonics" className="shrink-0"><img src="/images/commodities/raremetals.png" alt="Transplutonics" className="h-10 w-10 shrink-0" /></Link> <span style={{ color: 'rgb(255, 210, 0)' }}>250</span>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>
                            Constructs a siphon station in low orbit around a gas giant.
                            <ul className="list-inside pl-4 mt-0 mb-1" style={{ listStyleType: 'circle' }}>
                                <li>Has volatiles deposits equal to the gas giant&apos;s own volatiles level. <span className="italic opacity-60"> (this link can be disabled via <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings, replacing it with a static deposit amount)</span></li>
                                <li>Only one siphon station can orbit each gas giant. The station can only be placed around neutral or player-owned gas giants.</li>
                                <li>Cannot be placed if a moon orbits too close to the gas giant, or if the gas giant has four or more moons.</li>
                                <li>The station sprite changes as the colony grows larger.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
