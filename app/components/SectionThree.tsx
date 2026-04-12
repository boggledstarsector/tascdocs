export default function SectionThree() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col lg:flex-row items-start lg:items-center py-8 px-[2.5%] gap-6">
                <img
                    src="/images/sections/section_astropolis.png"
                    alt="Astropolis station screenshot"
                    className="w-full lg:w-[50%] lg:order-2 h-auto rounded-lg"
                />
                <div className="w-full lg:w-[50%] lg:order-1">
                    <h2 className="text-2xl font-bold mb-4">Found station colonies</h2>
                    <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
                        <li>
                            Recreate the lost paradise of Mairaath by constructing gigantic astropolis stations in orbit around your colonies
                        </li>
                        <li>
                            Extract resources without colonizing any planets using mining and siphon stations
                        </li>
                        <li>
                            Recolonize derelict stations, such as the siphon station at Chupi Orco, the abandoned terraforming platform at Asharu, and many others
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
