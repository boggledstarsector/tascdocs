import Link from "next/link";

export default function StabilizeWeatherPatterns() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Stabilize Weather Patterns</h1>
                <div className="flex flex-row flex-wrap items-center gap-6">
                    <div className="flex flex-col items-center gap-1">
                        <img src="/images/conditions/weather_extreme.png" alt="Extreme weather" className="h-10 w-10" />
                        <div className="text-sm">Extreme Weather <span className="italic opacity-60">(removed)</span></div>
                    </div>
                </div>
                <div>Duration: <span style={{ color: 'rgb(255, 210, 0)' }}>200</span> days <span className="italic opacity-60">(configurable via LunaLib settings)</span></div>

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

                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>The <Link href="/docs/stellar-reflector-array" style={{ color: 'rgb(5, 250, 250)' }}>Stellar Reflector Array</Link> can suppress extreme weather while operational, but this project removes it permanently.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
