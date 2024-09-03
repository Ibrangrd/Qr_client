const Pagination = ({ pageNumber, setPageNumber, cardToShow, cardPerPage }) => {
    const totalPages = cardToShow.length / cardPerPage;
  
    console.log(totalPages);
    
  
    const handlePageClick = (page) => {
      setPageNumber(page);
    };
  
    return (
      <div className="flex md:justify-center mt-4 overflow-auto justify-start ">
        <div className="join">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageClick(index + 1)}
              className={`px-4 py-2 mx-1 border rounded ${
                pageNumber === index + 1
                  ? "bg-pink-600 text-white"
                  : "bg-white text-pink-600"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default Pagination;