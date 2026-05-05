import Link from "next/link";

export default function AstroplisStation() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Astropolis Station</h1>
                <div className="md:max-w-[750px]"><span className="italic">A colossal orbital station that rivals the famed astropoli of Mairaath. Due to concerns about history repeating itself, the station is equipped with a remotely-triggered explosive device that can blow it into pieces too small to threaten a colony.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(5, 115, 10)' }}>Yes</span></div>
                <div className="flex items-center gap-2">Ability icon: <img src="/images/abilities/construct_astropolis_station.png" alt="Astroplis Station Ability" className="h-10 w-10" /></div>
                <div className="flex flex-wrap items-center gap-2">Construction cost: <span style={{ color: 'rgb(255, 210, 0)' }}>500,000¢</span>,
                    <img src="/images/commodities/crew.png" alt="Crew" className="h-10 w-10" /> <span style={{ color: 'rgb(255, 210, 0)' }}>1000</span>,
                    <img src="/images/commodities/heavymachinery.png" alt="Heavy machinery" className="h-10 w-10" /> <span style={{ color: 'rgb(255, 210, 0)' }}>250</span>,
                    <img src="/images/commodities/metals.png" alt="Metals" className="h-10 w-10" /> <span style={{ color: 'rgb(255, 210, 0)' }}>1000</span>,
                    <img src="/images/commodities/raremetals.png" alt="Rare metals" className="h-10 w-10" /> <span style={{ color: 'rgb(255, 210, 0)' }}>250</span>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>
                            Constructs a station in orbit around a planet you control.
                            <ul className="list-inside pl-4 mt-0 mb-1" style={{ listStyleType: 'circle' }}>
                                <li>The station is a separate colony from the planet it's in orbit around.</li>
                                <li>Has no resources and 100% hazard. <span className="italic opacity-60"> (base hazard for stations can be adjusted via LunaLib settings)</span></li>
                                <li>Up to three astropolis stations can be constructed around each planet.</li>
                                <li>The station sprite changes as the colony grows larger.</li>
                            </ul>
                        </li>
                        <li>
                            Astropolis stations can only be constructed around planets that meet certain criteria <span className="italic opacity-60"> (these restrictions can be disabled via LunaLib settings)</span>:
                            <ul className="list-inside pl-4 mt-0 mb-1" style={{ listStyleType: 'circle' }}>
                                <li>The planet must be sufficiently large</li>
                                <li>The planet must have three or less moons</li>
                                <li>The planet must not orbit too close to a star, moon or another planet</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
