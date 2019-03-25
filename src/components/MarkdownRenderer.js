import * as React from "react";
import * as ReactMarkdown from "react-markdown";
import MathJax from "react-mathjax2";
import RemarkMathPlugin from "remark-math";

const MarkdownRender = (props) => {
  const newProps = {
    ...props,
    plugins: [
      RemarkMathPlugin,
    ],
    // renderers: {
    //   ...props.renderers,
    //   math: (props) => <MathJax.Node>{props.value}</MathJax.Node>,
    //   inlineMath: (props) => <MathJax.Node inline>{props.value}</MathJax.Node>
    // }
  };

  const renderers = {
      math: (props) => <div><MathJax.Node>{props.value}</MathJax.Node></div>,
      inlineMath: (props) => <MathJax.Node inline>{props.value}</MathJax.Node>
  }
  console.log(props);
  return (
    <MathJax.Context input="tex">
      <ReactMarkdown renderers={renderers} {...newProps} />
    </MathJax.Context>
  );
};

export default MarkdownRender;