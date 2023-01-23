import { useRouteError } from "react-router-dom";

const Error = () => {

  const { statusText, status } = useRouteError();

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexFlow: 'column'
    }}>

      <h1>Oops!</h1>
      <h3>Something went wrong.</h3>
      <p>{`${statusText}: ${status}`}</p>
    </div>
  );
}

export default Error
