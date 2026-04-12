export default function SectionOne() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col lg:flex-row items-start lg:items-center py-8 px-[2.5%] gap-6">
                <img
                    src="/images/sections/section_terraforming_menu.png"
                    alt="Terraforming menu screenshot"
                    className="w-full lg:w-[50%] lg:order-2 h-auto rounded-lg"
                />
                <div className="w-full lg:w-[50%] lg:order-1">
                    <h2 className="text-2xl font-bold mb-4">Terraform planets</h2>
                    <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
                        <li>
                            Turn barren rocks into lush habitable worlds using an intuitive UI integrated into the command menu and colony management screen
                        </li>
                        <li>
                            Preview how terraforming would change the appearance and conditions on your planet before starting the project
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
