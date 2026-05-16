import Link from "next/link";

export default function ColonizeAbandonedStation() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Colonize Abandoned Station</h1>
                <div className="md:max-w-[750px]"><span className="italic">Colonize an abandoned station.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(5, 115, 10)' }}>Yes</span></div>
                <div className="flex items-center gap-2">Ability icon: <img src="/images/abilities/colonize_abandoned_station.png" alt="Colonize Abandoned Station Ability" className="h-10 w-10" /></div>
                <div className="flex flex-wrap items-center gap-2">Recolonization cost: <span style={{ color: 'rgb(255, 210, 0)' }}>250,000¢</span>,
                    <Link href="https://starsector.wiki.gg/wiki/Crew"><img src="/images/commodities/crew.png" alt="Crew" className="h-10 w-10" /></Link> <span style={{ color: 'rgb(255, 210, 0)' }}>500</span>,
                    <Link href="https://starsector.wiki.gg/wiki/Heavy_Machinery"><img src="/images/commodities/heavymachinery.png" alt="Heavy machinery" className="h-10 w-10" /></Link> <span style={{ color: 'rgb(255, 210, 0)' }}>125</span>,
                    <Link href="https://starsector.wiki.gg/wiki/Metals"><img src="/images/commodities/metals.png" alt="Metals" className="h-10 w-10" /></Link> <span style={{ color: 'rgb(255, 210, 0)' }}>500</span>,
                    <Link href="https://starsector.wiki.gg/wiki/Transplutonics"><img src="/images/commodities/raremetals.png" alt="Transplutonics" className="h-10 w-10" /></Link> <span style={{ color: 'rgb(255, 210, 0)' }}>125</span>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>
                            Recolonizes an abandoned station.
                            <ul className="list-inside pl-4 mt-0 mb-1" style={{ listStyleType: 'circle' }}>
                                <li>Can target <Link href="/docs/mining-station" style={{ color: 'rgb(5, 250, 250)' }}>mining</Link>, <Link href="/docs/siphon-station" style={{ color: 'rgb(5, 250, 250)' }}>siphon</Link> and <Link href="/docs/astropolis-station" style={{ color: 'rgb(5, 250, 250)' }}>astropolis</Link> stations created via TASC, as well as certain derelict stations in the core worlds.</li>
                                <li>The station must be neutral (not already colonized by a faction).</li>
                                <li>Any cargo and ships in the station&apos;s storage are transferred to the player&apos;s fleet.</li>
                                <li>Resource deposits are set based on the type of station being recolonized (e.g. a mining station will have ore deposits).</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
