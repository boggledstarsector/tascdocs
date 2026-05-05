import Link from "next/link";

export default function VolatilesImprovement() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Volatiles Improvement</h1>
                <div className="md:max-w-[750px]"><span className="italic">Improves a planet&apos;s volatiles deposits by one tier, increasing the quantity of volatiles the colony can extract. Volatiles are a critical resource used in fuel production and demanded by many industries.</span></div>
                <div>Project type: <span style={{ color: 'rgb(5, 250, 250)' }}>Resource improvement</span></div>
                <div>Duration: <span style={{ color: 'rgb(255, 210, 0)' }}>200</span> days <span className="italic opacity-60">(default; configurable via LunaLib settings)</span></div>

                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type supports <Link href="https://starsector.wiki.gg/wiki/Volatiles" style={{ color: 'rgb(5, 250, 250)' }}>volatiles</Link> improvement</li>
                        <li>Volatiles can be improved further <span className="italic opacity-60">(current level is below the maximum for this planet type)</span></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Progression:</div>
                    <div className="pl-4">
                        <span className="italic opacity-60">(none)</span> → <span style={{ color: 'rgb(255, 210, 0)' }}>Trace</span> → <span style={{ color: 'rgb(255, 210, 0)' }}>Diffuse</span> → <span style={{ color: 'rgb(255, 210, 0)' }}>Abundant</span> → <span style={{ color: 'rgb(255, 210, 0)' }}>Plentiful</span>
                    </div>
                    <div className="md:max-w-[750px]">Each run advances volatiles by one tier, up to the maximum allowed for the planet type.</div>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Maximum volatiles by planet type:</div>
                    <div className="overflow-x-auto mt-1">
                        <table className="border-collapse text-sm">
                            <thead>
                                <tr>
                                    <th className="border px-3 py-2 text-left" style={{ borderColor: 'rgb(5, 250, 250)' }}>Planet Type</th>
                                    <th className="border px-3 py-2 text-left" style={{ borderColor: 'rgb(5, 250, 250)' }}>Base Volatiles</th>
                                    <th className="border px-3 py-2 text-left" style={{ borderColor: 'rgb(5, 250, 250)' }}>Maximum</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Desert</td>
                                    <td className="border px-3 py-2 italic opacity-60" style={{ borderColor: 'rgb(5, 250, 250)' }}>—</td>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(255, 210, 0)' }}>Trace</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Frozen</td>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Diffuse</td>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(255, 210, 0)' }}>Plentiful</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Terran</td>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Trace</td>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(255, 210, 0)' }}>Plentiful</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Tundra</td>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Diffuse</td>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(255, 210, 0)' }}>Plentiful</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Water</td>
                                    <td className="border px-3 py-2 italic opacity-60" style={{ borderColor: 'rgb(5, 250, 250)' }}>—</td>
                                    <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(255, 210, 0)' }}>Abundant</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Like <Link href="/docs/terraforming/organics-improvement" style={{ color: 'rgb(5, 250, 250)' }}>organics improvement</Link>, volatiles improvement has minimal requirements — no atmosphere, water, or building prerequisites.</li>
                        <li>Frozen and tundra worlds are the best for volatiles — they start at diffuse and can reach plentiful with two improvement projects.</li>
                        <li>Terran worlds can also reach plentiful volatiles but start at trace, requiring three improvement projects.</li>
                        <li>Water worlds cap out at <span style={{ color: 'rgb(255, 210, 0)' }}>abundant</span> (one tier below maximum).</li>
                        <li>Desert worlds can only reach <span style={{ color: 'rgb(255, 210, 0)' }}>trace</span> volatiles — one improvement project from nothing.</li>
                        <li>Barren, jungle, toxic, and volcanic worlds have no volatiles potential and cannot use this project.</li>
                        <li>Note that volatiles added via a planet type change to terran or tundra worlds can be disabled in LunaLib settings. If disabled, you can still use this project to add volatiles after the type change.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
