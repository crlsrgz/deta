export default function DetailWrapper({ productPath }) {
  console.log(productPath);
  return (
    <div id="detail-wrapper" className="">
      <p>TEst prod</p>
      <iframe
        src={`${productPath}/index.html`}
        title="Mini Product"
        width="500px"
        height="500px"
        style={{ border: 'none' }}
      />
    </div>
  );
}
