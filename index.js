const listCities = async () => {
  const response = await fetch(
    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
  )
  const data = await response.json()
  return data
}

window.onload = async () => {
  const cities = await listCities()
  const citiesSearchContainer = document.getElementById(
    'cities-search-container'
  )
  const citiesDataListId = 'cities-list'
  const input = document.createElement('input')
  input.setAttribute('list', citiesDataListId)
  input.setAttribute('type', 'search')
  input.setAttribute('id', 'cities-choice')
  input.className = 'search'
  citiesSearchContainer.append(input)
  const dataList = document.createElement('datalist')
  dataList.setAttribute('id', citiesDataListId)
  for (const city of cities) {
    const option = document.createElement('option')
    option.setAttribute('value', `${city.city}, ${city.state}`)
    dataList.append(option)
  }
  citiesSearchContainer.append(dataList)
}
