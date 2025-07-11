// 🚀 Steps to use this script via a HTTP server in your wordpress website [Teste
//      with my Docker Setup]:
// 1. Start the server via --- serve -l 8081 --cors
// 2. To insert this script in your wordpress, simply add WPCode plugin and add
//    a "Add Your Custom Code (New Snippet)" snippet with following code: 
//      <script src="http://localhost:8081/scripts/a.js" > </script>
// 3. Make sure you turn on the toggle on to activate and click on "Update" button.
// - For production usage - you can make use of files hosted on github.com/myrepo/myfile.js


import { sayHello } from './helper.js';

// & Learn: If js changes do not update in browser then for ONCE use cmd+shift+r to hard reload page.
alert("scripts/a.js via HTTPS!");

sayHello();