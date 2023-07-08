import { styled } from "@mui/material/styles";

export const ArticleGrid = styled("div")`
  margin: 4.8rem auto;
  max-width: 120rem;
  display: grid;

  grid-template-columns: 1fr 28rem;
  gap: 6.4rem;
`;

export const Article = styled("article")``;

export const StoryHeadingBox = styled("div")`
  margin-bottom: 5.6rem;
`;

export const StoryHeading = styled("h1")`
  font-size: 4.8rem;
  margin-bottom: 1.4rem;
  line-height: 1.3;
`;

export const StoryByLine = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.4rem;
`;

export const StoryContent = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  > * {
    font-size: 2rem;
    font-weight: 400;
  }

  /* in-line elements */

  /* all code elements */
  code {
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
    font-size: inherit;
  }

  /* Code in text */
  p > code,
  li > code {
    background: #333;
    word-wrap: break-word;
    box-decoration-break: clone;
    padding: 0.1rem 0.3rem 0.2rem;
    border-radius: 0.2rem;
  }

  a {
    &:link,
    &:visited {
      color: ${({ theme }) => theme.palette.primary.main};
    }

    &:active,
    &:hover {
      text-decoration: underline;
    }
  }

  /* block elements */

  h2 {
    /* font-size: 3.9rem; */
    font-weight: 700;
  }

  h3 {
    /* font-size: 3rem; */
    font-weight: 600;
  }

  p {
    white-space: pre-line;
    line-height: 1.6;
  }

  figure {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    img {
      max-width: 100%;
    }

    figcaption {
      align-self: center;
      font-size: 1.6rem;
      color: rgb(255, 255, 255, 0.75);
    }
  }

  blockquote {
    padding: 1.8rem;
    line-height: 1.4;
    background-color: #333;
    font-style: italic;
  }

  ul,
  ol {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    margin-left: 0;
    padding-left: 3.6rem;
  }

  ul {
    > li {
      list-style-type: disc;
    }
  }
`;
