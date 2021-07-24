function StitchWebsite({ Component, pageProps }) {
  return (
    <div class="app">
      <Component {...pageProps} />

      <style jsx global>{`
        :root {
          /* color */
          --color-brand-contrast-1: #cf262e;
          --color-brand-contrast-2: #ad292a;
          --color-brand-contrast-3: #841c1d;

          --color-neutral-base-1: #fff;

          /* radii */
          --radius-x-small: 2px;
          --radius-small: 4px;
          --radius-medium: 6px;
          --radius-large: 10px;
          --radius-x-large: 16px;

          /* spacing */
          --spacing-x-small: 3px;
          --spacing-small: 6px;
          --spacing-medium: 9px;
          --spacing-large: 15px;
          --spacing-x-large: 24px;
        }

        html {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          background: #dedede;
        }

        p {
          line-height: 1.5;
        }

        .app {
          margin: 1rem auto;
          max-width: 620px;
          padding: 0 1rem 1rem;
          border: 1px solid #444;
          border-radius: 5px;
          background: #fff;
        }
      `}</style>
    </div>
  );
}

export default StitchWebsite;
