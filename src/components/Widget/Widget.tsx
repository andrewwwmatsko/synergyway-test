export type WidgetProps = {
  data: any;
};

const Widget: React.FC<WidgetProps> = ({ data }) => {
  console.log('🚀 ~ data:', data);
  return (
    <div>
      <h1>Widget</h1>
    </div>
  );
};

export default Widget;
