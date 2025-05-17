export type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container mx-auto px-4 py-8">{children}</div>;
};

export default Container;
