export function SocialLinks() {
  return (
    <footer className="py-8 border-t border-neutral-800">
      <div className="flex justify-center space-x-8">
        <a
          href="https://github.com/yourusername"
          className="text-sm text-neutral-400 hover:text-foreground transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          className="text-sm text-neutral-400 hover:text-foreground transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKEDIN
        </a>
        <a
          href="https://twitter.com/yourusername"
          className="text-sm text-neutral-400 hover:text-foreground transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          TWITTER
        </a>
      </div>
    </footer>
  );
}