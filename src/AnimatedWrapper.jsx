import React from 'react';
import { motion } from 'framer-motion';

const AnimatedWrapper = ({ children }) => {
  const wrapWithAnimation = (element, key) => {
    // Define animation properties
    const animationProps = {
      initial: { opacity: 0, x: -50 },
      whileInView: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
      viewport: { once: true, amount: 0.5 }, // Trigger animation when 50% of the element is in view
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

      // Target specific elements: h1, h2, h3, img, and icons (e.g., from lucide-react or @heroicons/react)
      const isIcon =
        typeof type === 'function' &&
        (type.name?.toLowerCase().includes('icon') ||
          type.displayName?.toLowerCase().includes('icon'));

      if (['h1', 'h2', 'h3', 'img','icons','icon'].includes(type) || isIcon) {
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
