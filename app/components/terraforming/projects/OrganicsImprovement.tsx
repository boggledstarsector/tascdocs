import Link from "next/link";

export default function OrganicsImprovement() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Organics Improvement</h1>
                <div className="flex flex-row flex-wrap items-center gap-6">
                    <div className="flex flex-col items-center gap-1">
                        <img src="/images/resources/organics_trace.png" alt="Trace organics" className="h-10 w-10 shrink-0" />
                        <div className="text-sm">Trace</div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <img src="/images/resources/organics_common.png" alt="Common organics" className="h-10 w-10 shrink-0" />
                        <div className="text-sm">Common</div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <img src="/images/resources/organics_abundant.png" alt="Abundant organics" className="h-10 w-10 shrink-0" />
                        <div className="text-sm">Abundant</div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <img src="/images/resources/organics_plentiful.png" alt="Plentiful organics" className="h-10 w-10 shrink-0" />
                        <div className="text-sm">Plentiful</div>
                    </div>
                </div>
                <div>Duration: <span style={{ color: 'rgb(255, 210, 0)' }}>200</span> days <span className="italic opacity-60">(configurable via <Link href="https://fractalsoftworks.com/forum/index.php?topic=25658.0" style={{ color: 'inherit' }}>LunaLib</Link> settings)</span></div>

                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type supports <Link href="https://starsector.wiki.gg/wiki/Market_condition#Organics_reserves" style={{ color: 'rgb(5, 250, 250)' }}>organics</Link> improvement</li>
                        <li>Organics can be improved further</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Progression:</div>
                    <div className="pl-4">
                        <span className="italic opacity-60">(none)</span> → <span style={{ color: 'rgb(255, 210, 0)' }}>Trace</span> → <span style={{ color: 'rgb(255, 210, 0)' }}>Common</span> → <span style={{ color: 'rgb(255, 210, 0)' }}>Abundant</span> → <span style={{ color: 'rgb(255, 210, 0)' }}>Plentiful</span>
                    </div>
                    <div className="md:max-w-[750px]">Each run advances organics by one tier, up to the maximum allowed for the planet type.</div>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Maximum organics by planet type:</div>
                    <div className="overflow-x-auto mt-1">
                        <table className="border-collapse text-sm">
                            <thead>
                                <tr>
                                    <th className="border px-3 py-2 text-left" style={{ borderColor: 'rgb(5, 250, 250)' }}>Planet Type</th>
                                    <th className="border px-3 py-2 text-left" style={{ borderColor: 'rgb(5, 250, 250)' }}>Base Organics</th>
                                    <th className="border px-3 py-2 text-left" style={{ borderColor: 'rgb(5, 250, 250)' }}>Maximum</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Desert</td>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Trace</td>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(255, 210, 0)' }}>Common</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Jungle</td>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Common</td>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(255, 210, 0)' }}>Plentiful</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Terran</td>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Common</td>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(255, 210, 0)' }}>Plentiful</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Tundra</td>
                                    <td className="border px-3 py-2 italic opacity-60" style={{ borderColor: 'rgb(5, 250, 250)' }}>—</td>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(255, 210, 0)' }}>Trace</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Water</td>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Common</td>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(255, 210, 0)' }}>Plentiful</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}
