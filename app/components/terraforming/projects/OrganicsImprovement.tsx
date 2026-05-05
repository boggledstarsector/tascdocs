import Link from "next/link";

export default function OrganicsImprovement() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Organics Improvement</h1>
                <div className="md:max-w-[750px]"><span className="italic">Improves a planet&apos;s organics deposits by one tier, increasing the quantity of organics the colony can extract. Organics are used in fuel production and as an input for various industries.</span></div>
                <div>Project type: <span style={{ color: 'rgb(5, 250, 250)' }}>Resource improvement</span></div>
                <div>Duration: <span style={{ color: 'rgb(255, 210, 0)' }}>200</span> days <span className="italic opacity-60">(default; configurable via LunaLib settings)</span></div>

                <div className="flex flex-col gap-1">
                    <div>Requirements:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>World type supports <Link href="https://starsector.wiki.gg/wiki/Organics" style={{ color: 'rgb(5, 250, 250)' }}>organics</Link> improvement</li>
                        <li>Organics can be improved further <span className="italic opacity-60">(current level is below the maximum for this planet type)</span></li>
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

                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Organics improvement has minimal requirements — no atmosphere, water, or building prerequisites. Only the planet type and current level matter.</li>
                        <li>Barren, frozen, toxic, and volcanic worlds have no organics potential and cannot use this project.</li>
                        <li>Desert worlds can only improve organics by one tier (trace → common), making them poor candidates for organics production.</li>
                        <li>Jungle, terran, and water worlds are the best for organics — they start at common and can reach plentiful with two improvement projects.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
