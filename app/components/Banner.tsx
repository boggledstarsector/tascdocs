import Link from "next/link";

export default function Banner() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <Link href="/">
                <img
                    src="/images/banner.png"
                    alt="Banner"
                    className="w-full h-auto block cursor-pointer"
                />
            </Link>
        </div>
    );
}
