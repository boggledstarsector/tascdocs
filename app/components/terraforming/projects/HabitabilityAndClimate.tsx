import Link from "next/link";

export default function HabitabilityAndClimate() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Habitability &amp; Climate</h1>
                <div className="md:max-w-[750px]"><span className="italic">These condition modification projects improve a planet&apos;s habitability and climate conditions. They can make a world habitable for humans, improve its climate to mild, remove extreme weather, or clear radiation — all essential steps in creating ideal colony worlds.</span></div>
                <div>Project type: <span style={{ color: 'rgb(5, 250, 250)' }}>Condition modification</span></div>
                <div>Duration: <span style={{ color: 'rgb(255, 210, 0)' }}>200</span> days <span className="italic opacity-60">(default; configurable via LunaLib settings)</span></div>

                <h2 className="text-2xl font-bold mt-4">Make Atmosphere Habitable</h2>
                <div className="md:max-w-[750px]">Adds the habitable condition, allowing the world to support human life without domed habitats. This is a prerequisite for the mild climate project and an important step toward reducing a colony&apos;s hazard rating.</div>
                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type allows human habitability <span className="italic opacity-60">(desert, jungle, terran, tundra, or water)</span></li>
                        <li>Planet is not already <Link href="https://starsector.wiki.gg/wiki/Habitable" style={{ color: 'rgb(5, 250, 250)' }}>habitable</Link></li>
                        <li>Planet does not have <Link href="https://starsector.wiki.gg/wiki/Extreme_Weather" style={{ color: 'rgb(5, 250, 250)' }}>extreme weather</Link></li>
                        <li>Atmospheric density is normal <span className="italic opacity-60">(no thin, dense, or missing atmosphere)</span></li>
                        <li>Atmosphere is not <Link href="https://starsector.wiki.gg/wiki/Toxic_Atmosphere" style={{ color: 'rgb(5, 250, 250)' }}>toxic</Link> or <Link href="https://starsector.wiki.gg/wiki/Irradiated" style={{ color: 'rgb(5, 250, 250)' }}>irradiated</Link></li>
                        <li><Link href="/docs/atmosphere-processor" style={{ color: 'rgb(5, 250, 250)' }}>Atmosphere Processor</Link> is operational on the colony</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Results:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Habitable" style={{ color: 'rgb(5, 250, 250)' }}>habitable</Link> condition</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold mt-4">Make Climate Mild</h2>
                <div className="md:max-w-[750px]">Adds the mild climate condition, further reducing the colony&apos;s hazard rating. Mild climate is the best possible climate state and provides a <Link href="https://starsector.wiki.gg/wiki/Colony#Hazard_rating" style={{ color: 'rgb(5, 250, 250)' }}>hazard rating</Link> reduction.</div>
                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type allows human habitability <span className="italic opacity-60">(desert, jungle, terran, tundra, or water)</span></li>
                        <li>Planet is <Link href="https://starsector.wiki.gg/wiki/Habitable" style={{ color: 'rgb(5, 250, 250)' }}>habitable</Link></li>
                        <li>Planet does not have <Link href="https://starsector.wiki.gg/wiki/Extreme_Weather" style={{ color: 'rgb(5, 250, 250)' }}>extreme weather</Link></li>
                        <li>Planet does not already have <Link href="https://starsector.wiki.gg/wiki/Mild_Climate" style={{ color: 'rgb(5, 250, 250)' }}>mild climate</Link></li>
                        <li>Atmospheric density is normal <span className="italic opacity-60">(no thin, dense, or missing atmosphere)</span></li>
                        <li>Atmosphere is not <Link href="https://starsector.wiki.gg/wiki/Toxic_Atmosphere" style={{ color: 'rgb(5, 250, 250)' }}>toxic</Link> or <Link href="https://starsector.wiki.gg/wiki/Irradiated" style={{ color: 'rgb(5, 250, 250)' }}>irradiated</Link></li>
                        <li><Link href="/docs/atmosphere-processor" style={{ color: 'rgb(5, 250, 250)' }}>Atmosphere Processor</Link> is operational on the colony</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Results:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Adds <Link href="https://starsector.wiki.gg/wiki/Mild_Climate" style={{ color: 'rgb(5, 250, 250)' }}>mild climate</Link> condition</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold mt-4">Stabilize Weather Patterns</h2>
                <div className="md:max-w-[750px]">Removes the extreme weather condition. Extreme weather blocks both the habitability and mild climate projects, so removing it is often a necessary first step.</div>
                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type allows <Link href="/docs/terraforming" style={{ color: 'rgb(5, 250, 250)' }}>terraforming</Link></li>
                        <li>Planet has <Link href="https://starsector.wiki.gg/wiki/Extreme_Weather" style={{ color: 'rgb(5, 250, 250)' }}>extreme weather</Link></li>
                        <li><Link href="/docs/atmosphere-processor" style={{ color: 'rgb(5, 250, 250)' }}>Atmosphere Processor</Link> is operational on the colony</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Results:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Removes <Link href="https://starsector.wiki.gg/wiki/Extreme_Weather" style={{ color: 'rgb(5, 250, 250)' }}>extreme weather</Link></li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold mt-4">Remove Radiation</h2>
                <div className="md:max-w-[750px]">Removes the irradiated condition. Irradiated atmosphere blocks many terraforming projects and adds significant hazard. <span style={{ color: 'rgb(200, 10, 20)' }}>Disabled by default.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(200, 10, 20)' }}>No</span> <span className="italic opacity-60">(enable via LunaLib settings)</span></div>
                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type allows <Link href="/docs/terraforming" style={{ color: 'rgb(5, 250, 250)' }}>terraforming</Link></li>
                        <li>Planet is <Link href="https://starsector.wiki.gg/wiki/Irradiated" style={{ color: 'rgb(5, 250, 250)' }}>irradiated</Link></li>
                        <li><Link href="/docs/atmosphere-processor" style={{ color: 'rgb(5, 250, 250)' }}>Atmosphere Processor</Link> is operational on the colony</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Results:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Removes <Link href="https://starsector.wiki.gg/wiki/Irradiated" style={{ color: 'rgb(5, 250, 250)' }}>irradiated</Link> condition</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>The recommended order for maximizing habitability is: remove extreme weather (if present) → make atmosphere habitable → make climate mild. Extreme weather blocks both habitability projects.</li>
                        <li>Barren and frozen worlds cannot use the habitability or mild climate projects because those world types do not allow human habitability. To make them habitable, first perform a <Link href="/docs/terraforming" style={{ color: 'rgb(5, 250, 250)' }}>planet type change</Link> to a habitable type.</li>
                        <li>Planet type changes automatically add the habitable condition (except for frozen), so you typically only need these projects when working with a planet that is already the desired type but lacks habitability or mild climate.</li>
                        <li>The <Link href="/docs/stellar-reflector-array" style={{ color: 'rgb(5, 250, 250)' }}>Stellar Reflector Array</Link> can suppress extreme weather while operational, but the terraforming project removes it permanently.</li>
                        <li>All projects in this category require an <Link href="/docs/atmosphere-processor" style={{ color: 'rgb(5, 250, 250)' }}>Atmosphere Processor</Link>.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
