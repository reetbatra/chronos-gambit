import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

type FAQItemProps = {
  question: string;
  answer: string;
};

const faqData: FAQItemProps[] = [
  {
    question: "What is Chrono's Gambit?",
    answer: "Chrono's Gambit is a decentralized prediction market platform built on the Aptos blockchain. It allows users to create, participate in, and resolve prediction markets on various topics, including politics, climate change, sports, and more, all while enjoying low transaction fees and a user-friendly experience."
  },
  {
    question: "How does Chrono's Gambit work?",
    answer: "Chrono's Gambit leverages the power of blockchain technology to decentralize prediction markets. Users can create markets by defining an event and possible outcomes, then other users can place predictions on those outcomes. The platform uses smart contracts to automate the resolution of these markets, ensuring a fair and transparent process."
  },
  {
    question: "What makes Chrono's Gambit different from other prediction markets?",
    answer: "Chrono's Gambit stands out because of its low transaction fees, thanks to the efficiency of the Aptos blockchain. Additionally, our platform offers a fully decentralized experience, removing the need for intermediaries and ensuring complete transparency and security for all users."
  },
    {
      question: "What types of predictions can I make on Chrono's Gambit?",
      answer: "You can make predictions on a wide range of topics, including political elections, climate change scenarios, sports events, and other significant occurrences. We continually expand our categories to include new and exciting areas of interest."
    },
    {
      question: "How do I start using Chrono's Gambit?",
      answer: "To start using Chrono's Gambit, you'll need a compatible cryptocurrency wallet. Simply connect your wallet to our platform, deposit some funds, and start creating or participating in prediction markets."
    },
    {
      question: "What cryptocurrencies are supported on Chrono's Gambit?",
      answer: "Chrono's Gambit primarily supports the native Aptos token (APT) for transactions on our platform. We may expand support to other cryptocurrencies in the future."
    },
    {
      question: "How are outcomes of prediction markets resolved?",
      answer: "Outcomes are resolved automatically through smart contracts using trusted data oracles that provide real-world data. This ensures a fair and transparent outcome for every market on the platform."
    },
    // {
    //   question: "Are there any fees for using Chrono's Gambit?",
    //   answer: "We strive to keep fees as low as possible. While there are minimal transaction fees associated with placing predictions or creating markets, these are significantly lower than those on traditional centralized platforms, thanks to the Aptos blockchain."
    // },
    // {
    //   question: "Is Chrono's Gambit safe to use?",
    //   answer: "Yes, Chrono's Gambit is built on the secure Aptos blockchain and uses smart contracts to automate processes, reducing the risk of human error or manipulation. We also use trusted oracles to ensure accurate outcome resolution. However, as with any decentralized platform, it's important to understand the risks and use best practices to keep your assets secure."
    // },
    // {
    //   question: "Can I withdraw my funds at any time?",
    //   answer: "Yes, you can withdraw your funds at any time, provided they are not currently locked in an active prediction market. Withdrawals are processed through your connected wallet."
    // },
    // {
    //   question: "What happens if a prediction market is unresolved?",
    //   answer: "If a prediction market remains unresolved due to an issue with the data source or oracle, the funds will be returned to the participants. We strive to ensure all markets are resolved fairly and transparently."
    // },
    // {
    //   question: "How can I provide feedback or report a problem?",
    //   answer: "We welcome user feedback to improve our platform. You can provide feedback or report any problems through our contact page or directly via email at support@chronosgambit.com."
    // },
    // {
    //   question: "Is Chrono's Gambit available in all countries?",
    //   answer: "Chrono's Gambit is accessible globally, but users should ensure that participating in prediction markets is legal in their jurisdiction. Users are responsible for understanding the legal requirements in their region."
    // },
    // {
    //   question: "Can I create my own prediction market?",
    //   answer: "Coming soon!"
    // },
    // {
    //   question: "How can I stay updated with Chrono's Gambit news and updates?",
    //   answer: "You can stay updated by regularly checking our website for the latest news, updates, and upcoming features."
    // }
  ];

const FAQ = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 font-jbm text-white" color={"brand.secondary"}>
      <h1 className="text-2xl font-jbm mb-4">Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 mb-4">
      <div
        className="flex items-center justify-between py-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-bold">{question}</p>
        {isOpen ? (
          <FaChevronUp className="text-gray-600" />
        ) : (
          <FaChevronDown className="text-gray-600" />
        )}
      </div>
      {isOpen && <p className="text-white-700 mt-2 mb-2">{answer}</p>}
    </div>
  );
};

export default FAQ;


