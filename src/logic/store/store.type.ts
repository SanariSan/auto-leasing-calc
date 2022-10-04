import type { Store } from './store';

// Infer the `RootState` and `AppDispatch` types from the store itself
type TRootState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type TAppDispatch = typeof Store.dispatch;
type TStore = typeof Store;

export type { TRootState, TAppDispatch, TStore };
