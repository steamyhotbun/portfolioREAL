import './Container.scss';

function Container({ children, className = '', style = {} }) {
  return (
    <div className={`custom-container ${className}`} style={style}>
      {children}
    </div>
  );
}

export default Container;
