const Nav = ({ onChange }) => {
  const redir = (e) => {
    onChange(e.target.innerText);
  };

  return (
    <nav className="main-nav">
      <ul>
        <li>
          <button onClick={redir}>Football</button>
        </li>
        <li>
          <button onClick={redir}>Hiking</button>
        </li>
        <li>
          <button onClick={redir}>Skateboard</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
