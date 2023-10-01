class ProductManager {
    constructor() {
      this.products = [];
    }
  
    generateUniqueId() {
      return Math.random().toString(31).substring(2, 10);
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct({ title, description, price, thumbnail, code, stock }) {
      if (this.products.some(product => product.code === code)) {
        throw new Error('El código de producto ya existe.');
      }
  
      const id = this.generateUniqueId();
      const product = {
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      this.products.push(product);
      return product;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (!product) {
        throw new Error('Producto no encontrado.');
      }
      return product;
    }
  }
  
 
  const productManager = new ProductManager();
  
 
  const products1 = productManager.getProducts();
  console.log(products1);
  

  const newProduct = {
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhII-NOgPLcQqYJMUJvb1zlTPZo3SfyEGTVUH-a0k&s",
    code: "abc123",
    stock: 25,
  };
  
  const addedProduct = productManager.addProduct(newProduct);
  console.log(addedProduct);
  
 
  const products2 = productManager.getProducts();
  console.log(products2);
  

  try {
    productManager.addProduct(newProduct);
  } catch (error) {
    console.error(error.message);
  }
  

  const productById = productManager.getProductById(addedProduct.id);
  console.log(productById);
  

  try {
    productManager.getProductById("ID_INVALIDO");
  } catch (error) {
    console.error(error.message);
  }
  