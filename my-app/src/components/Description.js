const Description = ({ url, name, tag, location }) => {
  return (
    <div class='description'>
      <img src={url} alt='User avatar' class='avatar' />
      <p class='name'>{name}</p>
      <p class='tag'>{tag}</p>
      <p class='location'>{location}</p>
    </div>
  );
};
export default Description;
