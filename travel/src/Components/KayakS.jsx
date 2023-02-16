import react from 'react';
import '../App.css';

const KayakS = () => {
return (
    <div>
      <script type="text/JavaScript" src="https://www.kayak.com/affiliate/widget-v2.js"></script>
    
{  KAYAK.embed({
container: containerElem, /* more options */
})}
    </div>
  );
}
export default KayakS;