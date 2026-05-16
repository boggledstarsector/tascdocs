import Link from "next/link";

export default function RemoveAtmosphere() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Remove Atmosphere</h1>
                <div className="flex flex-row flex-wrap items-center gap-6">
                    <div className="flex flex-col items-center gap-1">
                        <img src="/images/conditions/atmosphere_none.png" alt="No atmosphere" className="h-10 w-10" />
                        <div className="text-sm">No Atmosphere <span className="italic opacity-60">(added)</span></div>
                    </div>
                </div>
                <div>Duration: <span style={{ color: 'rgb(255, 210, 0)' }}>200</span> days <span className="italic opacity-60">(configurable via <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings)</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(200, 10, 20)' }}>No</span> <span className="italic opacity-60">(can be enabled via <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings)</span></div>

                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type allows <Link href="/docs/terraforming" style={{ color: 'rgb(5, 250, 250)' }}>terraforming</Link></li>
                        <li>Planet is not a <Link href="https://starsector.wiki.gg/wiki/Market_condition#Farmland" style={{ color: 'rgb(5, 250, 250)' }}>water world</Link></li>
                        <li>Planet has an atmosphere</li>
                        <li><Link href="/docs/atmosphere-processor" style={{ color: 'rgb(5, 250, 250)' }}>Atmosphere Processor</Link> is operational on the colony</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Results:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>no atmosphere</Link></li>
                        <li>Removes thin atmosphere, dense atmosphere, toxic atmosphere, <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>habitable</Link>, <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>mild climate</Link>, <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>extreme weather</Link>, <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>inimical biosphere</Link>, all <Link href="https://starsector.wiki.gg/wiki/Market_condition#Farmland" style={{ color: 'rgb(5, 250, 250)' }}>farmland</Link> conditions, and <Link href="https://starsector.wiki.gg/wiki/Market_condition#Hazard" style={{ color: 'rgb(5, 250, 250)' }}>pollution</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>This project cannot be used on water worlds — the water surface condition prevents it.</li>
                        <li>This project is destructive and will remove habitability and all farmland. Use with caution.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
