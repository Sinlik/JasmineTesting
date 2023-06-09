let serverNameInput = document.getElementById('serverName');
let serverForm = document.getElementById('serverForm');

let serverTbody = document.querySelector('#serverTable tbody');

let allServers = {};
let serverId = 0;

serverForm.addEventListener('submit', submitServerInfo);

// create server object and add to allServers, update html and reset input
function submitServerInfo(evt) {
  if (evt) evt.preventDefault(); // when running tests there is no event
  let serverName = serverNameInput.value;
  console.log(`serverName = ${ serverName}`)
  if (serverName !== '') {
    console.log(`serverName is filled`)
    serverId++;
    console.log(`serverId = ${serverId}`)
    allServers['server' + serverId] = { serverName };
    console.log(`allServers = ['server' + ${serverId}] = { ${serverName} }`)
    updateServerTable();
    serverNameInput.value = '';
  }
}

// Create table row element and pass to appendTd function with input value
function updateServerTable() {
  serverTbody.innerHTML = '';

  for (let key in allServers) {
    let curServer = allServers[key];
    console.log(`curServer = ${Object.keys(allServers)}`)

    let newTr = document.createElement('tr');
    newTr.setAttribute('id', key);

    let tipAverage = sumPaymentTotal('tipAmt') / Object.keys(allServers).length;
    console.log(`Object.keys(allServers).length = ${Object.keys(allServers).length}`)

    appendTd(newTr, curServer.serverName);
    appendTd(newTr, '$' + tipAverage.toFixed(2));

    serverTbody.append(newTr);
  }
}

