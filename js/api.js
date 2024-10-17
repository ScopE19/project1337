const newyork = document.getElementById("NewYork");
const northpole = document.getElementById("NorthPole");
const uyuni = document.getElementById("Uyuni");
const alps = document.getElementById("Alps");
const tajmahal = document.getElementById("TajMahal");

async function Api() {
  const respons_newyork = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=40.7143&longitude=-74.006&current=temperature_2m&hourly=temperature_2m"
  );
  const respons_northpole = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=-90&longitude=0.1&current=temperature_2m&hourly=temperature_2m"
  );
  const respons_uyuni = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=-20.4597&longitude=-66.825&current=temperature_2m&hourly=temperature_2m"
  );
  const respons_alps = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=45.9764&longitude=7.6586&current=temperature_2m&hourly=temperature_2m"
  );
  const respons_tajmahal = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=27.1833&longitude=78.0167&current=temperature_2m&hourly=temperature_2m"
  );
  const data_newyork = await respons_newyork.json();
  const data_northpole = await respons_northpole.json();
  const data_uyuni = await respons_uyuni.json();
  const data_alps = await respons_alps.json();
  const data_tajmahal = await respons_tajmahal.json();
  return [data_newyork, data_northpole, data_uyuni, data_alps, data_tajmahal];
}
async function output() {
  try {
    let out = await Api();
    console.log(out);
    newyork.textContent = `Air temperature: ${out[0].current.temperature_2m} \u00B0C`;
    northpole.textContent = `Air temperature: ${out[1].current.temperature_2m} \u00B0C`;
    uyuni.textContent = `Air temperature: ${out[2].current.temperature_2m} \u00B0C`;
    alps.textContent = `Air temperature: ${out[3].current.temperature_2m} \u00B0C`;
    tajmahal.textContent = `Air temperature: ${out[4].current.temperature_2m} \u00B0C`;
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(output, 10000);
  }
}
output();
