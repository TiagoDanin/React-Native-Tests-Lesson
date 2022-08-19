/* index.spec.tsx */
describe('Meu Primeiro Test', () => {
  beforeEach(() => {
    console.log('log', 'Antes');
    /* *** */
  });

  afterEach(() => {
    console.log('log', 'Depois');
    /* *** */
  });

  it('Test 1', async () => {
    console.log('log', 'Test 1');
    /* *** */
  });

  it('Test 2', async () => {
    console.log('log', 'Test 2');
    /* *** */
  });
});

export {};
