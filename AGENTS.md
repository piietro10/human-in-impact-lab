<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture & design decisions

- Brand tokens live in `src/styles.css` (`@theme inline` + `:root`): palette is locked to #000000 / #2F80FF / #FFFFFF on a dark surface, font is Inter only. Never hardcode raw colors in components — use semantic tokens (`bg-ink`, `text-primary`, `bg-tint`, …).
- The Human In logo uses the official cropped bitmap in `src/assets/hi-logo.png`, rendered through `src/components/hi-logo.tsx`. Do not replace it with a redrawn or generated approximation.
- Headlines end with a blue dot (`text-primary` "`.`" or the `headline-dot` utility) — recurring motif from the logo's blue dot on the "i".
- Contact form uses a `mailto:` submit with placeholder `contato@humanin.com.br` until the user provides the real address.
