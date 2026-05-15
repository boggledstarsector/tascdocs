import Button from "./Button";

export default function NavigationHeader() {
    return (
        <div className="w-full lg:max-w-[1200px] lg:mx-auto">
            <div className="md:hidden px-[2.5%] py-3 flex justify-center">
                <Button text="documentation" href="/docs" />
            </div>
            <div className="hidden md:grid md:grid-cols-[270px_270px] md:justify-center lg:grid-cols-4 gap-4 px-[2.5%] py-3 place-items-center">
                <Button text="download" href="https://github.com/boggledstarsector/tasc/raw/main/release/Terraforming%20and%20Station%20Construction.zip" />
                <Button text="documentation" href="/docs" />
                <Button text="forum thread" href="https://fractalsoftworks.com/forum/index.php?topic=17094.0" />
                <Button text="github" href="https://github.com/boggledstarsector/tasc" />
            </div>
        </div>
    );
}
