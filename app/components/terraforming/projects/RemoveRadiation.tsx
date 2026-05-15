import Link from "next/link";

export default function RemoveRadiation() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Remove Radiation</h1>
                <div className="flex flex-row flex-wrap items-center gap-6">
                    <div className="flex flex-col items-center gap-1">
                        <img src="/images/conditions/irradiated.png" alt="Irradiated" className="h-10 w-10" />
                        <div className="text-sm">Irradiated <span className="italic opacity-60">(removed)</span></div>
                    </div>
                </div>
                <div>Duration: <span style={{ color: 'rgb(255, 210, 0)' }}>200</span> days <span className="italic opacity-60">(configurable via LunaLib settings)</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(200, 10, 20)' }}>No</span> <span className="italic opacity-60">(can be enabled via LunaLib settings)</span></div>

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
            </section>
        </div>
    );
}
