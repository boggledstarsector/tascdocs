import Link from "next/link";

export default function AtmosphereManipulation() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Atmosphere Manipulation</h1>
                <div className="md:max-w-[750px]"><span className="italic">These condition modification projects alter a planet&apos;s atmospheric conditions. All atmosphere manipulation projects require an operational Atmosphere Processor on the colony and that the world type allows terraforming.</span></div>
                <div>Project type: <span style={{ color: 'rgb(5, 250, 250)' }}>Condition modification</span></div>
                <div>Duration: <span style={{ color: 'rgb(255, 210, 0)' }}>200</span> days <span className="italic opacity-60">(default; configurable via LunaLib settings)</span></div>

                <h2 className="text-2xl font-bold mt-4">Add Atmosphere</h2>
                <div className="md:max-w-[750px]">Adds a thin atmosphere to an airless world. This is typically the first step in a multi-project terraforming chain to make a barren world habitable.</div>
                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type allows <Link href="/docs/terraforming" style={{ color: 'rgb(5, 250, 250)' }}>terraforming</Link></li>
                        <li>Planet has the <Link href="https://starsector.wiki.gg/wiki/No_Atmosphere" style={{ color: 'rgb(5, 250, 250)' }}>no atmosphere</Link> condition</li>
                        <li><Link href="/docs/atmosphere-processor" style={{ color: 'rgb(5, 250, 250)' }}>Atmosphere Processor</Link> is operational on the colony</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Results:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Removes <Link href="https://starsector.wiki.gg/wiki/No_Atmosphere" style={{ color: 'rgb(5, 250, 250)' }}>no atmosphere</Link></li>
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Thin_Atmosphere" style={{ color: 'rgb(5, 250, 250)' }}>thin atmosphere</Link></li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold mt-4">Increase Atmospheric Density</h2>
                <div className="md:max-w-[750px]">Removes the thin atmosphere condition, bringing the atmospheric density to normal. Normal atmospheric density is required by most planet type change projects.</div>
                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type allows <Link href="/docs/terraforming" style={{ color: 'rgb(5, 250, 250)' }}>terraforming</Link></li>
                        <li>Planet has the <Link href="https://starsector.wiki.gg/wiki/Thin_Atmosphere" style={{ color: 'rgb(5, 250, 250)' }}>thin atmosphere</Link> condition</li>
                        <li><Link href="/docs/atmosphere-processor" style={{ color: 'rgb(5, 250, 250)' }}>Atmosphere Processor</Link> is operational on the colony</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Results:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Removes <Link href="https://starsector.wiki.gg/wiki/Thin_Atmosphere" style={{ color: 'rgb(5, 250, 250)' }}>thin atmosphere</Link></li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold mt-4">Reduce Atmospheric Density</h2>
                <div className="md:max-w-[750px]">Removes the dense atmosphere condition, bringing the atmospheric density to normal.</div>
                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type allows <Link href="/docs/terraforming" style={{ color: 'rgb(5, 250, 250)' }}>terraforming</Link></li>
                        <li>Planet has the <Link href="https://starsector.wiki.gg/wiki/Dense_Atmosphere" style={{ color: 'rgb(5, 250, 250)' }}>dense atmosphere</Link> condition</li>
                        <li><Link href="/docs/atmosphere-processor" style={{ color: 'rgb(5, 250, 250)' }}>Atmosphere Processor</Link> is operational on the colony</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Results:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Removes <Link href="https://starsector.wiki.gg/wiki/Dense_Atmosphere" style={{ color: 'rgb(5, 250, 250)' }}>dense atmosphere</Link></li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold mt-4">Reduce Atmospheric Toxicity</h2>
                <div className="md:max-w-[750px]">Removes the toxic atmosphere condition. Toxic atmosphere prevents most planet type changes and blocks the habitability and farmland improvement projects.</div>
                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type allows <Link href="/docs/terraforming" style={{ color: 'rgb(5, 250, 250)' }}>terraforming</Link></li>
                        <li>Planet has the <Link href="https://starsector.wiki.gg/wiki/Toxic_Atmosphere" style={{ color: 'rgb(5, 250, 250)' }}>toxic atmosphere</Link> condition</li>
                        <li><Link href="/docs/atmosphere-processor" style={{ color: 'rgb(5, 250, 250)' }}>Atmosphere Processor</Link> is operational on the colony</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Results:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Removes <Link href="https://starsector.wiki.gg/wiki/Toxic_Atmosphere" style={{ color: 'rgb(5, 250, 250)' }}>toxic atmosphere</Link></li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold mt-4">Remove Atmosphere</h2>
                <div className="md:max-w-[750px]">Strips the planet of its atmosphere entirely. This is a destructive project that removes habitability, farmland, and many other conditions. <span style={{ color: 'rgb(200, 10, 20)' }}>Disabled by default.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(200, 10, 20)' }}>No</span> <span className="italic opacity-60">(enable via LunaLib settings)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type allows <Link href="/docs/terraforming" style={{ color: 'rgb(5, 250, 250)' }}>terraforming</Link></li>
                        <li>Planet is not a <Link href="https://starsector.wiki.gg/wiki/Water_Surface" style={{ color: 'rgb(5, 250, 250)' }}>water world</Link></li>
                        <li>Planet has an atmosphere <span className="italic opacity-60">(does not have the no atmosphere condition)</span></li>
                        <li><Link href="/docs/atmosphere-processor" style={{ color: 'rgb(5, 250, 250)' }}>Atmosphere Processor</Link> is operational on the colony</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Results:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/No_Atmosphere" style={{ color: 'rgb(5, 250, 250)' }}>no atmosphere</Link></li>
                        <li>Removes thin atmosphere, dense atmosphere, toxic atmosphere, <Link href="https://starsector.wiki.gg/wiki/Habitable" style={{ color: 'rgb(5, 250, 250)' }}>habitable</Link>, <Link href="https://starsector.wiki.gg/wiki/Mild_Climate" style={{ color: 'rgb(5, 250, 250)' }}>mild climate</Link>, <Link href="https://starsector.wiki.gg/wiki/Extreme_Weather" style={{ color: 'rgb(5, 250, 250)' }}>extreme weather</Link>, <Link href="https://starsector.wiki.gg/wiki/Inimical_Biosphere" style={{ color: 'rgb(5, 250, 250)' }}>inimical biosphere</Link>, all <Link href="https://starsector.wiki.gg/wiki/Farmland" style={{ color: 'rgb(5, 250, 250)' }}>farmland</Link> conditions, and <Link href="https://starsector.wiki.gg/wiki/Pollution" style={{ color: 'rgb(5, 250, 250)' }}>pollution</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>All atmosphere manipulation projects require an <Link href="/docs/atmosphere-processor" style={{ color: 'rgb(5, 250, 250)' }}>Atmosphere Processor</Link> to be operational. If the Atmosphere Processor is disrupted during a project, the project stalls until it is restored.</li>
                        <li>A common terraforming workflow for a barren world with no atmosphere: <span style={{ color: 'rgb(5, 250, 250)' }}>Add Atmosphere</span> (creates thin atmosphere) → <span style={{ color: 'rgb(5, 250, 250)' }}>Increase Atmospheric Density</span> (normalizes density) → <Link href="/docs/terraforming/terran-type-change" style={{ color: 'rgb(5, 250, 250)' }}>planet type change</Link>.</li>
                        <li>The Remove Atmosphere project cannot be used on water worlds — the water surface condition prevents it.</li>
                        <li>The Remove Atmosphere project is destructive and will remove habitability and all farmland. Use with caution.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
