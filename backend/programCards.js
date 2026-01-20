/** @format */

// Loads and displays programs using SupabaseAPI class
async function loadPrograms() {
  const api = new SupabaseAPI(); // Instantiate API manager class
  let data;

  try {
    data = await api.getPrograms(); // Fetch data via class method
  } catch (error) {
    console.error('Error fetching programs:', error);
    return;
  }

  // Transform data and update DOM safely
  document.getElementById("programs").innerHTML = data
    .map(
      (program) => `
        <div class="col-md-4">
          <div class="card h-100">
            <img src="${program.img_url}" class="card-img-top" alt="${program.title}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${program.title}</h5>
              <p class="card-text">${program.description}</p>
              <p class="text-muted mt-auto">${program.duration}</p>
            </div>
          </div>
        </div>
      `,
    )
    .join("");
}

loadPrograms();
