export default function AboutUs() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">About Us</h1>

                <h2 className="text-2xl font-bold mt-4">Who We Are</h2>
                <p>
                    This website is run by boggled, an independent hobbyist modder for the space strategy
                    game Starsector, developed by Fractal Softworks, LLC. The Site serves as a central
                    place for documentation, screenshots, feature overviews, and reference material
                    related to the mod &quot;Terraforming and Station Construction&quot;.
                </p>

                <h2 className="text-2xl font-bold mt-4">Our Mission</h2>
                <p>
                    Our goal is simple: make it easier for players to understand what the mod does, how
                    its mechanics work, and how to get the most out of it. Good documentation helps
                    players make informed decisions about which mods to install and how to integrate them
                    into their playthroughs, and it reduces the friction of learning new systems.
                </p>

                <h2 className="text-2xl font-bold mt-4">What You&apos;ll Find Here</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        Detailed descriptions of the mod&apos;s features, systems, and content additions.
                    </li>
                    <li>
                        Reference information for in-game mechanics introduced or modified by the mod.
                    </li>
                    <li>
                        Screenshots and visual examples showing how features appear and behave in-game.
                    </li>
                    <li>
                        Notes on compatibility, requirements, and general usage guidance.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mt-4">About the Mod</h2>
                <p>
                    &quot;Terraforming and Station Construction&quot; is a free, community-made add-on for
                    Starsector. It is not an official product of Fractal Softworks, LLC, and this Site is
                    not affiliated with, endorsed by, or sponsored by Fractal Softworks, LLC. All
                    Starsector trademarks, logos, artwork, and game assets remain the property of their
                    respective owners.
                </p>

                <h2 className="text-2xl font-bold mt-4">Get in Touch</h2>
                <p>
                    For questions, feedback, bug reports, or suggestions about the mod, the best place
                    to reach us is the official{" "}
                    <a
                        href="https://fractalsoftworks.com/forum/index.php?topic=17094.0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        Terraforming and Station Construction forum thread
                    </a>{" "}
                    on the Fractal Softworks forum, where discussion stays in one place and other
                    players can benefit from the answers. For matters unrelated to the mod itself, such
                    as an issue with this website, you can contact us by email. See our{" "}
                    <a href="/contact-us" className="underline">
                        contact page
                    </a>{" "}
                    for full details.
                </p>
            </section>
        </div>
    );
}
