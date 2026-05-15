import Link from "next/link";

export default function Terraforming() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Terraforming</h1>
                <div>TASC adds a comprehensive terraforming system that allows you to reshape worlds through long-running projects. Using the terraforming menu, you can change a planet&apos;s type, improve its natural resources, or modify its atmospheric and climate conditions.</div>
                <div className="flex justify-start mt-4">
                    <img
                        src="/images/sections/section_terraforming_menu.png"
                        alt="Terraforming Menu"
                        className="h-auto border"
                        style={{ borderColor: 'rgb(5, 250, 250)' }}
                    />
                </div>
                <h2 className="text-2xl font-bold mt-4">Terraforming Menu</h2>
                <div>The terraforming menu is integrated into the command UI (opened via the "D" key). The left panel displays all of your colonized planets, showing their current appearance and conditions. Selecting a planet reveals the available terraforming projects. Clicking a project shows a preview of the planet&apos;s appearance and conditions after the project completes, along with a list of requirements color-coded to indicate whether they are met.</div>
                <div>Only one terraforming project can be active per colony at a time. Starting a new project on a colony that already has one in progress will cancel the existing project.</div>

                <h2 className="text-2xl font-bold mt-4">Project Types</h2>
                <div>There are three categories of terraforming projects, each with a configurable default duration:</div>
                <ul className="list-disc list-inside pl-4">
                    <li><Link href="#planet-type-changes" style={{ color: 'rgb(5, 250, 250)' }}>Planet type change</Link> — transforms the planet into a different type entirely. Takes <span style={{ color: 'rgb(255, 210, 0)' }}>400</span> days. <span className="italic opacity-60">(configurable via LunaLib settings)</span></li>
                    <li><Link href="#resource-improvements" style={{ color: 'rgb(5, 250, 250)' }}>Resource improvement</Link> — increases the level of a natural resource (farmland, organics, or volatiles) by one tier. Takes <span style={{ color: 'rgb(255, 210, 0)' }}>200</span> days. <span className="italic opacity-60">(configurable via LunaLib settings)</span></li>
                    <li><Link href="#condition-modifications" style={{ color: 'rgb(5, 250, 250)' }}>Condition modification</Link> — adds or removes a market condition such as atmosphere type, habitability, or climate. Takes <span style={{ color: 'rgb(255, 210, 0)' }}>200</span> days. <span className="italic opacity-60">(configurable via LunaLib settings)</span></li>
                </ul>

                <h2 className="text-2xl font-bold mt-4">Project Lifecycle</h2>
                <div>Terraforming projects progress one day per in-game day, but only while all requirements remain satisfied. If any requirement becomes unmet during a project (for example, a required building is disrupted), the project stalls and progress pauses until the requirement is met again. When the requirement is restored, the project resumes from where it left off. Notifications are sent when a project stalls or resumes.</div>

                <h2 className="text-2xl font-bold mt-4">Planet Type Categories</h2>
                <div>TASC classifies planets into one of ten types. These types determine which terraforming projects are available, what resources can be improved, and what the base resource levels are after a type change. Vanilla and modded planet type IDs are mapped to these TASC types via a configuration file.</div>

                <div className="overflow-x-auto mt-2">
                    <table className="border-collapse text-sm">
                        <thead>
                            <tr>
                                <th className="border px-3 py-2 text-left" style={{ borderColor: 'rgb(5, 250, 250)' }}>TASC Type</th>
                                <th className="border px-3 py-2 text-left" style={{ borderColor: 'rgb(5, 250, 250)' }}>Terraformable</th>
                                <th className="border px-3 py-2 text-left" style={{ borderColor: 'rgb(5, 250, 250)' }}>Farmland Support</th>
                                <th className="border px-3 py-2 text-left" style={{ borderColor: 'rgb(5, 250, 250)' }}>Base Water</th>
                                <th className="border px-3 py-2 text-left" style={{ borderColor: 'rgb(5, 250, 250)' }}>Organics (Base / Max)</th>
                                <th className="border px-3 py-2 text-left" style={{ borderColor: 'rgb(5, 250, 250)' }}>Volatiles (Base / Max)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Barren</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(200, 10, 20)' }}>No</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Low</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / —</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / —</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Desert</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Medium</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Trace (-1) / Common (0)</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / Trace (-1)</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Frozen</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(200, 10, 20)' }}>No</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>High</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / —</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Diffuse (0) / Plentiful (+2)</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Gas Giant</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(200, 10, 20)' }}>No</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(200, 10, 20)' }}>No</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Low</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / —</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / —</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Jungle</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>High</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Common (0) / Plentiful (+2)</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / —</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Terran</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>High</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Common (0) / Plentiful (+2)</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Trace<span className="italic opacity-60">*</span> (-1) / Plentiful (+2)</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Toxic</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(200, 10, 20)' }}>No</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Low</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / —</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / —</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Tundra</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Medium</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / Trace (-1)</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Diffuse<span className="italic opacity-60">*</span> (0) / Plentiful (+2)</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Volcanic</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(200, 10, 20)' }}>No</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(200, 10, 20)' }}>No</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Low</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / —</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / —</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Water</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(200, 10, 20)' }}>No</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>High</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Common (0) / Plentiful (+2)</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / Abundant (+1)</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="italic opacity-60">* Volatiles deposits block installation of Soil Nanites. There is a LunaLib setting to prevent Terran and tundra planets from receiving volatiles by default.</div>

                <h2 className="text-2xl font-bold mt-4">Water Level</h2>
                <div>Each planet has a water level of <span style={{ color: 'rgb(255, 210, 0)' }}>low</span>, <span style={{ color: 'rgb(255, 210, 0)' }}>medium</span>, or <span style={{ color: 'rgb(255, 210, 0)' }}>high</span>, determined by its TASC planet type (see table above). Many terraforming projects — particularly planet type changes and farmland improvements — require a minimum water level.</div>
                <div>The water level is raised to <span style={{ color: 'rgb(255, 210, 0)' }}>high</span> if an operational <Link href="/docs/ismaras-sling" style={{ color: 'rgb(5, 250, 250)' }}>Ismara&apos;s Sling</Link> or <Link href="/docs/asteroid-processing" style={{ color: 'rgb(5, 250, 250)' }}>Asteroid Processing</Link> facility exists on any colony you own in the same star system. This is often necessary for terraforming barren, desert, toxic, or tundra worlds that have low or medium base water.</div>

                <h2 className="text-2xl font-bold mt-4">Temperature</h2>
                <div>Planets may have temperature conditions such as <Link href="https://starsector.wiki.gg/wiki/Hot" style={{ color: 'rgb(5, 250, 250)' }}>hot</Link>, <Link href="https://starsector.wiki.gg/wiki/Cold" style={{ color: 'rgb(5, 250, 250)' }}>cold</Link>, very hot, or very cold. Temperature <span style={{ color: 'rgb(200, 10, 20)' }}>cannot be permanently changed</span> by terraforming. However, the <Link href="/docs/stellar-reflector-array" style={{ color: 'rgb(5, 250, 250)' }}>Stellar Reflector Array</Link> building can suppress hot, cold, and poor light conditions while it is operational. Different planet type changes require different temperature ranges — for example, a terran type change requires the planet not be very hot or very cold, while a frozen type change requires the planet to be very cold.</div>

                <h2 className="text-2xl font-bold mt-4">All Terraforming Projects</h2>

                <div className="flex flex-col gap-1">
                    <div id="planet-type-changes">Planet Type Changes</div>
                    <ul className="list-disc list-inside pl-4">
                        <li><Link href="/docs/terraforming/terran-type-change" style={{ color: 'rgb(5, 250, 250)' }}>Terran Type Change</Link></li>
                        <li><Link href="/docs/terraforming/water-type-change" style={{ color: 'rgb(5, 250, 250)' }}>Water Type Change</Link></li>
                        <li><Link href="/docs/terraforming/arid-type-change" style={{ color: 'rgb(5, 250, 250)' }}>Arid Type Change</Link></li>
                        <li><Link href="/docs/terraforming/jungle-type-change" style={{ color: 'rgb(5, 250, 250)' }}>Jungle Type Change</Link></li>
                        <li><Link href="/docs/terraforming/tundra-type-change" style={{ color: 'rgb(5, 250, 250)' }}>Tundra Type Change</Link></li>
                        <li><Link href="/docs/terraforming/frozen-type-change" style={{ color: 'rgb(5, 250, 250)' }}>Frozen Type Change</Link></li>
                        <li><Link href="/docs/terraforming/alpine-type-change" style={{ color: 'rgb(5, 250, 250)' }}>Alpine Type Change</Link> <span className="italic opacity-60">(if Unknown Skies is enabled)</span></li>
                        <li><Link href="/docs/terraforming/atoll-type-change" style={{ color: 'rgb(5, 250, 250)' }}>Atoll Type Change</Link> <span className="italic opacity-60">(if Unknown Skies is enabled)</span></li>
                        <li><Link href="/docs/terraforming/sakura-type-change" style={{ color: 'rgb(5, 250, 250)' }}>Sakura Type Change</Link> <span className="italic opacity-60">(if Unknown Skies is enabled)</span></li>
                        <li><Link href="/docs/terraforming/savannah-type-change" style={{ color: 'rgb(5, 250, 250)' }}>Savannah Type Change</Link> <span className="italic opacity-60">(if Unknown Skies is enabled)</span></li>
                        <li><Link href="/docs/terraforming/storm-type-change" style={{ color: 'rgb(5, 250, 250)' }}>Storm Type Change</Link> <span className="italic opacity-60">(if Unknown Skies is enabled)</span></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div id="resource-improvements">Resource Improvements</div>
                    <ul className="list-disc list-inside pl-4">
                        <li><Link href="/docs/terraforming/farmland-improvement" style={{ color: 'rgb(5, 250, 250)' }}>Farmland Improvement</Link></li>
                        <li><Link href="/docs/terraforming/organics-improvement" style={{ color: 'rgb(5, 250, 250)' }}>Organics Improvement</Link></li>
                        <li><Link href="/docs/terraforming/volatiles-improvement" style={{ color: 'rgb(5, 250, 250)' }}>Volatiles Improvement</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div id="condition-modifications">Condition Modifications</div>
                    <ul className="list-disc list-inside pl-4">
                        <li><Link href="/docs/terraforming/add-atmosphere" style={{ color: 'rgb(5, 250, 250)' }}>Add Atmosphere</Link></li>
                        <li><Link href="/docs/terraforming/increase-atmospheric-density" style={{ color: 'rgb(5, 250, 250)' }}>Increase Atmospheric Density</Link></li>
                        <li><Link href="/docs/terraforming/reduce-atmospheric-density" style={{ color: 'rgb(5, 250, 250)' }}>Reduce Atmospheric Density</Link></li>
                        <li><Link href="/docs/terraforming/reduce-atmospheric-toxicity" style={{ color: 'rgb(5, 250, 250)' }}>Reduce Atmospheric Toxicity</Link></li>
                        <li><Link href="/docs/terraforming/remove-atmosphere" style={{ color: 'rgb(5, 250, 250)' }}>Remove Atmosphere</Link> <span className="italic opacity-60">(can be enabled via LunaLib settings)</span></li>
                        <li><Link href="/docs/terraforming/make-atmosphere-habitable" style={{ color: 'rgb(5, 250, 250)' }}>Make Atmosphere Habitable</Link></li>
                        <li><Link href="/docs/terraforming/make-climate-mild" style={{ color: 'rgb(5, 250, 250)' }}>Make Climate Mild</Link></li>
                        <li><Link href="/docs/terraforming/stabilize-weather-patterns" style={{ color: 'rgb(5, 250, 250)' }}>Stabilize Weather Patterns</Link></li>
                        <li><Link href="/docs/terraforming/remove-radiation" style={{ color: 'rgb(5, 250, 250)' }}>Remove Radiation</Link> <span className="italic opacity-60">(can be enabled via LunaLib settings)</span></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Stars, gas giants, and volcanic worlds cannot be terraformed.</li>
                        <li>If the <Link href="https://fractalsoftworks.com/forum/index.php?topic=29161.0" style={{ color: 'rgb(5, 250, 250)' }}>Ashes of the Domain: Vaults of Knowledge</Link> mod is enabled, terraforming projects require research before they can be started.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
