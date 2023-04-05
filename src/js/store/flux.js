const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favoritos: {},
      character: {},
      location: {},
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
        fetch("https://rickandmortyapi.com/api/character")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setStore({ character: data });
            //setStore es una función que modifica store, un elemento del objeto y tengo que indicar cual
          })
          .catch((error) => console.log(error));

        fetch("https://rickandmortyapi.com/api/location")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setStore({ location: data });
            //setStore es una función que modifica store, un elemento del objeto y tengo que indicar cual
          })
          .catch((error) => console.log(error));
      },


      agregarFavorito: (name) => {
        console.log(name);
        const store = getStore();
        const favoritos = Array.isArray(store.favoritos)
          ? [...store.favoritos]
          : [];
        if (name !== "" && !favoritos.includes(name)) {
          favoritos.push(name);
        }
        setStore({ favoritos });
      },
      

	  eliminarFavorito: (index) => {
		const store = getStore();
		const filtrado = store.favoritos.filter((fav,currentIndex) => index !== currentIndex)
		setStore ({favoritos: filtrado})
		console.log (filtrado)
	  },
	  

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
