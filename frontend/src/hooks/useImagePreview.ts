import * as React from 'react';

type ImagePreview = { preview: string; clearPreview: VoidFunction };

/**
 * A hook that consumes the file list out of a form file input
 * and returns a base64 string representation of that input
 * handy for image preview components
 *
 * @param files - FileList | null
 * @param initialValue - string
 * @returns ImagePreview
 */
const useImagePreview = (
  files: FileList | null,
  initialValue: string = '',
): ImagePreview => {
  const [preview, setPreview] = React.useState<string>(initialValue);
  const file = React.useMemo(() => new FileReader(), []);

  const clearPreview = React.useCallback(() => setPreview(''), []);

  React.useEffect(() => {
    if (initialValue) setPreview(initialValue);
    if (files?.[0]) file.readAsDataURL(files[0]);

    file.onload = () => {
      setPreview((file?.result as string) ?? '');
    };

    return () => clearPreview();
  }, [files, file, initialValue, clearPreview]);

  return { preview, clearPreview };
};

export default useImagePreview;
