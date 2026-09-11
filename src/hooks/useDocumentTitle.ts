import { useEffect } from 'react';

export function useDocumentTitle(title: string) {
  useEffect(() => {
    const defaultTitle = 'ZYQITEK';
    document.title = title ? `${title} | ${defaultTitle}` : defaultTitle;
  }, [title]);
}
