// Función asíncrona para obtener los datos de la URL
async function fetchAlbumTitles() {
    const url = 'https://jsonplaceholder.typicode.com/photos';
  
    try {
      // Hacer la solicitud fetch y esperar la respuesta
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Convertir la respuesta a JSON
      const data = await response.json();
      
      // Mostrar los primeros 20 títulos
      data.slice(0, 20).forEach(item => console.log(item.title));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Función que retorna una promesa que se resuelve después de 3 segundos
  function sendInfo() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Información Enviada');
      }, 3000);
    });
  }
  
  // Función asíncrona que llama a fetchAlbumTitles y sendInfo
  async function displayAlbumInfo() {
    await fetchAlbumTitles();
    
    // Esperar la promesa de sendInfo y mostrar el mensaje en la consola
    const message = await sendInfo();
    console.log(message);
  }
  
  // Llamar a la función principal
  displayAlbumInfo();
  