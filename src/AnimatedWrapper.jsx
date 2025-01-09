import React from 'react';
import { motion } from 'framer-motion';

const AnimatedWrapper = ({ children }) => {
  const wrapWithAnimation = (element, key) => {
    // Define animation properties
    const animationProps = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
    };

    return (
      <motion.div {...animationProps} key={key}>
        {element}
      </motion.div>
    );
  };

  const processChildren = (node) => {
    if (!node) return null;

    // Handle arrays or fragments
    if (Array.isArray(node)) {
      return node.map((child, index) => processChildren(child));
    }

    if (React.isValidElement(node)) {
      const { type, props } = node;

      // Target only h1, h2, h3, and img elements
      if (['h1', 'h2', 'h3', 'img'].includes(type)) {
        return wrapWithAnimation(node, props.key || `${type}-${Math.random()}`);
      }

      // Recursively process children
      if (props?.children) {
        const updatedProps = {
          ...props,
          children: processChildren(props.children),
        };
        return React.cloneElement(node, updatedProps);
      }

      return node;
    }

    return node;
  };

  return <>{processChildren(children)}</>;
};

export default AnimatedWrapper;
