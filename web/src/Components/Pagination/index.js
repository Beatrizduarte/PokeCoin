import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { usePagination, DOTS } from './usePagination';
import { Container, List } from './styles'

const Pagination = ({
    onPageChange,
      totalPokemon,
      siblingCount = 3,
      currentPage,
      pokemonPerPage,
}) => {
  
    const paginationRange = usePagination({
      currentPage,
      totalPokemon,
      siblingCount,
      pokemonPerPage
    });
  
    if (currentPage === 0 || paginationRange.length < 2) {
      return null;
    }
  
    const onNext = () => {
      onPageChange(currentPage + 1);
    };
  
    const onPrevious = () => {
      onPageChange(currentPage - 1);
    };
  
    let lastPage = paginationRange[paginationRange.length - 1];

    return (
      <Container>
            <List
          isDisable={currentPage === 1}
          onClick={onPrevious}
        >
            <RiArrowDropLeftLine />
        </List>
        {paginationRange.map(pageNumber => {
          if (pageNumber === DOTS) {
            return <List className="dots" >
                <BiDotsHorizontalRounded />
            </List>;
          }
  
          return (
            <List
              isSelected={pageNumber === currentPage}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </List>
          );
        })}
        <List
          isDisable={currentPage === lastPage}
          onClick={onNext}
        >

          <RiArrowDropRightLine />
        </List>
      </Container>
    );
  };
  
  export default Pagination;