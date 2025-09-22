export const testData = {
  validUser: {
    username: process.env.TEST_USERNAME || 'admin',
    password: process.env.TEST_PASSWORD || 'admin123',
    role: 'administrator'
  },
  invalidUser: {
    username: 'invalid_user',
    password: 'invalid_pass',
    role: 'none'
  },
  salesManager: {
    username: 'sales_manager',
    password: 'sales123',
    role: 'sales_manager'
  },
  purchaseManager: {
    username: 'purchase_manager',
    password: 'purchase123',
    role: 'purchase_manager'
  },
  customers: [
    {
      id: 'CUST001',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      address: '123 Main St, City, State 12345',
      creditLimit: 5000
    },
    {
      id: 'CUST002',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+0987654321',
      address: '456 Oak Ave, City, State 67890',
      creditLimit: 3000
    },
    {
      id: 'CUST003',
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      phone: '+1122334455',
      address: '789 Pine Rd, City, State 13579',
      creditLimit: 7500
    }
  ],
  suppliers: [
    {
      id: 'SUPP001',
      name: 'ABC Suppliers Inc.',
      email: 'contact@abcsuppliers.com',
      phone: '+1112223333',
      address: '100 Industrial Blvd, City, State 24680',
      paymentTerms: 'Net 30'
    },
    {
      id: 'SUPP002',
      name: 'XYZ Corp',
      email: 'info@xyzcorp.com',
      phone: '+4445556666',
      address: '200 Commerce Dr, City, State 97531',
      paymentTerms: 'Net 15'
    },
    {
      id: 'SUPP003',
      name: 'Global Parts Ltd',
      email: 'sales@globalparts.com',
      phone: '+7778889999',
      address: '300 Supply Chain Way, City, State 86420',
      paymentTerms: 'Net 45'
    }
  ],
  products: [
    {
      id: 'PROD001',
      sku: 'SKU-001',
      name: 'Wireless Headphones',
      category: 'Electronics',
      brand: 'TechBrand',
      price: 299.99,
      cost: 150.00,
      stock: 45,
      minStock: 10,
      maxStock: 100,
      weight: 0.5,
      dimensions: '20x15x8 cm'
    },
    {
      id: 'PROD002',
      sku: 'SKU-002',
      name: 'Business Shirt',
      category: 'Clothing',
      brand: 'FashionCorp',
      price: 89.99,
      cost: 35.00,
      stock: 120,
      minStock: 20,
      maxStock: 200,
      weight: 0.3,
      dimensions: '30x25x2 cm'
    },
    {
      id: 'PROD003',
      sku: 'SKU-003',
      name: 'Office Chair',
      category: 'Furniture',
      brand: 'ComfortSeating',
      price: 549.99,
      cost: 275.00,
      stock: 25,
      minStock: 5,
      maxStock: 50,
      weight: 15.0,
      dimensions: '70x70x120 cm'
    },
    {
      id: 'PROD004',
      sku: 'SKU-004',
      name: 'Laptop Stand',
      category: 'Electronics',
      brand: 'WorkStation',
      price: 79.99,
      cost: 30.00,
      stock: 80,
      minStock: 15,
      maxStock: 150,
      weight: 2.5,
      dimensions: '35x25x15 cm'
    }
  ],
  sampleSales: [
    {
      id: 'SALE001',
      customerId: 'CUST001',
      date: '2024-01-15',
      items: [
        { productId: 'PROD001', quantity: 2, price: 299.99 },
        { productId: 'PROD004', quantity: 1, price: 79.99 }
      ],
      total: 679.97,
      status: 'completed'
    },
    {
      id: 'SALE002',
      customerId: 'CUST002',
      date: '2024-01-16',
      items: [
        { productId: 'PROD002', quantity: 3, price: 89.99 },
        { productId: 'PROD003', quantity: 1, price: 549.99 }
      ],
      total: 819.96,
      status: 'pending'
    }
  ],
  samplePurchases: [
    {
      id: 'PO001',
      supplierId: 'SUPP001',
      date: '2024-01-10',
      items: [
        { productId: 'PROD001', quantity: 50, cost: 150.00 },
        { productId: 'PROD004', quantity: 100, cost: 30.00 }
      ],
      total: 10500.00,
      status: 'received'
    }
  ]
};

// Dynamic data generators
export const generateCustomer = () => ({
  id: `CUST${faker.string.numeric(3)}`,
  name: faker.person.fullName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  address: faker.location.streetAddress({ useFullAddress: true }),
  creditLimit: faker.number.int({ min: 1000, max: 10000 })
});

export const generateSupplier = () => ({
  id: `SUPP${faker.string.numeric(3)}`,
  name: faker.company.name(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  address: faker.location.streetAddress({ useFullAddress: true }),
  paymentTerms: faker.helpers.arrayElement(['Net 15', 'Net 30', 'Net 45', 'Net 60'])
});

export const generateProduct = () => ({
  id: `PROD${faker.string.numeric(3)}`,
  sku: `SKU-${faker.string.numeric(3)}`,
  name: faker.commerce.productName(),
  category: faker.commerce.department(),
  brand: faker.company.name(),
  price: parseFloat(faker.commerce.price({ min: 10, max: 1000 })),
  cost: parseFloat(faker.commerce.price({ min: 5, max: 500 })),
  stock: faker.number.int({ min: 0, max: 200 }),
  minStock: faker.number.int({ min: 1, max: 20 }),
  maxStock: faker.number.int({ min: 50, max: 500 }),
  weight: parseFloat(faker.number.float({ min: 0.1, max: 20.0, fractionDigits: 1 })),
  dimensions: `${faker.number.int({ min: 10, max: 100 })}x${faker.number.int({ min: 10, max: 100 })}x${faker.number.int({ min: 5, max: 50 })} cm`
});

export const generateSaleItem = () => ({
  productId: faker.helpers.arrayElement(testData.products).id,
  quantity: faker.number.int({ min: 1, max: 10 }),
  price: parseFloat(faker.commerce.price({ min: 10, max: 1000 }))
});

export const generatePurchaseItem = () => ({
  productId: faker.helpers.arrayElement(testData.products).id,
  quantity: faker.number.int({ min: 10, max: 100 }),
  cost: parseFloat(faker.commerce.price({ min: 5, max: 500 }))
});