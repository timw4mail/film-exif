import {ExifTool} from 'exiftool-vendored';
const exiftool = new ExifTool();

/**
 * Get the EXIF data from the specified image path
 *
 * @param {string} imgPath
 * @return {Promise<Tags>}
 */
function getExifTags (imgPath) {
	return exiftool.read(imgPath);
}

export {
	getExifTags,
};
