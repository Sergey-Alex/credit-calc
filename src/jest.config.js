module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
    testEnvironment: 'jsdom',
};
