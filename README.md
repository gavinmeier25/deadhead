# Deadhead Website

This is a site using [Tailwind CSS](https://tailwindcss.com) in a Next.js project.

## Deploy your own

Deploy the example using [ZEIT Now](https://zeit.co/now):

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/new/project?template=https://github.com/zeit/next.js/tree/canary/examples/with-tailwindcss)

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download)):

```bash
now
```

## Notes

This setup is a basic starting point for using [Tailwind CSS](https://tailwindcss.com) with Next.js. This example also includes the following [PostCSS](https://github.com/postcss/postcss) plugins:

- [postcss-preset-env](https://preset-env.cssdb.org/) - Adds stage 2+ features and autoprefixes
- [purgecss](https://github.com/FullHuman/purgecss) - Removes unused CSS

## Limitations

### Dynamically generated class strings will be purged

Purgecss takes a very straightforward approach to removing unused CSS. It simply searches an entire file for a string that matches a regular expression. As a result, class strings that are dynamically created in a template using string concatenation will be considered unused and removed from your stylesheet. Tailwind CSS addresses this problem in more detail in [their documentation](https://tailwindcss.com/docs/controlling-file-size#writing-purgeable-html).
