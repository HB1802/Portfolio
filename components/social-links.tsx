export function SocialLinks() {
  return (
    <footer className="py-8 border-t border-neutral-800">
      <div className="flex justify-center space-x-8">
        <a
          href="https://github.com/HB1802"
          className="text-sm text-neutral-400 hover:text-foreground transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/harshit-bisht-a90ab4246/"
          className="text-sm text-neutral-400 hover:text-foreground transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKEDIN
        </a>
        <a
          href="https://x.com/Harshit92053261"
          className="text-sm text-neutral-400 hover:text-foreground transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </a>
      </div>
    </footer>
  );
}