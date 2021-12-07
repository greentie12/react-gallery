const Photo = ({ imgArray }) => {
  return (
    <ul>
      {imgArray.map((img) => (
        <li key={img.id}>
          <img
            src={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`}
            alt=""
          />
        </li>
      ))}
    </ul>
  );
};

export default Photo;
