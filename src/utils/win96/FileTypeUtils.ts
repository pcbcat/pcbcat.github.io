import { FileTypeId } from '../../types/FileType';

export const getFileTypeIdFromFileExtension = (
  fileExtension: string
): FileTypeId => {
  if (['jpg', 'png'].includes(fileExtension)) return 'bmpFile';
  return 'notepadDoc';
};
