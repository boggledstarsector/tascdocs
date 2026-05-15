import Link from "next/link";

export default function DocsIndex() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="py-2 md:py-4 px-[2.5%] text-base leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
                    <div className="border p-4 flex flex-col gap-3" style={{ borderColor: 'rgb(5, 250, 250)' }}>
                        <h2 className="text-2xl font-bold">Terraforming</h2>
                        <div><Link href="/docs/terraforming" style={{ color: 'rgb(5, 250, 250)' }}>Terraforming overview</Link></div>
                        <div className="flex flex-col gap-1">
                            <div>Buildings:</div>
                            <ul className="list-disc list-inside pl-4">
                                <li><Link href="/docs/atmosphere-processor" style={{ color: 'rgb(5, 250, 250)' }}>Atmosphere Processor</Link></li>
                                <li><Link href="/docs/stellar-reflector-array" style={{ color: 'rgb(5, 250, 250)' }}>Stellar Reflector Array</Link></li>
                                <li><Link href="/docs/genelab" style={{ color: 'rgb(5, 250, 250)' }}>Genelab</Link></li>
                                <li><Link href="/docs/mesozoic-park" style={{ color: 'rgb(5, 250, 250)' }}>Mesozoic Park</Link></li>
                                <li><Link href="/docs/domed-cities" style={{ color: 'rgb(5, 250, 250)' }}>Domed Cities</Link></li>
                                <li><Link href="/docs/sky-cities" style={{ color: 'rgb(5, 250, 250)' }}>Sky Cities</Link></li>
                                <li><Link href="/docs/seafloor-cities" style={{ color: 'rgb(5, 250, 250)' }}>Seafloor Cities</Link></li>
                                <li><Link href="/docs/harmonic-damper" style={{ color: 'rgb(5, 250, 250)' }}>Harmonic Damper</Link></li>
                                <li><Link href="/docs/planetary-agrav-field" style={{ color: 'rgb(5, 250, 250)' }}>Planetary Agrav Field</Link></li>
                                <li><Link href="/docs/planet-cracker" style={{ color: 'rgb(5, 250, 250)' }}>Planet Cracker</Link></li>
                                <li><Link href="/docs/ouyang-optimizer" style={{ color: 'rgb(5, 250, 250)' }}>Ouyang Optimizer</Link></li>
                                <li><Link href="/docs/asteroid-processing" style={{ color: 'rgb(5, 250, 250)' }}>Asteroid Processing</Link></li>
                                <li><Link href="/docs/ismaras-sling" style={{ color: 'rgb(5, 250, 250)' }}>Ismara&apos;s Sling</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="flex-1 border p-4 flex flex-col gap-3" style={{ borderColor: 'rgb(5, 250, 250)' }}>
                            <h2 className="text-2xl font-bold">Station Construction</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1">
                                    <div>Station construction abilities:</div>
                                    <ul className="list-disc list-inside pl-4">
                                        <li><Link href="/docs/astropolis-station" style={{ color: 'rgb(5, 250, 250)' }}>Astropolis Station</Link></li>
                                        <li><Link href="/docs/mining-station" style={{ color: 'rgb(5, 250, 250)' }}>Mining Station</Link></li>
                                        <li><Link href="/docs/siphon-station" style={{ color: 'rgb(5, 250, 250)' }}>Siphon Station</Link></li>
                                        <li><Link href="/docs/colonize-abandoned-station" style={{ color: 'rgb(5, 250, 250)' }}>Colonize Abandoned Station</Link></li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div>Station buildings:</div>
                                    <ul className="list-disc list-inside pl-4">
                                        <li><Link href="/docs/ai-mining-drones" style={{ color: 'rgb(5, 250, 250)' }}>AI Mining Drones</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 border p-4 flex flex-col gap-3" style={{ borderColor: 'rgb(5, 250, 250)' }}>
                            <h2 className="text-2xl font-bold">Domain-tech Content</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1">
                                    <div>Stable location structures:</div>
                                    <ul className="list-disc list-inside pl-4">
                                        <li><Link href="/docs/stable-location-structures" style={{ color: 'rgb(5, 250, 250)' }}>Stable Location Structures &amp; Gate Construction</Link></li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div>Domain-tech buildings and projects:</div>
                                    <ul className="list-disc list-inside pl-4">
                                        <li><Link href="/docs/domain-archaeology" style={{ color: 'rgb(5, 250, 250)' }}>Domain Archaeology</Link></li>
                                        <li><Link href="/docs/chameleon" style={{ color: 'rgb(5, 250, 250)' }}>CHAMELEON</Link></li>
                                        <li><Link href="/docs/kletka-simulator" style={{ color: 'rgb(5, 250, 250)' }}>Kletka Simulator</Link></li>
                                        <li><Link href="/docs/limelight-network" style={{ color: 'rgb(5, 250, 250)' }}>Limelight Network</Link></li>
                                        <li><Link href="/docs/perihelion-project" style={{ color: 'rgb(5, 250, 250)' }}>Perihelion Project</Link></li>
                                        <li><Link href="/docs/galatian-particle-accelerator" style={{ color: 'rgb(5, 250, 250)' }}>Galatian Particle Accelerator</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2 border p-4 flex flex-col gap-3" style={{ borderColor: 'rgb(5, 250, 250)' }}>
                        <h2 className="text-2xl font-bold">Miscellaneous</h2>
                        <div className="flex flex-col gap-1">
                            <div>Buildings:</div>
                            <ul className="list-disc list-inside pl-4">
                                <li><Link href="/docs/remnant-station" style={{ color: 'rgb(5, 250, 250)' }}>Remnant Station</Link></li>
                                <li><Link href="/docs/cloning" style={{ color: 'rgb(5, 250, 250)' }}>Cloning</Link></li>
                                <li><Link href="/docs/hydroponics" style={{ color: 'rgb(5, 250, 250)' }}>Hydroponics</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
