import './styles.css';

const SearchBar = () => {
  return (
    <>
      <input type="text" id="input-search" className="dm-guide-input-search" />

      <div className="dm-guide-search-icon">
        <img
          src="https://raw.githubusercontent.com/DavidMoraes-DEV/ProjectsAssets/main/winfree/lupa.png"
          alt="Pesquisar Cassinos"
        />
      </div>
    </>
  );
};

export default SearchBar;
