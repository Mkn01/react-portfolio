const MainHeader = (props) => {
  const header = props.header;
  console.log(props.header);
  return (
    <div class="pageHeader">
      <h1>{Header}</h1>
      <p>page info</p>
    </div>
  );
};

export default MainHeader;
