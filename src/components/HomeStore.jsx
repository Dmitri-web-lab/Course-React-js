import { configureStore } from '@reduxjs/toolkit';

// reducer
const reducer = (state = 'white', action) => {
    switch (action.type) {
        case 'DARK':
            return 'black';
        case 'LIGHT':
            return 'white';
        default:
            return state;
    };
};

// Создание хранилища (store)
const HomeStore = configureStore({
    reducer: reducer,
});

export default HomeStore;