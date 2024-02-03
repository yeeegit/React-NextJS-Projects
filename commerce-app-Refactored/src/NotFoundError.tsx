interface NotFoundErrorProps {}

const NotFoundError: React.FC<NotFoundErrorProps> = () => {
  return (
    <div style={{textAlign:'center' , display:'flex', flexWrap:'wrap' ,flexDirection:'column',marginTop:'2rem',width:'100%'}}>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFoundError;