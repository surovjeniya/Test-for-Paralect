import './Pagination.scss'

export const Pagination = ({reposPerPage,totalRepos,paginate}) => {
    
    const pageNumbers = []
    for(let i= 1; i<= Math.ceil(totalRepos/reposPerPage);i++) {
        pageNumbers.push(i)
    }
    
    return (
        <ul className='pagination'>
            {
              pageNumbers.map(item => (
                  <li key={item}>
                      <button 
                        className='pagination_control'
                        onClick={(e) => {
                          document.querySelectorAll('.pagination_control').forEach(item => item.classList.remove('active'))
                          e.target.classList.toggle('active')
                          paginate(item)
                          window.scroll(0,0)
                      }}>
                          {item}
                      </button>
                  </li>
              ))  
            }
        </ul>
    )
}