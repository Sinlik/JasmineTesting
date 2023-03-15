describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
    submitServerInfo()
    serverNameInput.value = "bob"
    submitServerInfo()
    serverNameInput.value = "sally"
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(3);
    expect(allServers['server' + 1].serverName).toEqual('Alice');
  });

  afterEach(function() {
    // teardown logic
    serverNameInput.remove()
  });
});

it('should display server ID', function()
{
  expect(serverId).toEqual(Object.keys(allServers).length)
})

describe('should set average to paymentTotal/amount', function ()
{
  paymentTotal = 100;

  it('should update the server table', function()
  {
    expect(paymentTotal/ Object.keys(allServers).length).toEqual(100/3)
  });
});