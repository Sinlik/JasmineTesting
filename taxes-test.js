it("should calculate high tax bracket", function ()
{
    expect(calculateTaxes(50000)).toEqual(12500)
    expect(calculateTaxes(100000)).toEqual(25000)
})
it("should calculate low tax bracket", function ()
{
    expect(calculateTaxes(30000)).toEqual(4500)
    expect(calculateTaxes(10000)).toEqual(1500)
    expect(calculateTaxes(1000)).toEqual(150)
    expect(calculateTaxes(0)).toBe(0)
})
it("should reject invalid income", function ()
{
    expect(() => calculateTaxes('serf')).toThrowError()
    expect(() => calculateTaxes([])).toThrowError('array')
    expect(() => calculateTaxes(true)).toThrowError()
})


it("should remove duplicates from array", function ()
{
    expect(removeDup([1, 1, 2, 2, 3, 4])).toEqual([1, 2, 3, 4])
})

it("should remove duplicates from string", function ()
{
    expect(removeDup('hello')).toEqual('helo')
    expect(removeDup('hello')).toBeInstanceOf(String)
})

it("should remove value from array", function()
{
    expect(remove([1,2,3,4,5,6], 6)).not.toContain(6)
})