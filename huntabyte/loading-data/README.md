# Notes

### +page.js

    // 1 - fetch
    export  const  load  =  async  ({  fetch  })  =>  {
    	const  fetchProducts  =  async  ()  =>  {
    		const  productRes  =  await  fetch('https://dummyjson.com/products?limit=10');
    		const  productData  =  await  productRes.json();
    		return  productData.products;
    		};
    		return  {
    			products:  fetchProducts()
    	};
    };


     // multiple fetch

    export  const  load  =  async  ({  fetch  })  =>  {
    const  productRes  =  await fetch('https://dummyjson.com/products?limit=10');
    const  productData  =  await  productRes.json();
    const  products  =  productData.products;

    const  usersRes  =  await  fetch('https://dummyjson.com/users?limit=10');
    const  usersData  =  await  usersRes.json();
    const  users  =  usersData.products;
        return  {
    	    products:  products,
    		users:  users
    		};
    	};

    //multiple fetch - recommend way
    export const load = async ({ fetch }) => {
        const fetchProducts = async () => {
    	    const productRes = await fetch('https://dummyjson.com/products?limit=10')
    		const productData = await productRes.json();
    		return productData.products
    	};
    	const fetchUsers = async () => {
    	const usersRes = await fetch('https://dummyjson.com/users?limit=10')
    	const usersData = await usersRes.json()
    	return usersData.users
    	}
    	return {
    		products : fetchProducts(),
    		users : fetchUsers()
    		}
    	}


### +page.server.js

    import  'dotenv/config';

    export  const  load  =  async  ()  =>  {
        console.log('Server Load Ran');
    	const  fetchMovies  =  async  ()  =>  {
    	const  res  =  await  fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.TMDB_API_KEY}`);
    	const  data  =  await  res.json();
    	return  data.results;
    	};
       return  {
    	   movies:  fetchMovies()
    	};
       };
