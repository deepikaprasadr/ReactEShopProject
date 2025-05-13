import {Link} from 'react-router-dom';

//dummy component to generate inside the list
//receive data using the parent using props
const Category = (props) => {
  const { id, name, image } = props.data;
  return (
    <div class="col-sm-3">
      <div class="card">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <Link to="/products" class="btn btn-primary btn-block" >
            Select
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Category;
