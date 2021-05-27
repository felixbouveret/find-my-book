export default function ({ $axios, app }) {
  const auth = app.$cookies.get('auth');

  if (auth) {
    $axios.setToken(auth.token, 'Bearer');
  }

  $axios.onError((error) => {
    // console.table(error);
    throw error.response;
  });
}
