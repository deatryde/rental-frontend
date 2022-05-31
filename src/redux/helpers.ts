const matchType = (type: string) => /@(.*)\/(.*)(?:_(REQUEST|SUCCESS|ERROR))/.exec(type);
const isLoading = (types: any[]) => (state: { http: { loading: string | string[] } }) =>
  types.some((type: any) => {
    const match = matchType(type);
    if (!match) {
      return false;
    }
    return state.http.loading.indexOf(match[2]) !== -1;
  });

export default { matchType, isLoading };
