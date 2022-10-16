const { MOCK_VIDEO } = require('../models/Video');

const getAllVideos = () => {
    return MOCK_VIDEO;
}

module.exports = { getAllVideos }