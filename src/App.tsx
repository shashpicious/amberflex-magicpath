import { useMemo } from 'react';
import { Container } from './settings/types';
import { NavigationMenu } from './components/generated/NavigationMenu';
// %IMPORT_STATEMENT

let container: Container = 'centered';

function App() {

  const generatedComponent = useMemo(() => {
    // THIS IS WHERE THE TOP LEVEL GENRATED COMPONENT WILL BE RETURNED!
    return <NavigationMenu />; // %EXPORT_STATEMENT%
  }, []);

  if (container === 'centered') {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">
        {generatedComponent}
      </div>
    );
  } else {
    return generatedComponent;
  }
}

export default App;