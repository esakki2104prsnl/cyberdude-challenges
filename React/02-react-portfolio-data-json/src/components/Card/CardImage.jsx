const CardImage = ({ link }) => {
  return (
    <div>
      <img className="w-full  object-cover rounded-t" src={link} />
    </div>
  );
};

export default CardImage;
