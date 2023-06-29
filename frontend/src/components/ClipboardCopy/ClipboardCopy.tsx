import { useState } from 'react';
import styled from 'styled-components';
import Button from 'components/Button/Button';

interface ClipboardProps {
  copyText: string;
}
const ClipboardCopy = ({ copyText }: ClipboardProps) => {
  const [isCopied, setIsCopied] = useState(false);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(text);
    }
    return document.execCommand('copy', true, text);
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ClipboardCopyButton typeFill="secondary" onClick={handleCopyClick}>
      <span>{isCopied ? 'Copied!' : 'Copy'}</span>
    </ClipboardCopyButton>
  );
};

const ClipboardCopyButton = styled(Button)`
  width: 80px;
  height: 40px;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
`;
export default ClipboardCopy;
