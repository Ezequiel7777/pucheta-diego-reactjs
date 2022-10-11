import { Link } from "react-router-dom";
const ListContainer = ( {id, name, description}) => {
  return (
    <Link to={`/planes-alimentarios/veganos/${id}`}>
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div>
        <img className="rounded-t-lg" src={`assets/nutricion-deportiva.jpg`} alt="" />
    </div>
    <div className="p-5">
        <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <div className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
        </div>
    </div>
</div>
</Link> 
  );
};

export default ListContainer;
