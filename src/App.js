
import Booklist from "./components/booklist";
import CartButton from "./components/buttons/cartButton";
import PreviewButton from "./components/buttons/previewButton";
import Shirtlist from "./components/shirtlist";
const App = () => {
  return (
    <div>
      <h1 style={{textAlign : 'center'}}>Amazon Best Sellers</h1>
      < Booklist />
      <h1 style={{textAlign : 'center'}}>Branded T-Shirts</h1>
      < Shirtlist />
    </div>
  );
}

export default App;