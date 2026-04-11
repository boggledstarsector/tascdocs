import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
}

export default function Button({ text, href }: ButtonProps) {
  const content = (
    <div
      className="relative w-full max-w-none sm:max-w-[270px]"
      style={{
        aspectRatio: '512 / 128',
        backgroundImage: 'url(/images/button.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <span
          style={{
            color: 'rgb(5, 250, 250)',
            fontFamily: "'Space Grotesk', 'Trebuchet MS', Arial, sans-serif",
            fontSize: 'clamp(12px, 4vw, 28px)',
            fontWeight: '600',
            lineHeight: '1',
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="w-full max-w-none sm:max-w-[270px]">
        {content}
      </Link>
    );
  }

  return content;
}
