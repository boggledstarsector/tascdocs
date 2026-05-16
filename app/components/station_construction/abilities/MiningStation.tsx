import Link from "next/link";

export default function MiningStation() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Mining Station</h1>
                <div className="md:max-w-[750px]"><span className="italic">Purpose-built to support asteroid mining operations throughout the system, this station features the high-bandwidth FTL data transmission infrastructure necessary to control vast fleets of mining drones. It also features morally flexible officials to ensure boredom does not become an impediment to productivity.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(5, 115, 10)' }}>Yes</span></div>
                <div className="flex items-center gap-2">Ability icon: <img src="/images/abilities/construct_mining_station.png" alt="Astroplis Station Ability" className="h-10 w-10" /></div>
                <div className="flex flex-wrap items-center gap-2">Construction cost: <span style={{ color: 'rgb(255, 210, 0)' }}>500,000¢</span>,
                    <Link href="https://starsector.wiki.gg/wiki/Crew"><img src="/images/commodities/crew.png" alt="Crew" className="h-10 w-10" /></Link> <span style={{ color: 'rgb(255, 210, 0)' }}>1000</span>,
                    <Link href="https://starsector.wiki.gg/wiki/Heavy_Machinery"><img src="/images/commodities/heavymachinery.png" alt="Heavy machinery" className="h-10 w-10" /></Link> <span style={{ color: 'rgb(255, 210, 0)' }}>250</span>,
                    <Link href="https://starsector.wiki.gg/wiki/Metals"><img src="/images/commodities/metals.png" alt="Metals" className="h-10 w-10" /></Link> <span style={{ color: 'rgb(255, 210, 0)' }}>1000</span>,
                    <Link href="https://starsector.wiki.gg/wiki/Transplutonics"><img src="/images/commodities/raremetals.png" alt="Rare metals" className="h-10 w-10" /></Link> <span style={{ color: 'rgb(255, 210, 0)' }}>250</span>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>
                            Constructs a mining station in an asteroid field or asteroid belt.
                            <ul className="list-inside pl-4 mt-0 mb-1" style={{ listStyleType: 'circle' }}>
                                <li>Has moderate ore and rare ore deposits and 100% <Link href="https://starsector.wiki.gg/wiki/Colony#Hazard_rating" style={{ color: 'rgb(5, 250, 250)' }}>hazard</Link>. <span className="italic opacity-60"> (ore deposits can be adjusted via <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings)</span></li>
                                <li>A single mining station can be constructed in each system. Only mining stations created via TASC count towards this limit (e.g. Derinkuyu Mining Station does not count). <span className="italic opacity-60"> (this limit can be increased via <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings)</span></li>
                                <li>The station sprite changes as the colony grows larger.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
