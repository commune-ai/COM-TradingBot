import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-200 dark:border-gray-700">
      <button
        type="button"
        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <svg
          data-accordion-icon
          className={`w-3 h-3 rotate-${isOpen ? '180' : '0'} shrink-0`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="p-5 border border-b-0 border-gray-200 dark:border-gray-700"
          aria-labelledby={title}
        >
          <p className="mb-2 text-gray-500 dark:text-gray-400">{content}</p>
        </div>
      )}
    </div>
  );
};

export const Accordion: React.FC = () => {
  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <AccordionItem
        title="What is Commune and its philosophy?"
        content="Commune is a censorship resistant peer to peer protocol leveraging cryptoeconomic incentives for the decentralized creation and access of machine intelligence and other digital commodities. Commune follows a radically OpenSource and modular design philosophy centered around cooperation, sharing and reusability of resources."
      />
      <AccordionItem
        title="What is current token emissions?"
        content="It's 250k tokens/daily."
      />
      <AccordionItem
        title="What is current token emissions?"
        content="It's 250k tokens/daily."
      />
      <AccordionItem
        title="What is total supply of COM tokens?"
        content="It's 1 billion."
      />
      <AccordionItem
        title="What is roadmap of Commune"
        content="Commune is emerging in a decentralised manner, meaning it is formed by the contributions of many different independent people who commit code or try to convince the community to implement an idea. This makes the conventional concept of a roadmap unapplicable. However the goal for the community will always be to increase the prosperity of the protocol by improving its mechanisms and the value produced by miners and validators, while keeping it as fair and decentralized as possible. So at large we will likely always work towards that direction."
      />
      <AccordionItem
        title="How can I help?"
        content="There are many creative ways to help Commune, join our Discord and start a discussion!"
      />
    </div>
  );
};