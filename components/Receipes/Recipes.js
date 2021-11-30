import Nav from './Nav.js';
import NavItem from './NavItem.js';
import List from './List.js';
import ListItem from './ListItem.js';

export default function Recipes({ recipes }) {
  return (
    <div className="divide-y divide-gray-100">
      <Nav>
        <NavItem href="/featured" isActive>
          Featured
        </NavItem>
        <NavItem href="/popular">Popular</NavItem>
        <NavItem href="/recent">Recent</NavItem>
      </Nav>
      <List>
        {recipes.map((recipe) => (
          <ListItem key={recipe.id} recipe={recipe} />
        ))}
      </List>
    </div>
  );
}
