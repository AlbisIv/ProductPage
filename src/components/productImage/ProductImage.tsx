const ProductImage = (props: any) => {
  const { data } = props;
  return (
    <img src={`${data}`} alt="" />
  );
};

export default ProductImage;
