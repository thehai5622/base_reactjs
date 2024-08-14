import { Helmet } from "react-helmet"
import { Fragment } from "react/jsx-runtime"

function PageNotFound() {
  return (
    <Fragment>
      <Helmet>
        <title>Không tìm thấy</title>
        <meta name="description" content="Không tìm thấy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
    </Fragment>
  )
}

export default PageNotFound