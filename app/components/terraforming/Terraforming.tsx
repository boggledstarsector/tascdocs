import Link from "next/link";

export default function Terraforming() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Terraforming</h1>
                <div className="flex justify-start">
                    <img
                        src="/images/sections/section_terraforming_menu.png"
                        alt="Terraforming Menu"
                        className="h-auto border"
                        style={{ borderColor: 'rgb(5, 250, 250)' }}
                    />
                </div>
                <div className="md:max-w-[750px]"><span className="italic">TASC adds a comprehensive terraforming system that allows you to reshape worlds through long-running projects. Using the terraforming menu, you can change a planet&apos;s type, improve its natural resources, or modify its atmospheric and climate conditions.</span></div>

                <h2 className="text-2xl font-bold mt-4">Terraforming Menu</h2>
                <div className="md:max-w-[750px]">The terraforming menu is accessed via the ability bar while in a star system where you own at least one colony. The left panel displays all of your colonized planets, showing their current appearance and conditions. Selecting a planet reveals the available terraforming projects. Clicking a project shows a preview of the planet&apos;s appearance after the project completes, along with a list of requirements color-coded to indicate whether they are met.</div>
                <div className="md:max-w-[750px]">Only one terraforming project can be active per colony at a time. Starting a new project on a colony that already has one in progress will cancel the existing project.</div>

                <h2 className="text-2xl font-bold mt-4">Project Types</h2>
                <div className="md:max-w-[750px]">There are three categories of terraforming projects, each with a configurable default duration:</div>
                <ul className="list-disc list-inside pl-4">
                    <li><span style={{ color: 'rgb(5, 250, 250)' }}>Planet type change</span> — transforms the planet into a different type entirely. Default duration: <span style={{ color: 'rgb(255, 210, 0)' }}>400</span> days. <span className="italic opacity-60">(configurable from 1 to 2,000 days via LunaLib settings)</span></li>
                    <li><span style={{ color: 'rgb(5, 250, 250)' }}>Resource improvement</span> — increases the level of a natural resource (farmland, organics, or volatiles) by one tier. Default duration: <span style={{ color: 'rgb(255, 210, 0)' }}>200</span> days. <span className="italic opacity-60">(configurable from 1 to 1,000 days via LunaLib settings)</span></li>
                    <li><span style={{ color: 'rgb(5, 250, 250)' }}>Condition modification</span> — adds or removes a market condition such as atmosphere type, habitability, or climate. Default duration: <span style={{ color: 'rgb(255, 210, 0)' }}>200</span> days. <span className="italic opacity-60">(configurable from 1 to 1,000 days via LunaLib settings)</span></li>
                </ul>

                <h2 className="text-2xl font-bold mt-4">Project Lifecycle</h2>
                <div className="md:max-w-[750px]">Terraforming projects progress one day per game day, but only while all requirements remain satisfied. If any requirement becomes unmet during a project (for example, a required building is disrupted), the project <span style={{ color: 'rgb(200, 10, 20)' }}>stalls</span> and progress pauses until the requirement is met again. When the requirement is restored, the project <span style={{ color: 'rgb(5, 115, 10)' }}>resumes</span> from where it left off. Notifications are sent when a project stalls or resumes.</div>

                <h2 className="text-2xl font-bold mt-4">Planet Type Categories</h2>
                <div className="md:max-w-[750px]">TASC classifies every planet in the sector into one of eleven internal types. These types determine which terraforming projects are available, what resources can be improved, and what the base resource levels are after a type change. Vanilla and modded planet type IDs are mapped to these TASC types via a configuration file.</div>

                <div className="overflow-x-auto mt-2">
                    <table className="border-collapse text-sm">
                        <thead>
                            <tr>
                                <th className="border px-3 py-2 text-left" style={{ borderColor: 'rgb(5, 250, 250)' }}>TASC Type</th>
                                <th className="border px-3 py-2 text-left" style={{ borderColor: 'rgb(5, 250, 250)' }}>Terraformable</th>
                                <th className="border px-3 py-2 text-left" style={{ borderColor: 'rgb(5, 250, 250)' }}>Habitable</th>
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
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(200, 10, 20)' }}>No</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Low</td>
                                <td className="border px-3 py-2 italic opacity-60" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / —</td>
                                <td className="border px-3 py-2 italic opacity-60" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / —</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Desert</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Medium</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Trace / Common</td>
                                <td className="border px-3 py-2 italic opacity-60" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / Trace</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Frozen</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(200, 10, 20)' }}>No</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(200, 10, 20)' }}>No</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>High</td>
                                <td className="border px-3 py-2 italic opacity-60" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / —</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Diffuse / Plentiful</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Gas Giant</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(200, 10, 20)' }}>No</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(200, 10, 20)' }}>No</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(200, 10, 20)' }}>No</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Low</td>
                                <td className="border px-3 py-2 italic opacity-60" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / —</td>
                                <td className="border px-3 py-2 italic opacity-60" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / —</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Jungle</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>High</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Common / Plentiful</td>
                                <td className="border px-3 py-2 italic opacity-60" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / —</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Terran</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>High</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Common / Plentiful</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Trace / Plentiful</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Toxic</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(200, 10, 20)' }}>No</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(200, 10, 20)' }}>No</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Low</td>
                                <td className="border px-3 py-2 italic opacity-60" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / —</td>
                                <td className="border px-3 py-2 italic opacity-60" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / —</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Tundra</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Medium</td>
                                <td className="border px-3 py-2 italic opacity-60" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / Trace</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Diffuse / Plentiful</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Volcanic</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(200, 10, 20)' }}>No</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(200, 10, 20)' }}>No</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(200, 10, 20)' }}>No</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Low</td>
                                <td className="border px-3 py-2 italic opacity-60" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / —</td>
                                <td className="border px-3 py-2 italic opacity-60" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / —</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Water</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(5, 115, 10)' }}>Yes</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(200, 10, 20)' }}>No</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>High</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Common / Plentiful</td>
                                <td className="border px-3 py-2 italic opacity-60" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / Abundant</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Star</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(200, 10, 20)' }}>No</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(200, 10, 20)' }}>No</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)', color: 'rgb(200, 10, 20)' }}>No</td>
                                <td className="border px-3 py-2" style={{ borderColor: 'rgb(5, 250, 250)' }}>Low</td>
                                <td className="border px-3 py-2 italic opacity-60" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / —</td>
                                <td className="border px-3 py-2 italic opacity-60" style={{ borderColor: 'rgb(5, 250, 250)' }}>— / —</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="text-2xl font-bold mt-4">Water Level</h2>
                <div className="md:max-w-[750px]">Each planet has a water level of <span style={{ color: 'rgb(255, 210, 0)' }}>low</span>, <span style={{ color: 'rgb(255, 210, 0)' }}>medium</span>, or <span style={{ color: 'rgb(255, 210, 0)' }}>high</span>, determined by its TASC planet type (see table above). Many terraforming projects — particularly planet type changes and farmland improvements — require a minimum water level.</div>
                <div className="md:max-w-[750px]">The water level is raised to <span style={{ color: 'rgb(255, 210, 0)' }}>high</span> if an operational <Link href="/docs/ismaras-sling" style={{ color: 'rgb(5, 250, 250)' }}>Ismara&apos;s Sling</Link> or <Link href="/docs/asteroid-processing" style={{ color: 'rgb(5, 250, 250)' }}>Asteroid Processing</Link> facility exists on any colony you own in the same star system. This is often necessary for terraforming barren, desert, toxic, or tundra worlds that have low or medium base water.</div>

                <h2 className="text-2xl font-bold mt-4">Temperature</h2>
                <div className="md:max-w-[750px]">Planets may have temperature conditions such as <Link href="https://starsector.wiki.gg/wiki/Hot" style={{ color: 'rgb(5, 250, 250)' }}>hot</Link>, <Link href="https://starsector.wiki.gg/wiki/Cold" style={{ color: 'rgb(5, 250, 250)' }}>cold</Link>, very hot, or very cold. Temperature <span style={{ color: 'rgb(200, 10, 20)' }}>cannot be permanently changed</span> by terraforming. However, the <Link href="/docs/stellar-reflector-array" style={{ color: 'rgb(5, 250, 250)' }}>Stellar Reflector Array</Link> building can suppress hot, cold, and poor light conditions while it is operational. Different planet type changes require different temperature ranges — for example, a terran type change requires the planet not be very hot or very cold, while a frozen type change requires the planet to be very cold.</div>

                <h2 className="text-2xl font-bold mt-4">Key Buildings</h2>
                <div className="md:max-w-[750px]">Several TASC buildings play essential roles in terraforming:</div>
                <ul className="list-disc list-inside pl-4">
                    <li><Link href="/docs/stellar-reflector-array" style={{ color: 'rgb(5, 250, 250)' }}>Stellar Reflector Array</Link> — required for most planet type changes; suppresses temperature and atmospheric conditions</li>
                    <li><Link href="/docs/atmosphere-processor" style={{ color: 'rgb(5, 250, 250)' }}>Atmosphere Processor</Link> — required for all condition modification projects involving atmosphere, habitability, and climate</li>
                    <li><Link href="/docs/ismaras-sling" style={{ color: 'rgb(5, 250, 250)' }}>Ismara&apos;s Sling</Link> / <Link href="/docs/asteroid-processing" style={{ color: 'rgb(5, 250, 250)' }}>Asteroid Processing</Link> — raises water level to high for all planets in the same star system</li>
                </ul>

                <h2 className="text-2xl font-bold mt-4">All Terraforming Projects</h2>

                <div className="flex flex-col gap-1">
                    <div><span style={{ color: 'rgb(5, 250, 250)' }}>Planet Type Changes</span></div>
                    <ul className="list-disc list-inside pl-4">
                        <li><Link href="/docs/terraforming/terran-type-change" style={{ color: 'rgb(5, 250, 250)' }}>Terran Type Change</Link></li>
                        <li><Link href="/docs/terraforming/water-type-change" style={{ color: 'rgb(5, 250, 250)' }}>Water Type Change</Link></li>
                        <li><Link href="/docs/terraforming/arid-type-change" style={{ color: 'rgb(5, 250, 250)' }}>Arid Type Change</Link></li>
                        <li><Link href="/docs/terraforming/jungle-type-change" style={{ color: 'rgb(5, 250, 250)' }}>Jungle Type Change</Link></li>
                        <li><Link href="/docs/terraforming/tundra-type-change" style={{ color: 'rgb(5, 250, 250)' }}>Tundra Type Change</Link></li>
                        <li><Link href="/docs/terraforming/frozen-type-change" style={{ color: 'rgb(5, 250, 250)' }}>Frozen Type Change</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div><span style={{ color: 'rgb(5, 250, 250)' }}>Resource Improvements</span></div>
                    <ul className="list-disc list-inside pl-4">
                        <li><Link href="/docs/terraforming/farmland-improvement" style={{ color: 'rgb(5, 250, 250)' }}>Farmland Improvement</Link></li>
                        <li><Link href="/docs/terraforming/organics-improvement" style={{ color: 'rgb(5, 250, 250)' }}>Organics Improvement</Link></li>
                        <li><Link href="/docs/terraforming/volatiles-improvement" style={{ color: 'rgb(5, 250, 250)' }}>Volatiles Improvement</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div><span style={{ color: 'rgb(5, 250, 250)' }}>Condition Modifications</span></div>
                    <ul className="list-disc list-inside pl-4">
                        <li><Link href="/docs/terraforming/atmosphere-manipulation" style={{ color: 'rgb(5, 250, 250)' }}>Atmosphere Manipulation</Link> — add, remove, or normalize atmospheric conditions</li>
                        <li><Link href="/docs/terraforming/habitability-and-climate" style={{ color: 'rgb(5, 250, 250)' }}>Habitability &amp; Climate</Link> — make a world habitable, improve its climate, or remove hazards</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <div>Notes:</div>
                    <ul className="list-disc list-inside pl-4">
                        <li>Stars, gas giants, and volcanic worlds cannot be terraformed.</li>
                        <li>If the <Link href="https://fractalsoftworks.com/forum/index.php?topic=25500.0" style={{ color: 'rgb(5, 250, 250)' }}>Unknown Skies</Link> mod (version 3+) is also installed, additional planet type change projects become available: Alpine, Atoll, Sakura, Savannah, and Storm.</li>
                        <li>If the <Link href="https://fractalsoftworks.com/forum/index.php?topic=29161.0" style={{ color: 'rgb(5, 250, 250)' }}>Achievements of the Domain</Link> mod is installed, planet type changes require the &quot;Planet Type Manipulation&quot; research, resource improvements require &quot;Resource Manipulation&quot; research, and condition modifications require &quot;Atmosphere Manipulation&quot; research.</li>
                        <li>All project durations are configurable via LunaLib settings.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
