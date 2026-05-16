import Link from "next/link";

export default function SectionFour() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col lg:flex-row items-start lg:items-center py-8 px-[2.5%] gap-6">
                <img
                    src="/images/sections/section_unknown_skies.png"
                    alt="Section four image"
                    className="w-full lg:w-[50%] lg:order-2 h-auto rounded-lg"
                />
                <div className="w-full lg:w-[50%] lg:order-1">
                    <h2 className="text-2xl font-bold mb-4">Full <Link href="https://fractalsoftworks.com/forum/index.php?topic=29876.0" style={{ color: 'inherit' }}>Unknown Skies</Link> support</h2>
                    <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
                        <li>
                            Terraform planets into the most notable <Link href="https://fractalsoftworks.com/forum/index.php?topic=29876.0" style={{ color: 'inherit' }}>Unknown Skies</Link> custom types, such as alpine and sakura worlds
                        </li>
                        <li>
                            Terraforming projects and TASC buildings are aware of <Link href="https://fractalsoftworks.com/forum/index.php?topic=29876.0" style={{ color: 'inherit' }}>Unknown Skies</Link> planetary conditions - for example, you can use domed cities to protect your colonists from dust storms
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
