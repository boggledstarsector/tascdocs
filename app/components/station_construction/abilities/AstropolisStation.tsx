import Link from "next/link";

export default function AstroplisStation() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <section className="flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed">
                <h1 className="text-3xl font-bold">Astropolis Station</h1>
                <div className="md:max-w-[750px]"><span className="italic">A colossal orbital station that rivals the famed astropoli of Mairaath. Due to concerns about history repeating itself, the station is equipped with a remotely-triggered explosive device that can blow it into pieces too small to threaten a colony.</span></div>
                <div>Enabled by default: <span style={{ color: 'rgb(5, 115, 10)' }}>Yes</span></div>
                <div className="flex flex-wrap items-center gap-2">Construction cost: <span style={{ color: 'rgb(255, 210, 0)' }}>500,000¢</span>,
                    <img src="/images/commodities/crew.png" alt="Crew" className="h-10 w-10" /> <span style={{ color: 'rgb(255, 210, 0)' }}>1000</span>,
                    <img src="/images/commodities/heavymachinery.png" alt="Heavy machinery" className="h-10 w-10" /> <span style={{ color: 'rgb(255, 210, 0)' }}>250</span>,
                    <img src="/images/commodities/metals.png" alt="Metals" className="h-10 w-10" /> <span style={{ color: 'rgb(255, 210, 0)' }}>1000</span>,
                    <img src="/images/commodities/raremetals.png" alt="Rare metals" className="h-10 w-10" /> <span style={{ color: 'rgb(255, 210, 0)' }}>250</span>
                </div>
            </section>
        </div>
    );
}
