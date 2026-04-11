import Button from "./Button";

export default function ButtonFooter() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-[270px_270px] sm:justify-center lg:grid-cols-4 gap-4 px-[2.5%] py-8 place-items-center">
                <Button text="privacy policy" href="/privacy-policy" />
                <Button text="terms & conditions" href="/terms-and-conditions" />
                <Button text="about us" href="/about-us" />
                <Button text="contact us" href="/contact-us" />
            </div>
        </div>
    );
}
