interface SectionProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
}

export default function Section({ imageSrc, imageAlt, title }: SectionProps) {
    return (
        <section className="flex flex-col items-center py-8">
            <img
                src={imageSrc}
                alt={imageAlt}
                className="w-[90%] h-auto rounded-lg"
            />
            <div className="w-[90%] mt-6">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </li>
                    <li>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                    </li>
                    <li>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </li>
                </ul>
            </div>
        </section>
    );
}
