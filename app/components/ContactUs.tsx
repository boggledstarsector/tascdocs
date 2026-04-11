export default function ContactUs() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Contact Us</h1>

                <p>
                    Thanks for your interest in getting in touch. This Site is maintained by boggled, an
                    independent modder for the game Starsector. We welcome questions, feedback, bug
                    reports, and suggestions related to the mod &quot;Terraforming and Station
                    Construction&quot; or its documentation.
                </p>

                <h2 className="text-2xl font-bold mt-4">Fractal Softworks Forum (Preferred)</h2>
                <p>
                    The best way to get in touch about anything related to the mod itself — questions,
                    bug reports, feature requests, compatibility issues, and general discussion — is
                    through the official mod thread on the Fractal Softworks forum:
                </p>
                <p>
                    <a
                        href="https://fractalsoftworks.com/forum/index.php?topic=17094.0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-lg"
                    >
                        Terraforming and Station Construction forum thread
                    </a>
                </p>
                <p>
                    Using the forum thread is preferred because it keeps discussion in one place where
                    other players can see answers, search past questions, and benefit from shared
                    knowledge. Posting there is the fastest way to reach us for mod-related matters.
                </p>

                <h2 className="text-2xl font-bold mt-4">Email</h2>
                <p>
                    Email should be used only for matters unrelated to the mod itself — for example, an
                    issue with this website, a privacy or legal inquiry, or another administrative
                    concern. Please do not send mod questions, bug reports, or feature requests by email;
                    those should go to the forum thread linked above so that the whole community can
                    benefit from the answers.
                </p>
                <p>
                    For website or administrative matters, you can reach us at:
                </p>
                <p>
                    <a href="mailto:boggledstarsector@gmail.com" className="underline text-lg">
                        boggledstarsector@gmail.com
                    </a>
                </p>
                <p>
                    Because this is a hobby project maintained in spare time, please understand that
                    replies may take several days or longer. Thank you for your patience.
                </p>

                <h2 className="text-2xl font-bold mt-4">Privacy</h2>
                <p>
                    Any information you send to us by email will be used only to respond to your inquiry
                    and will not be shared with third parties except as required by law. For more
                    information about how data is handled on this Site, please see our{" "}
                    <a href="/privacy-policy" className="underline">
                        Privacy Policy
                    </a>
                    .
                </p>
            </section>
        </div>
    );
}
