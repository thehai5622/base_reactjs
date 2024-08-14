import { Fragment } from "react/jsx-runtime"
import { Helmet } from 'react-helmet';

function Login() {
  return (
    <Fragment>
      <Helmet>
        <title>Đăng nhập</title>
        <meta name="description" content="Đăng nhập" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
    </Fragment>
  )
}

export default Login