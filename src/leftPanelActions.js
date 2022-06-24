const searchBar = () => {
    const searchBar = document.getElementById('navSearchBar')

    searchBar.addEventListener('click', event => {console.log(event.target.id)})
}

const leftPanelActions = () => {
    searchBar()
}

export {leftPanelActions}