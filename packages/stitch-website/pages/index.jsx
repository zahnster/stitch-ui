import { Button } from "@stitch-ui/button";

const IndexPage = () => (
  <div>
    <h1>Welcome to the future Stitch UI Website.</h1>
    <p>
      We are excited you found us. While we're a simple little POC at the
      moment, we have big ambitions.
    </p>
    <p>
      For now, we're excited to simply present our first component. It's a React
      button, styled with a converted web component CSS file and applied through
      Styled JSX to achieve a web-component like scoping.
    </p>
    <p>
      It has certain brand expression properties, such as colors and spacing,
      expressed through CSS variables, which can be applied at an application
      layer and customized extensively.
    </p>
    <Button>this is a @stitch-ui/button</Button>

    <p>Stay tuned for future updates!</p>
  </div>
);

export default IndexPage;
