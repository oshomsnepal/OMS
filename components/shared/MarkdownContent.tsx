import ReactMarkdown from "react-markdown";

export function MarkdownContent({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        h2: ({ children: heading }) => <h2 className="mb-5 mt-10 text-3xl text-[var(--forest)] first:mt-0">{heading}</h2>,
        h3: ({ children: heading }) => <h3 className="mb-4 mt-8 text-2xl text-[var(--forest)]">{heading}</h3>,
        p: ({ children: paragraph }) => <p className="mb-5 leading-8 text-[var(--muted)] last:mb-0">{paragraph}</p>,
        ul: ({ children: list }) => <ul className="mb-6 ml-5 list-disc space-y-2 text-[var(--muted)] marker:text-[var(--terracotta-bright)]">{list}</ul>,
        ol: ({ children: list }) => <ol className="mb-6 ml-5 list-decimal space-y-2 text-[var(--muted)] marker:font-semibold marker:text-[var(--terracotta-bright)]">{list}</ol>,
        blockquote: ({ children: quote }) => <blockquote className="my-8 border-l-2 border-[var(--gold)] pl-6 font-serif text-2xl italic leading-relaxed text-[var(--forest)]">{quote}</blockquote>,
        a: ({ href, children: link }) => <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noopener noreferrer" : undefined} className="text-[var(--terracotta-bright)] underline decoration-[var(--gold)] underline-offset-4">{link}</a>,
        strong: ({ children: strong }) => <strong className="font-semibold text-[var(--forest)]">{strong}</strong>,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
