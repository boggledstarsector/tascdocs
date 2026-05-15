import Link from "next/link";

export default function MakeAtmosphereHabitable() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Make Atmosphere Habitable</h1>
                <div className="flex flex-row flex-wrap items-center gap-6">
                    <div className="flex flex-col items-center gap-1">
                        <img src="/images/conditions/habitable.png" alt="Habitable" className="h-10 w-10" />
                        <div className="text-sm">Habitable <span className="italic opacity-60">(added)</span></div>
                    </div>
                </div>
                <div>Duration: <span style={{ color: 'rgb(255, 210, 0)' }}>200</span> days <span className="italic opacity-60">(configurable via LunaLib settings)</span></div>

                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type allows human habitability</li>
                        <li>Planet is not already <Link href="https://starsector.wiki.gg/wiki/Habitable" style={{ color: 'rgb(5, 250, 250)' }}>habitable</Link></li>
                        <li>Planet does not have <Link href="https://starsector.wiki.gg/wiki/Extreme_Weather" style={{ color: 'rgb(5, 250, 250)' }}>extreme weather</Link></li>
                        <li>Atmospheric density is normal</li>
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
            </section>
        </div>
    );
}
