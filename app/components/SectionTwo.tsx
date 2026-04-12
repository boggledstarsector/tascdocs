export default function SectionTwo() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col lg:flex-row items-start lg:items-center py-8 px-[2.5%] gap-6">
                <img
                    src="/images/sections/section_stellar_reflector_array.png"
                    alt="Section two image"
                    className="w-full lg:w-[50%] lg:order-2 h-auto rounded-lg"
                />
                <div className="w-full lg:w-[50%] lg:order-1">
                    <h2 className="text-2xl font-bold mb-4">Construct unique colony buildings</h2>
                    <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
                        <li>
                            Create stellar reflector arrays in orbit around your planets to increase food production
                        </li>
                        <li>
                            Build domed cities to protect your colonists from dangerous biospheres, or a genelab to seed oceans with delicious crustaceans
                        </li>
                        <li>
                            Earn credits using a dinosaur park that becomes more lucrative based on colony stability and accessibility
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
