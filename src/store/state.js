let defaultCity = ''
try {
  defaultCity = localStorage.city || '南充'
} catch (e) {

}

export default {
  city: defaultCity
}
