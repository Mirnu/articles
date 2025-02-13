export const routes = {
    home: () => "/",
    signIn: () => `/sign-in`,
    signUp: () => `/sign-up`,
    article: (id: string) => `/article/${id}`,
};
