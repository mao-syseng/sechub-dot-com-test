## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Brand colors

Brand colors are defined in `src/styles/global.css` using Tailwind CSS 4's
`@theme` directive. Keep that file as the single source of truth.

- Primary: `--color-primary` (`#000064`). Use `bg-primary`, `text-primary`,
  `border-primary`, or `focus-visible:outline-primary`.
- Secondary / accent: `--color-accent` (`#ed7d31`). Use `bg-accent`,
  `text-accent`, or `border-accent`.

Prefer these named utilities over hardcoded hex values or default palette colors
when expressing the brand. Standard variants and opacity modifiers work, for
example `hover:bg-primary/90` and `bg-accent/10`. In custom CSS, use
`var(--color-primary)` or `var(--color-accent)`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
